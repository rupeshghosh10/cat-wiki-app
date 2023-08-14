import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cat } from '../interfaces';
import { useCatStore } from '../stores';
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
      <View style={styles.listContainer}>
        {cats && cats.length !== 0 && <CatCardList cats={cats} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: colors.accent,
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
  listContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default MostSearchedBreed;
