import { Resolver } from '@src/types';
import Shop, { ShopRequest } from '@src/models/Shop';

export const processShopRequest: Resolver<
  void,
  { input: { shop: string; validate: boolean } }
> = async (_, { input }) => {
  const request = await ShopRequest.findByIdAndDelete(input.shop, (err) => {
    if (err) throw err;
  });

  if (input.validate === true) {
    const swap = new Shop(request.toJSON());

    await swap.save((err) => {
      if (err) throw err;
    });
  }
  return;
};
