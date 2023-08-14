import * as FileSystem from 'expo-file-system';

export async function findImageInCache(imageId: string) {
  try {
    const info = await FileSystem.getInfoAsync(imageId);
    return info;
  } catch (error) {
    return {
      exists: false,
    };
  }
}

export async function cacheImage(imageUrl: string, cacheUri: string) {
  try {
    const downloadImage = FileSystem.createDownloadResumable(imageUrl, cacheUri);
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
