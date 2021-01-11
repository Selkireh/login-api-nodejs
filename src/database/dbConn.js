const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const UserMD = require('../models/UserMD')

const connection = new Sequelize(dbConfig)

UserMD.init(connection)

module.exports = connection