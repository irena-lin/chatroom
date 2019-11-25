import storages from '../storages';
import { Request, Response, NextFunction } from 'express';
import sequelize from '../db';

const sendMessage = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
      const message = await storages.message.service.sendMessage(
        req.params.user_id,
        req.body.content,
        transaction,
      );

      await transaction.commit();

      return res.status(200).json(message);
    } catch (err) {
      await transaction.rollback();
      next(err);
    }
  };
};

export default sendMessage;
