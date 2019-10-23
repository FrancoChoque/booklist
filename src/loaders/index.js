const expressLoader = require('./express');
const passportLoader = require('./passportLoader');

module.exports = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  await passportLoader({ app: expressApp });
  console.log('✌️ Express loaded');
};