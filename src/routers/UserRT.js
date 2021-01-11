module.exports = app => {
    var UserCT = require('../controller/UserCT.js')
    var router = require('express').Router()

    router.post('/user', UserCT.store)
    
    router.post('/login', UserCT.login)

    app.use("/api", router)
}