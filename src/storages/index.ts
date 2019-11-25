import sequelize from '../db';

import user from './user';
import image from './image';
import name from './name';
import message from './message';

// eslint-disable-next-line
export const initStorage = (_sequelize): any => {
  const nameModel = name.model;
  const userModel = user.model;
  const imageModel = image.model;
  const messageModel = message.model;

  const userService = new user.service({ userModel, nameModel, imageModel });
  // const nameService = new name.service({ nameModel });
  // const imageService = new image.service({ imageModel });
  const messageService = new message.service({
    messageModel,
    userModel,
    imageModel,
    nameModel,
  });

  return {
    user: {
      model: userModel,
      service: userService,
    },
    name: {
      model: nameModel,
      // service: nameService,
    },
    image: {
      model: imageModel,
      // service: imageService,
    },
    message: {
      model: messageModel,
      service: messageService,
    },
  };
};

export default initStorage(sequelize);
