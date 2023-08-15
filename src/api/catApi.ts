import { Cat } from '../interfaces/Cat';
import instance from './instance';

export async function getCats() {
  try {
    const response = await instance.get('breeds');
    const cats: Cat[] = response.data.map((cat: Cat, index: number) => ({
      ...cat,
      weight: response.data[index].weight.metric,
    }));
    return { cats: cats, error: false };
  } catch {
    return { error: true };
  }
}
