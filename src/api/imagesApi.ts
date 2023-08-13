import { CatImage } from '../interfaces/CatImage';
import instance from './instance';

export async function getImage(id: string) {
  const response = await instance.get<CatImage>(`images/${id}`);
  return response.data;
}
