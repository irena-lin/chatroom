import { User } from '../../schemas/user';
import { Name } from '../../schemas/name';
import { Image } from '../../schemas/image';
import { Message } from '../../schemas/message';
import { Transaction } from 'sequelize';
import moment from 'moment';

export interface MessageServiceInitOptions {
  userModel: typeof User;
  nameModel: typeof Name;
  imageModel: typeof Image;
  messageModel: typeof Message;
}

export class MessageService {
  private userModel: typeof User;
  private nameModel: typeof Name;
  private imageModel: typeof Image;
  private messageModel: typeof Message;

  constructor(options: MessageServiceInitOptions) {
    this.userModel = options.userModel;
    this.nameModel = options.nameModel;
    this.imageModel = options.imageModel;
    this.messageModel = options.messageModel;
  }

  public async sendMessage(
    user_id: number,
    content: string,
    transaction: Transaction,
  ): Promise<Message> {
    const user = await this.userModel.findByPk(user_id, { transaction });

    if (!user) throw new Error('User Not Found');

    const message = await this.messageModel.create(
      {
        content,
        user_id,
        time: moment().toDate(),
      },
      { transaction },
    );

    return message;
  }

  public async getMessageAtLatest100(
    transaction: Transaction,
  ): Promise<Message[]> {
    const message = await this.messageModel.findAll({
      transaction,
      limit: 100,
      order: [['message_id', 'ASC']],
      include: [
        {
          model: this.userModel,
          attributes: ['name', 'user_id', 'is_left'],
          as: 'user',
          include: [
            { model: this.imageModel, attributes: ['path'], as: 'image' },
          ],
        },
      ],
    });

    return message;
  }
}
