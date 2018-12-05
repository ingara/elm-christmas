const express = require('express');
const helmet = require('helmet');
const next = require('next');
const compression = require('compression');
const siteConfig = require('./config');

const utcDate = date => {
  return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
};

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const runTheTrap = async () => {
  try {
    await app.prepare();
    const server = express();

    // enable helmet to set security headers
    server.use(helmet());

    // gzip it!
    server.use(compression());

    // Pass static assets
    server.use('/static', express.static('static'));

    // handle authors
    server.get('/author/:slug', (req, res) => {
      const context = {
        slug: req.params.slug,
      };
      app.render(req, res, '/author', context);
    });

    // Handle direct year routes
    server.get('/:year(\\d{4})', (req, res) => {
      const context = {
        year: req.params.year,
        mode: req.query.mode,
      };
      app.render(req, res, '/year', context);
    });

    // Handle post routes
    server.get('/:year(\\d{4})/:date(\\d{1,2})', (req, res) => {
      const context = {
        year: req.params.year,
        date: req.params.date.padStart(2, '0'),
        mode: req.query.mode,
      };
      app.render(req, res, '/post', context);
    });

    // Handle 2017's routes
    // One year in, and we already have legacy shit to deal with
    if (siteConfig.handleLegacyLinks) {
      server.get('/:date(\\d{1,2})', (req, res) => {
        res.redirect(`/2017/${req.params.date}`);
      });
    }

    // Handle today route
    server.get('/today', (req, res) => {
      let todayDate = utcDate(new Date());
      const lastDate = utcDate(new Date(2018, 11, 24));
      if (todayDate > lastDate) {
        todayDate = lastDate;
      }
      const context = {
        year: todayDate.getFullYear(),
        date: todayDate.getDate().toString().padStart(2, '0'),
        mode: req.query.mode,
      };
      app.render(req, res, '/post', context);
    })

    // Handle all basic routes
    server.get('*', (...args) => handle(...args));

    // Start the server itself!
    server.listen(3000, err => {
      if (err) {
        throw err;
      }
      console.log('Listening on port 3000');
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
runTheTrap();
