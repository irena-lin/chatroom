import { DataTypes, Sequelize } from 'sequelize';
import { Image } from '../../schemas/image';
import sequelize from '../../db';

const init = (sequelize: Sequelize): typeof Image => {
  Image.init(
    {
      image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      path: {
        type: DataTypes.STRING,
      },
      occupied: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'Image',
      sequelize,
      underscored: true,
    },
  );

  return Image;
};

export default init(sequelize);
