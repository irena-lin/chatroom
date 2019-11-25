import { Model } from 'sequelize';
import _ from 'lodash';

export class MessageInput {
  public content?: string;
  public user_id?: number;

  constructor(data: any = {}) {
    this.content = _.toString(data.content);
    this.user_id = _.toInteger(data.user_id);
  }
}

export class Message extends Model {
  public message_id?: number;
  public content?: string;
  public user_id?: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}
