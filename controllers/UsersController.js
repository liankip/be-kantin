const db = require('../models/index');
const Users = db['users'];

module.exports = {
    Userslogin: async (req, res, next) => {
        try {
            let {
                username,
                password
            } = req.body

            Users.findOne({
                where: {
                    username: username,
                    password: password
                }
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send([])
            })
        } catch (e) {
            res.send(e.message)
        }
    },

    UsersRegister: async (req, res, next) => {
        try {
            let {
                username,
                email,
                password,
                nomor_telephone,
                roles
            } = req.body

            Users.create({
                username: username,
                email: email,
                password: password,
                nomor_telephone: nomor_telephone,
                roles: roles
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send([])
            })
        } catch (e) {
            res.send(e.message)
        }
    }
}