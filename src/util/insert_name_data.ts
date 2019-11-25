import { Name } from '../schemas/name';

const fakeName = [
  {
    name_id: 1,
    name: '路人1',
    number_of_uses: 0,
  },
  {
    name_id: 2,
    name: '路人2',
    number_of_uses: 0,
  },
  {
    name_id: 3,
    name: '路人3',
    number_of_uses: 0,
  },
  {
    name_id: 4,
    name: '路人4',
    number_of_uses: 0,
  },
  {
    name_id: 5,
    name: '路人5',
    number_of_uses: 0,
  },
  {
    name_id: 6,
    name: '路人6',
    number_of_uses: 0,
  },
  {
    name_id: 7,
    name: '路人7',
    number_of_uses: 0,
  },
  {
    name_id: 8,
    name: '路人8',
    number_of_uses: 0,
  },
  {
    name_id: 9,
    name: '路人9',
    number_of_uses: 0,
  },
];

const createFakeImage = async (
  nameModel: typeof Name,
  params: any = {},
): Promise<any[]> => {
  const name = [];
  for (let i = 0; i < fakeName.length; i++) {
    name.push(
      await nameModel.create(fakeName[i], {
        transaction: params.transaction,
      }),
    );
  }

  return name;
};

export default createFakeImage;
