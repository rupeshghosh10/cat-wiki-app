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
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadImage() {
      const imageInCache = await findImageInCache(imageId);
      if (imageInCache.exists) {
        setImageSource(imageInCache.uri!);
        return;
      }
      const fetchedImage = await getImage(imageId);
      if (fetchedImage.error) {
        setError(true);
        return;
      }
      const cachedImage = await cacheImage(fetchedImage.image!.url!, imageId);
      if (cachedImage.cached) {
        setImageSource(cachedImage.path!);
        return;
      }
      setError(true);
    }
    loadImage();
  }, []);

  if (error) {
    return <Image source={require('../../assets/images/Error.png')} style={style} />;
  }

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
