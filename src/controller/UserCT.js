const UserMD = require('../models/UserMD')

module.exports.store = async (req, res) => {

    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password_hash: req.body.password_hash ? req.body.password_hash : "asdasd",
        status: req.body.status ? req.body.status : true
    }

    await UserMD.create({ name: user.name,email: user.email,password: user.password,password_hash: user.password_hash,status: user.status })
    .then((re) => {
        res.send(re)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).send({ error: "ocorreu um erro"})
    })

}

module.exports.login = async (req, res) => {
    const { email, password } = req.body

    const userFind = await UserMD.findOne({ where : { email: email, password: password }})

    if (!userFind)
        return res.status(400).send({ error: "usuario não encontrado"})

    return res.send({ name: userFind.dataValues.name, password: userFind.dataValues.password })
}