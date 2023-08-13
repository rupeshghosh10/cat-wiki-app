import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card } from '../interfaces';
import { colors, spacing } from '../themes';
import CatCard from './CatCard';

const data: Card[] = [
  {
    id: 'pers',
    name: 'Persian',
    imageId: '-Zfz5z2jK',
  },
  {
    id: 'sava',
    name: 'Savannah',
    imageId: 'a8nIYvs6S',
  },
  {
    id: 'sphy',
    name: 'Sphynx',
    imageId: 'KBroiVNCM',
  },
  {
    id: 'ragd',
    name: 'Ragdoll',
    imageId: 'Rhj-JsTLP',
  },
];

const MostSearchedBreed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Searched Breeds</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <CatCard {...item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
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
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default MostSearchedBreed;
