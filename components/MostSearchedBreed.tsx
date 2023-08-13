import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../themes/color';
import CatCard from './CatCard';
import { spacing } from '../themes/spacing';

export interface Cat {
  type: string;
  url: string;
}

const data: Cat[] = [
  {
    type: 'Bengal',
    url: '../assets/images/HomeImage.png',
  },
  {
    type: 'Savannah',
    url: '../assets/images/HomeImage.png',
  },
  {
    type: 'Korat',
    url: '../assets/images/HomeImage.png',
  },
  {
    type: 'Selkirk Rex',
    url: '../assets/images/HomeImage.png',
  },
];

const MostSearchedBreed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Searched Breed</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <CatCard {...item} />}
          keyExtractor={(item) => item.type}
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
    height: 500,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  title: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: spacing.xs,
    marginLeft: spacing.xxs,
    textDecorationLine: 'underline',
    textDecorationColor: colors.primary,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default MostSearchedBreed;
