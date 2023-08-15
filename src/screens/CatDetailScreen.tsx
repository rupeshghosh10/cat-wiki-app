import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StackParamList } from '../Main';
import CatDescription from '../components/CatDescription';
import FastImage from '../components/FastImage';
import { useImageStyle } from '../hooks';
import { Cat } from '../interfaces';
import { useCatStore } from '../stores';
import { colors, spacing } from '../themes';

type Props = NativeStackScreenProps<StackParamList, 'CatDetails'>;

const CatDetailsScreen = ({ route }: Props) => {
  const { id, imageId } = route.params;

  const [catData, setCatData] = useState<Cat>();

  useEffect(() => {
    const cat = useCatStore.getState().cats.find((x) => x.id === id);
    setCatData(cat);
  }, [setCatData]);

  const imageStyles = useImageStyle(imageId);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <FastImage imageId={imageId} style={imageStyles.image} />
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
  descriptionContainer: {
    margin: spacing.sm,
  },
});

export default CatDetailsScreen;
