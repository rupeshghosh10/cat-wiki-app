import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

interface FastImageProps {
  uri: string;
  key: string;
  style: StyleProp<ImageStyle>;
}

const FastImage = ({ uri, key, style }: FastImageProps) => {
  const [imageSource, setImageSource] = useState('');

  function getImageExtension(uri: string) {
    const basename = uri.split(/[\\/]/).pop()!;
    return /[.]/.exec(basename) ? /[^.]+$/.exec(basename) : undefined;
  }

  async function findImageInCache(uri: string) {
    try {
      const info = await FileSystem.getInfoAsync(uri);
      return info;
    } catch (error) {
      return {
        exists: false,
      };
    }
  }

  async function cacheImage(uri: string, cacheUri: string) {
    try {
      const downloadImage = FileSystem.createDownloadResumable(uri, cacheUri, {});
      const downloaded = await downloadImage.downloadAsync();
      return {
        cached: true,
        path: downloaded!.uri,
      };
    } catch (error) {
      return {
        cached: false,
      };
    }
  }

  useEffect(() => {
    async function loadImage() {
      const imageExtension = getImageExtension(uri);
      if (!imageExtension || !imageExtension.length) {
        return;
      }
      const cacheFileUri = `${FileSystem.cacheDirectory}${key}.${imageExtension[0]}`;
      const imageInCache = await findImageInCache(cacheFileUri);
      if (imageInCache.exists) {
        setImageSource(cacheFileUri);
      } else {
        const cached = await cacheImage(uri, cacheFileUri);
        if (cached.cached) {
          setImageSource(cached.path!);
        }
      }
    }
    loadImage();
  }, []);

  return <Image source={{ uri: imageSource }} style={style} />;
};

export default FastImage;
