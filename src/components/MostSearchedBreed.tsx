import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Cat } from '../interfaces';
import useCatStore from '../store';
import { colors, spacing } from '../themes';
import CatCardList from './CatCardList';

const mostSearchedBreeds = ['pers', 'sava', 'sphy', 'ragd'];

const MostSearchedBreed = () => {
  const [cats, setCats] = useState<Cat[]>();

  function getCat(id: string): Cat {
    return useCatStore.getState().cats.find((x) => x.id === id)!;
  }

  useEffect(() => {
    const fetchedCats = mostSearchedBreeds.map((x) => getCat(x));
    setCats(fetchedCats);
  }, [setCats]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Searched Breeds</Text>
      <ScrollView>{cats && cats.length !== 0 && <CatCardList cats={cats} />}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    height: 510,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  title: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 20,
    marginBottom: spacing.xs,
    marginLeft: spacing.xxs,
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline',
  },
});

export default MostSearchedBreed;
