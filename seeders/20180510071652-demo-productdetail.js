'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let date = new Date();

    return queryInterface.bulkInsert('Productdetails', [{
      totalProduct: 1,
      totalPricing: 200000,
      imagepath: '/images/efd.jpg',
      ProductId: 1,
      TransactionId: 1,
      createdAt: date,
      updatedAt: date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Productdetails', null, {});
  }
};