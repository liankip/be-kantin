const db = require('../models/index');
const Foods = db['foods'];

module.exports = {
    GetFoods: async (req, res, next) => {
        try {
            var params;
            if (req.query.roles <= 1) {
                params = {
                    userId: req.query.userid
                }
            }

            Foods.findAll({
                where: params
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send([])
            })
        } catch (e) {
            res.send(e.message)
        }
    },

    GetFood: async (req, res, next) => {
        try {
            Foods.findOne({
                where: {
                    id: req.params.id
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