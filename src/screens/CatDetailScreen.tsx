import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { getCat } from '../api/catApi';
import { getImage } from '../api/imagesApi';
import CatDescription from '../components/CatDescription';
import { Cat } from '../interfaces/Cat';
import { CatImage } from '../interfaces/CatImage';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';

const CatDetailsSCreen = () => {
  const [imageUrl, setImageUrl] = useState<CatImage>();
  const [catData, setCatData] = useState<Cat>();

  useEffect(() => {
    async function fetchCatData(id: string) {
      const cat = await getCat(id);
      setCatData(cat);
    }
    fetchCatData('pers');
  }, [setCatData]);

  useEffect(() => {
    async function fetchImage(id: string) {
      const image = await getImage(id);
      setImageUrl(image);
    }
    if (catData) {
      fetchImage(catData.reference_image_id);
    }
  }, [setImageUrl, catData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {imageUrl && <Image source={{ uri: imageUrl.url }} style={styles.image} />}
        </View>
        <View style={styles.descriptionContainer}>
          {catData && <CatDescription {...catData} />}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    margin: spacing.sm,
    backgroundColor: colors.accent,
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
    height: 300,
    width: '100%',
  },
  descriptionContainer: {
    margin: spacing.sm,
  },
});

export default CatDetailsSCreen;
