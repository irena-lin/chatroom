import User from './model';
import Image from '../../image/model';

const init = (): typeof User => {
  User.belongsTo(Image, {
    as: 'image',
    foreignKey: 'image_id',
  });

  return User;
};

export default init();
