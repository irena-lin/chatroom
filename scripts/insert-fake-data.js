#!/usr/bin/env node

const sequelize = require('../src/db').default;
const storage = require('../src/storages').default;
const createFakeImage = require('../src/util/insert_image_data').default;
const createFakeName = require('../src/util/insert_name_data').default;

const main = async () => {
  let transaction;
  try {
    transaction = await sequelize.transaction();
    await createFakeImage(storage.image.model, { transaction });
    await createFakeName(storage.name.model, { transaction });
    await transaction.commit();
  }
  catch (err) {
    console.error(err);
    await transaction.rollback();
    process.exit(1);
  }
}

main().then(() => process.exit(0));
