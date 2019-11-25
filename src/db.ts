import { Sequelize, Options } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize(config.get('database') as Options);

export default sequelize;
