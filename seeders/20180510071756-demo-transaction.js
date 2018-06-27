'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let date = new Date();

    return queryInterface.bulkInsert('Transactions', [{
      status: 0,
      totalPricing: 200000,
      address: "D2, Bình Thạnh",
      phonenumber: "0933122266",
      CustomerId: 1,
      createdAt: date,
      updatedAt: date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  }
};
