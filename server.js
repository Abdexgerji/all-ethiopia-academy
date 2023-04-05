const express = require('express');
const next = require('next');
// const { createProxyMiddleware } = require('http-proxy-middleware');
const colors = require('colors');
require('dotenv').config();
// console.log('process.env.NODE_ENV-->', process.env.NODE_ENV);
// console.log('server.js process.env-->', process.env);

const dev = process.env.NODE_ENV !== 'production';

// if you want to launch your app in production set dev = false, it will use  the builded app
// if you want to launch your app in development set dev = true
// use the below one for cpanel
// const dev = false;
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

    app.use(morgan('dev'));

    // Global Error Handler. IMPORTANT function params MUST start with err
    app.use((err, req, res, next) => {
      console.log('err.stack==>'.red.bold, err.stack);
      console.log('err.name==>'.red.underline, err.name);
      console.log('err.code==>'.red.inverse, err.code);
      console.log('err==>'.red, err);

      res.status(500).send('Internal server error from express');
    });

    // express logic should be above this line
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    app.all('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000'.blue.bold);
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  })
  .catch((err) => {
    console.log('Error'.red.bold, err);
  });
