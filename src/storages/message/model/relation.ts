import Message from './model';
import User from '../../user/model/model';

const init = (): typeof Message => {
  Message.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id',
  });

  return Message;
};

export default init();
