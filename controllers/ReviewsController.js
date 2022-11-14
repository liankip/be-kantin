const db = require('../models/index');
const Reviews = db['reviews'];

module.exports = {
    GetReviews: async (req, res, next) => {
        try {
            Reviews.findAll({
                order: [
                    ['id', 'DESC'],
                ],
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