import { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { getImage } from '../api';
import { ImageDimensions } from '../interfaces';
import { findImageInCache } from '../services';

const screenWidth = Dimensions.get('window').width;

export function useImageStyle(imageId: string) {
  const [dimensions, setDimensions] = useState<ImageDimensions>({ height: 1, width: 1 });

  useEffect(() => {
    async function loadImage(imageId: string) {
      const image = await findImageInCache(imageId);
      if (image.exists) {
        Image.getSize(image.uri!, (width, height) => {
          setDimensions({ width, height });
        });
      } else {
        const image = await getImage(imageId);
        setDimensions({ width: image.width, height: image.height });
      }
    }
    if (imageId) {
      loadImage(imageId);
    }
  }, [imageId]);

  const ratio = screenWidth / dimensions.width;

  return StyleSheet.create({
    image: {
      resizeMode: 'cover',
      height: dimensions.height * ratio,
      width: dimensions.width * ratio,
    },
  });
}
