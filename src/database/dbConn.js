const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const GestorMD = require('../models/GestorMD')


const connection = new Sequelize(dbConfig)

module.exports = connection