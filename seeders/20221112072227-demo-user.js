'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            username: 'kantin1',
            password: '123456',
            email: 'example@example.com',
            nomor_telephone: '8126758292',
            roles: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            username: 'kantin2',
            password: '135791',
            email: 'example@example.com',
            nomor_telephone: '8126758292',
            roles: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            username: '191110112',
            password: '123456',
            email: '191110112@example.com',
            nomor_telephone: '8126758292',
            roles: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
