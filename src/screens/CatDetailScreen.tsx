import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StackParamList } from '../Main';
import { getImage } from '../api';
import CatDescription from '../components/CatDescription';
import FastImage from '../components/FastImage';
import { Cat } from '../interfaces';
import { useCatStore } from '../stores';
import { colors, spacing } from '../themes';

type Props = NativeStackScreenProps<StackParamList, 'CatDetails'>;

const CatDetailsScreen = ({ route }: Props) => {
  const { id, imageId } = route.params;

  const [catData, setCatData] = useState<Cat>();
  const [imageOrientation, setImageOrientation] = useState<'Portrait' | 'Landscape'>('Landscape');

  useEffect(() => {
    const cat = useCatStore.getState().cats.find((x) => x.id === id);
    setCatData(cat);
  }, [setCatData]);

  useEffect(() => {
    async function loadImage() {
      const catImage = await getImage(imageId);
      setImageOrientation(catImage.height + 50 > catImage.width ? 'Portrait' : 'Landscape');
    }
    loadImage();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={[
            styles.imageContainer,
            imageOrientation == 'Portrait' ? styles.portraitHeight : styles.landscapeHeight,
          ]}
        >
          <FastImage
            imageId={imageId}
            style={[
              styles.image,
              imageOrientation == 'Portrait' ? styles.portraitHeight : styles.landscapeHeight,
            ]}
          />
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
    width: '100%',
  },
  landscapeHeight: {
    height: 300,
  },
  portraitHeight: {
    height: 450,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
  },
  descriptionContainer: {
    margin: spacing.sm,
  },
});

export default CatDetailsScreen;
