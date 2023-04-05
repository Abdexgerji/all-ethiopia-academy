const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
var fs = require('fs');
const colors = require('colors');
require('dotenv').config();
// console.log('process.env.NODE_ENV-->', process.env.NODE_ENV);
// console.log('server.js process.env-->', process.env);

// const dev = process.env.NODE_ENV !== 'production';

// if you want to launch your app in production set dev = false, it will use  the builded app
// if you want to launch your app in development set dev = true
// use the below one for cpanel
const dev = false;
// const app = next({ dev });
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const morgan = require('morgan');

nextApp
  .prepare()
  .then(() => {
    const app = express();
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // express logic can be written here//

    // to force https i used the below two logics, redirect every http request to https
    app.enable('trust proxy');
    app.use(function (request, response, next) {
      if (!request.secure) {
        return response.redirect(
          'https://' + request.headers.host + request.url
        );
      }

      next();
    });

    const { readdirSync } = require('fs');
    const csrf = require('csurf');
    const cookieParser = require('cookie-parser');
    const cors = require('cors');
    const csrfProtection = csrf({ cookie: true });

    // apply proxy in dev mode
    // if (dev) {
    // app.use(morgan('dev'));

    var path = require('path');

    // create a write stream (in append mode)
    var accessLogStream = fs.createWriteStream(
      path.join(__dirname, 'access.log'),
      { flags: 'a' }
    );

    // setup the logger
    // app.use(morgan('combined', { stream: accessLogStream }))
    // app.use(morgan('"remote-addr--> :remote-addr" - "remote-user--> :remote-user" [:date[web]] ":method :url HTTP/:http-version" :status "res[content-length]--> :res[content-length]" "referrer--> :referrer" "user-agent--> :user-agent" "response-time ms--> :response-time ms" "reqHeader :req[header]" "resHeader :res[header]" "totalTime :total-time[digits]ms"', { stream: accessLogStream }))
    app.use(
      morgan(
        '[:date[web]]      ":method :url HTTP/:http-version"     "statusCode--> :status"                "response-time ms--> :response-time ms" "totalTime :total-time[digits]ms" "res[content-length]--> :res[content-length]" "referrer--> :referrer" "user-agent--> :user-agent"  "reqHeader :req[header]" "resHeader :res[header]"  "remote-addr--> :remote-addr" - "remote-user--> :remote-user" ',
        { stream: accessLogStream }
      )
    );

    // app.use(
    //   '/api',
    //   createProxyMiddleware({
    //     target: 'http://localhost:8000',
    //     changeOrigin: true,
    //   })
    // );
    // }

    readdirSync('./back-end/routes').map((r) =>
      app.use(
        '/api',
        cors(),
        express.json(),
        cookieParser(),
        require(`./back-end/routes/${r}`)
      )
    );

    // rt()
    // const authRoutes = require('./back-end/routes/auth')

    // app.use('/api',authRoutes)

    app.get('/api/csrf-token', cookieParser(), csrfProtection, (req, res) => {
      res.json({ csrfToken: req.csrfToken() });
    });

    app.get('/fuck', (req, res) => {
      console.log('f u');
      res.send('fuck u!');
    });

    // const test = require('./back-end/routes/testRoutes');
    // app.use('/f', test);
    // Global Error Handler. IMPORTANT function params MUST start with err
    app.use((err, req, res, next) => {
      console.log('err.stack==>'.red.bold, err.stack);
      console.log('err.name==>'.red.underline, err.name);
      console.log('err.code==>'.red.inverse, err.code);
      console.log('err==>'.red, err);

      if (
        err.stack.includes('jwt expired') ||
        err.stack.includes('No authorization token was found')
      ) {
        res.status(400).send('Please login again!');
      }
      res.status(500).send('Internal server error from express');

      fs.appendFile(
        'globalerr.txt',
        `\n -${new Date()}- err--> ${err} \n stack--> ${err.stack}`,
        function (err) {
          //   if (err) throw err;
          //   console.log('Saved!');
        }
      );
    });

    // express logic should be above this line
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    app.all('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  })
  .catch((err) => {
    fs.appendFile(
      'err.txt',
      `\n -${new Date()}- err--> ${err} \n stack--> ${err.stack}`,
      function (err) {
        //   if (err) throw err;
        //   console.log('Saved!');
      }
    );
    console.log('Error', err);
  });

// // server.js
// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');

// const dev = true;
// const hostname = 'localhost';
// const port = 3000;
// // when using middleware `hostname` and `port` must be provided below
// const app = next({ dev, hostname, port });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true);
//     const { pathname, query } = parsedUrl;

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query);
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query);
//     } else {
//       handle(req, res, parsedUrl);
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });
