import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { getImage } from '../api';
import { cacheImage, findImageInCache } from '../utils';
import Loading from './Loading';

interface FastImageProps {
  imageId: string;
  style: StyleProp<ImageStyle>;
}

const FastImage = ({ imageId, style }: FastImageProps) => {
  const [imageSource, setImageSource] = useState('');

  async function fetchImageUrl(imageId: string) {
    try {
      const image = await getImage(imageId);
      return {
        imageUrl: image.url,
        fetched: true,
      };
    } catch (error) {
      return {
        fetched: false,
      };
    }
  }

  useEffect(() => {
    async function loadImage() {
      const cacheFileUri = `${FileSystem.cacheDirectory}${imageId}.jpg`;
      const imageInCache = await findImageInCache(cacheFileUri);
      if (imageInCache.exists) {
        setImageSource(cacheFileUri);
      } else {
        const image = await fetchImageUrl(imageId);
        if (!image.fetched) {
          return;
        }
        const cached = await cacheImage(image.imageUrl!, cacheFileUri);
        if (cached.cached) {
          setImageSource(cached.path!);
        }
      }
    }
    loadImage();
  }, []);

  return (
    <>
      {imageSource.length !== 0 ? (
        <Image source={{ uri: imageSource }} style={style} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FastImage;
