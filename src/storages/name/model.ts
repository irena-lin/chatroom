import { DataTypes, Sequelize } from 'sequelize';
import { Name } from '../../schemas/name';
import sequelize from '../../db';

const init = (sequelize: Sequelize): typeof Name => {
  Name.init(
    {
      name_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number_of_uses: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'Name',
      sequelize,
      underscored: true,
    },
  );

  return Name;
};

export default init(sequelize);
