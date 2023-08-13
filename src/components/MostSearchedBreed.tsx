import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from '../interfaces';
import useCatStore from '../store';
import { colors, spacing } from '../themes';
import CatCard from './CatCard';

const mostSearchedBreeds = ['pers', 'sava', 'sphy', 'ragd'];

const MostSearchedBreed = () => {
  const [cards, setCards] = useState<Card[]>();

  function makeCard(id: string): Card {
    const cat = useCatStore.getState().cats.find((x) => x.id === id)!;
    return {
      id: cat.id,
      imageId: cat.reference_image_id,
      name: cat.name,
    };
  }

  useEffect(() => {
    const generatedCards = mostSearchedBreeds.map((x) => makeCard(x));
    setCards(generatedCards);
  }, [setCards]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Searched Breeds</Text>
      {cards && cards.length !== 0 && (
        <View>
          <FlatList
            data={cards}
            renderItem={({ item }) => <CatCard {...item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      )}
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
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default MostSearchedBreed;
