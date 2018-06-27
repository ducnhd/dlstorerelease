'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let date = new Date();

    return queryInterface.bulkInsert('Products', [{
      title: 'Áo thun nữ',
      imagepathLarge: '/images/bcd.jpg',
      pricing: 200000,
      description: 'Áo dành cho con gái',
      TypeId: 1,
      createdAt: date,
      updatedAt: date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
