import { CatImage } from '../interfaces/CatImage';
import instance from './instance';

export async function getImageById(imageId: string) {
  const response = await instance.get<CatImage>(`images/${imageId}`);
  return response.data;
}
