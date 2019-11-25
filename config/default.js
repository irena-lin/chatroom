const Sequelize = require('sequelize');
const path = require('path');

const config = {
  debug: true,
  key: 'Give_me_10_million_dollars',
  database: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'chatroom_refactor',
  },
  fileStore: {
    path: path.normalize(path.join(__dirname, '../public')),
  }
};

module.exports = config;
