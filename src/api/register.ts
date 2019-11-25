import storages from '../storages';
import { Request, Response, NextFunction } from 'express';
import sequelize from '../db';

const register = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const transaction = await sequelize.transaction();
    try {
      const user = await storages.user.service.register(transaction);

      await transaction.commit();

      return res.status(200).json(user);
    } catch (err) {
      await transaction.rollback();
      next(err);
    }
  };
};

export default register;
