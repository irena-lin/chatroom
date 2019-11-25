import { User } from '../../schemas/user';
import { Name } from '../../schemas/name';
import { Image } from '../../schemas/image';
import { Transaction } from 'sequelize';
import _ from 'lodash';

export interface UserServiceInitOptions {
  userModel: typeof User;
  nameModel: typeof Name;
  imageModel: typeof Image;
}

export class UserService {
  private userModel: typeof User;
  private nameModel: typeof Name;
  private imageModel: typeof Image;

  constructor(options: UserServiceInitOptions) {
    this.userModel = options.userModel;
    this.nameModel = options.nameModel;
    this.imageModel = options.imageModel;
  }

  private async randomName(transaction: Transaction): Promise<Name> {
    const nameList = await this.nameModel.findAll({ transaction });

    const randomNameNum = Math.floor(
      Math.random() * Math.floor(nameList.length),
    );

    const name = nameList[randomNameNum];

    await name.update(
      { number_of_uses: name.number_of_uses + 1 },
      { transaction },
    );

    return name.reload({ transaction });
  }

  private async randomImage(transaction: Transaction): Promise<Image> {
    const imageList = await this.imageModel.findAll({ transaction });

    const randomImageNum =
      Math.floor(Math.random() * Math.floor(imageList.length - 1)) + 1;

    const image = imageList[randomImageNum];

    await image.update({ occupied: true }, { transaction });

    return image.reload({ transaction });
  }

  public async register(
    transaction: Transaction,
  ): Promise<{ user: User; image_path: string }> {
    const name = await this.randomName(transaction);

    const image = await this.randomImage(transaction);

    const user = await this.userModel.create(
      {
        image_id: image.image_id,
        name: '第' + [name.number_of_uses] + '位 ' + name.name,
        is_left: false,
      },
      { transaction },
    );

    return { user, image_path: image.path };
  }

  // occupied 未更改成功
  public async isLeft(
    user_id: number,
    transaction: Transaction,
  ): Promise<User> {
    const user = await this.userModel.findOne({
      transaction,
      where: {
        user_id,
        is_left: false,
      },
    });

    if (!user) throw new Error('User Not Found or Already Left.');

    await this.imageModel.update(
      { occupied: false },
      {
        where: { image_id: user.image_id },
        transaction,
      },
    );

    await this.nameModel.update(
      { number_of_uses: _.toInteger(user.name.split('第')[1].split('位')[0]) },
      {
        where: { name: user.name.split(' ')[1] },
        transaction,
      },
    );

    await user.update({ is_left: true, image_id: 1 }, { transaction });

    return user.reload({ transaction });
  }
}
