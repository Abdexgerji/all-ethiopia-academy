const express = require('express');
const next = require('next');
// const { createProxyMiddleware } = require('http-proxy-middleware');
var fs = require('fs');
// const colors = require('colors');
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

    app.get('/api/test', (req, res) => {
      console.log('test');
      res.send('test!');
    });

    // Global Error Handler. IMPORTANT function params MUST start with err
    app.use((err, req, res, next) => {
      console.log('err.stack==>'.red.bold, err.stack);
      console.log('err.name==>'.red.underline, err.name);
      console.log('err.code==>'.red.inverse, err.code);
      console.log('err==>'.red, err);

      res.status(500).send('Internal server error from express');

      // to add write errors to globalerr.txt file
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
    // add errors to err.txt file
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
