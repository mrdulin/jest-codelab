import { collection } from './collection';

type Collection = any;

export const getClient = (): Collection => {
  return collection(process.env.DB_COLLECTION || 'Null');
};
