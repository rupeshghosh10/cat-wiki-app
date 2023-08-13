import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, View } from 'react-native';
import { StackParamList } from '../Main';
import { getCat, getImage } from '../api';
import CatDescription from '../components/CatDescription';
import { Cat, CatImage } from '../interfaces';
import { colors, spacing } from '../themes';

type Props = NativeStackScreenProps<StackParamList, 'CatDetails'>;

const CatDetailsScreen = ({ route }: Props) => {
  const { id } = route.params;

  const [imageUrl, setImageUrl] = useState<CatImage>();
  const [catData, setCatData] = useState<Cat>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCatData(id: string) {
      const cat = await getCat(id);
      setCatData(cat);
    }
    if (id !== '') {
      fetchCatData(id);
    }
  }, [setCatData]);

  useEffect(() => {
    async function fetchImage(id: string) {
      const image = await getImage(id);
      setImageUrl(image);
    }
    if (catData) {
      fetchImage(catData.reference_image_id);
      setLoading(false);
    }
  }, [setImageUrl, catData, setLoading]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default CatDetailsScreen;
