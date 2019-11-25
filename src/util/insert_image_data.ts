import { Image } from '../schemas/image';

const fakeImage = [
  {
    image_id: 1,
    path: '1.png',
    occupied: true,
  },
  {
    image_id: 2,
    path: '2.png',
    occupied: false,
  },
  {
    image_id: 3,
    path: '3.png',
    occupied: false,
  },
];

const createFakeImage = async (
  imageModel: typeof Image,
  params: any = {},
): Promise<any[]> => {
  const image = [];
  for (let i = 0; i < fakeImage.length; i++) {
    image.push(
      await imageModel.create(fakeImage[i], {
        transaction: params.transaction,
      }),
    );
  }

  return image;
};

export default createFakeImage;
