import { Cat } from '../interfaces/Cat';
import instance from './instance';

export async function getCat(id: string) {
  const response = await instance.get(`breeds/${id}`);
  const cat: Cat = { ...response.data, weight: response.data.weight.metric };
  return cat;
}
