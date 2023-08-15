import { useEffect, useState } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { getImage } from '../api';
import { cacheImage, findImageInCache } from '../services';
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
      const imageInCache = await findImageInCache(imageId);
      if (imageInCache.exists) {
        setImageSource(imageInCache.uri!);
      } else {
        const fetchedImage = await fetchImageUrl(imageId);
        if (!fetchedImage.fetched) {
          return;
        }
        const cached = await cacheImage(fetchedImage.imageUrl!, imageId);
        if (cached.cached) {
          setImageSource(cached.path!);
        }
      }
    }
    loadImage();
  }, []);

  return (
    <>
      {imageSource && imageSource.length !== 0 ? (
        <Image source={{ uri: imageSource }} style={style} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FastImage;
