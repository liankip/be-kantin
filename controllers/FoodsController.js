const db = require('../models/index');
const {QueryTypes} = require("sequelize");
const Foods = db['foods'];

module.exports = {
    GetFoods: async (req, res, next) => {
        try {
            var params = '';
            if (req.query.roles <= 1) {
                params = 'WHERE f.userId = ' + req.query.userid + '\n'
            }

            db.sequelize.query('SELECT f.id, f.foto, f.nama, f.harga, f.promo, f.deskripsi, SUM(r.rating) as rating\n' +
                'FROM reviews r\n' +
                'INNER JOIN foods f ON r.foodId = f.id\n' +
                params +
                'GROUP BY r.foodId\n' +
                'ORDER BY rating DESC', {
                type: QueryTypes.SELECT
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
            db.sequelize.query('SELECT f.id, f.foto, f.nama, f.harga, f.promo, f.deskripsi, SUM(r.rating) as rating\n' +
                'FROM reviews r\n' +
                'INNER JOIN foods f ON r.foodId = f.id\n' +
                'WHERE r.foodId = ' + req.params.id, {
                type: QueryTypes.SELECT
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send([])
            })
        } catch (e) {
            res.send(e.message)
        }
    },

    AddFood: async (req, res, next) => {
        try {
            let {
                userid,
                foto,
                nama,
                harga,
                promo,
                deskripsi
            } = req.body

            Foods.create({
                userId: userid,
                foto: foto,
                nama: nama,
                harga: harga,
                promo: promo,
                deskripsi: deskripsi,
                createdAt: new Date(),
                updatedAt: new Date()
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send(error.message)
            })
        } catch (e) {
            res.send(e.message)
        }
    },

    EditFood: async (req, res, next) => {
        try {
            let {
                foto,
                nama,
                harga,
                promo,
                deskripsi
            } = req.body

            Foods.update({
                foto: foto,
                nama: nama,
                harga: harga,
                promo: promo,
                deskripsi: deskripsi,
                updatedAt: new Date()
            }, {
                where: {
                    id: req.params.id
                }
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send(error.message)
            })
        } catch (e) {
            res.send(e.message)
        }
    },

    DeleteFood: async (req, res, next) => {
        try {
            Foods.destroy({
                where: {
                    id: req.params.id
                }
            }).then(Res => {
                res.status(200).send({data: Res})
            }).catch(error => {
                res.status(400).send(error.message)
            })
        } catch (e) {
            res.send(e.message)
        }
    }
}