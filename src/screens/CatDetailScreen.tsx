import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StackParamList } from '../Main';
import CatDescription from '../components/CatDescription';
import FastImage from '../components/FastImage';
import { Cat } from '../interfaces';
import { useCatStore } from '../store';
import { colors, spacing } from '../themes';

type Props = NativeStackScreenProps<StackParamList, 'CatDetails'>;

const CatDetailsScreen = ({ route }: Props) => {
  const { id, imageId } = route.params;

  const [catData, setCatData] = useState<Cat>();

  useEffect(() => {
    const cat = useCatStore.getState().cats.find((x) => x.id === id);
    setCatData(cat);
  }, [setCatData]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage imageId={imageId} style={styles.image} />
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
