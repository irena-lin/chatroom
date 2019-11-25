import { Model } from 'sequelize';
import _ from 'lodash';

export class UserInput {
  public name?: string;
  public image_id?: number;
  public is_left?: boolean;

  constructor(data: any = {}) {
    this.image_id = _.toInteger(data.image_id);
    this.name = _.toString(data.name);
    this.is_left = data.is_left;
  }
}

export class User extends Model {
  public user_id?: number;
  public name?: string;
  public image_id?: number;
  public is_left?: boolean;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}
