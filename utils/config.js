require('dotenv').config()

const DBURI =
  process.env.NODE_ENV.toLowerCase() === 'test'
    ? process.env.TEST_MONGODBURI
    : process.env.MONGODBURI

module.exports = {
  DBURI,
}
