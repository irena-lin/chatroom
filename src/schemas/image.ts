import { Model } from 'sequelize';
import _ from 'lodash';

export class ImageInput {
  public path?: string;
  public occupied?: boolean;

  constructor(data: any = {}) {
    this.path = _.toString(data.path);
    this.occupied = data.occupied;
  }
}

export class Image extends Model {
  public image_id?: number;
  public path?: string;
  public occupied?: boolean;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}
