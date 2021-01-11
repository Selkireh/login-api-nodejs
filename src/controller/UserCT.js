const userMD = require('../models/userMD')

module.exports.salvar = async (req, res) => {
    const { name, email, password, password_hash, status } = req.body

    const salvo = userMD.create({ name, email, password, password_hash, status })

    return res.json(salvo)
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body

    const userFind = userMD.findOne({ where : { email: email, password: password }})

    if (!userFind)
        return res.status(400).send({ error: "usuario não encontrado"})

    return res.send({ name: userFind.dataValues.name, password: userFind.dataValues.password })
}