import { Resolver, ExampleInput } from '@src/types';

export const removeExample: Resolver<boolean, { input: ExampleInput }> = async (
  _,
  { input }
) => {
  console.log(input);

  return true;
};
