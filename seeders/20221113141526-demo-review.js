'use strict';
const {faker} = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    const newData = [];

    for (let i = 0; i < 40; i++) {
      const seedData = {
        userId: faker.datatype.number({min: 3, max: 8}),
        foodId: faker.datatype.number({min: 1, max: 10}),
        rating: faker.datatype.number({min: 1, max: 5}),
        review: faker.random.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      newData.push(seedData);
    }

    return queryInterface.bulkInsert('reviews', newData);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
