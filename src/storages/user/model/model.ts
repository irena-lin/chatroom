import { DataTypes, Sequelize } from 'sequelize';
import { User } from '../../../schemas/user';
import sequelize from '../../../db';

const init = (sequelize: Sequelize): typeof User => {
  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      is_left: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'User',
      sequelize,
      underscored: true,
    },
  );

  return User;
};

export default init(sequelize);
