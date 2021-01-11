module.exports = app => {
    var UserCT = require('../controller/UserCT.js')
    var router = require('express').Router()

    router.post('/user', UserCT.salvar)

    app.use("/api", router)
}