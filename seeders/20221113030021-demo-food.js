const {faker} = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const newData = [];

        for (let i = 0; i < 10; i++) {
            const seedData = {
                userId: faker.datatype.number({min: 1, max: 2}),
                foto: faker.image.food(),
                nama: faker.random.word(),
                harga: 10000,
                promo: 10,
                deskripsi: faker.lorem.sentence(),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            newData.push(seedData);
        }

        return queryInterface.bulkInsert('foods', newData);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('People', null, {});
    }
};
