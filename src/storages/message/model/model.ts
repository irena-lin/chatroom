import { DataTypes, Sequelize } from 'sequelize';
import { Message } from '../../../schemas/message';
import sequelize from '../../../db';

const init = (sequelize: Sequelize): typeof Message => {
  Message.init(
    {
      message_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
      },
      time: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'Message',
      sequelize,
      underscored: true,
    },
  );

  return Message;
};

export default init(sequelize);
