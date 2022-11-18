const mongoose = require('mongoose')
const logger = require('./logger')

exports.connectDb = async (URI) => {
  try {
    const conn = await mongoose.connect(URI)
    logger.info(`Connected to ${conn.connection.host}`)
  } catch (error) {
    logger.error('A problem occured connecting to the database', error)
  }
}
