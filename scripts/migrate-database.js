#!/usr/bin/env node

const sequelize = require('../src/db');
const storage = require('../src/storages');

sequelize.default.sync({ force: true })
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
});