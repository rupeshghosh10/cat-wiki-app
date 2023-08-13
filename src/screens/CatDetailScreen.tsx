import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { StackParamList } from '../Main';
import { getImage } from '../api';
import CatDescription from '../components/CatDescription';
import Loading from '../components/Loading';
import { Cat, CatImage } from '../interfaces';
import useCatStore from '../store';
import { colors, spacing } from '../themes';

type Props = NativeStackScreenProps<StackParamList, 'CatDetails'>;

const CatDetailsScreen = ({ route }: Props) => {
  const { id } = route.params;

  const [image, setImage] = useState<CatImage>();
  const [catData, setCatData] = useState<Cat>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cat = useCatStore.getState().cats.find((x) => x.id === id);
    setCatData(cat);
  }, [setCatData]);

  useEffect(() => {
    async function fetchImage(id: string) {
      const image = await getImage(id);
      setImage(image);
    }
    if (catData) {
      fetchImage(catData.reference_image_id);
      setLoading(false);
    }
  }, [setImage, catData, setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {image && <Image source={{ uri: image.url }} style={styles.image} />}
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

export default CatDetailsScreen;
