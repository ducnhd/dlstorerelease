'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let date = new Date();

    return queryInterface.bulkInsert('Customers', [{
      userLogin: 'loc123456',
      password: 'abc123456',
      name: 'Trần Phước Lộcq',
      imagepath: '/images/abc.jpg',
      address: '24/D Bình Thạnh, Tp.HCM',
      email: 'phuocloc97@gmail.com',
      phonenumber: '0933266013',
      note: 'Account người dùng',
      createdAt: date,
      updatedAt: date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};