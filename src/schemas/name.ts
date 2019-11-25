import { Model } from 'sequelize';
import _ from 'lodash';

export class NameInput {
  public name?: string;

  constructor(data: any = {}) {
    this.name = _.toString(data.name);
  }
}

export class Name extends Model {
  public name_id?: number;
  public name?: string;
  public number_of_uses?: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}
