/* const express = require('express');
const config = require('./config');
const loaders = require('./loaders');

async function startServer() {
  const app = express();

  await loaders({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.error(err);
      process.exit(1);
      return;
    }
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer(); */
require('dotenv').config();
const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./loaders/auth');
auth(passport);
app.use(passport.initialize());
app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/',
    }),
    (req, res) => {}
);
app.listen(3001, () => {
    console.log('Server is running on port 3000');
});