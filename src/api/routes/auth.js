const Router = require('express').Router;

const route = Router();

module.exports = (app) => {
  app.use('/aut', route);

  route.get('/signup', async (req, res, next) => {      
      try {
        return res.status(201).json({ "ok": 'ok' });
      } catch (e) {
        return next(e);
      }
    },
  );
  route.get('/signup', async (req, res, next) => {      
    try {
      return res.status(201).json({ "ok": 'ok' });
    } catch (e) {
      return next(e);
    }
  },
);
};