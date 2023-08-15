import { Cat } from '../interfaces/Cat';
import instance from './instance';

interface CatsSource {
  cats?: Cat[];
  error: boolean;
}

export async function getCats(): Promise<CatsSource> {
  try {
    const response = await instance.get('breeds');
    const cats: Cat[] = response.data.map((cat: Cat, index: number) => {
      return { ...cat, weight: response.data[index].weight.metric };
    });
    return { cats: cats, error: false };
  } catch {
    return { error: true };
  }
}
