import { Application } from 'express';
import sendMessage from './sendMessage';
import getMessageAtlatest from './getMessageAtlatest100';
import register from './register';
import isLeft from './isLeft';

const mountAPI = (app: Application): void => {
  app.post('/send/:user_id', sendMessage());
  app.get('/register', register());
  app.get('/message/latest', getMessageAtlatest());
  app.get('/isLeft/:user_id', isLeft());
};

export default mountAPI;
