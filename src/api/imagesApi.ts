import { CatImage } from '../interfaces/CatImage';
import instance from './instance';

export async function getImage(id: string) {
  try {
    const response = await instance.get<CatImage>(`images/${id}`);
    return { image: response.data, error: false };
  } catch {
    return { error: true };
  }
}
