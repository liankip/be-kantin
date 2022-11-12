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
    }
}