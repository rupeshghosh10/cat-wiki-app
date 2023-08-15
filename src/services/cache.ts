import * as FileSystem from 'expo-file-system';

interface ImageSource {
  uri?: string;
  exists: boolean;
}

function getImageUri(imageId: string) {
  return `${FileSystem.cacheDirectory}${imageId}.jpg`;
}

export async function findImageInCache(imageId: string): Promise<ImageSource> {
  try {
    const fileUri = getImageUri(imageId);
    const info = await FileSystem.getInfoAsync(fileUri);
    return { uri: info.uri, exists: info.exists };
  } catch {
    return {
      exists: false,
    };
  }
}

export async function cacheImage(imageUrl: string, imageId: string) {
  try {
    const cacheUri = getImageUri(imageId);
    const downloadImage = FileSystem.createDownloadResumable(imageUrl, cacheUri);
    const downloaded = await downloadImage.downloadAsync();
    return {
      cached: true,
      path: downloaded!.uri,
    };
  } catch {
    return {
      cached: false,
    };
  }
}
