import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatCardList from '../components/CatCardList';
import Searchbar from '../components/Searchbar';
import { Cat } from '../interfaces';
import { useCatStore } from '../store';
import { colors, spacing } from '../themes';

const CatListScreen = () => {
  const [cats, setCats] = useState<Cat[]>();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const storeCats = useCatStore.getState().cats;
    setCats(storeCats.filter((x) => x.name.toLowerCase().includes(searchText.toLowerCase())));
  }, [searchText, setCats]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar value={searchText} onChangeText={(text) => setSearchText(text)} />
      </View>
      <View style={styles.catsContainer}>
        <Text style={styles.title}>66+ Breeds for you to discover</Text>
        <View style={styles.listContainer}>
          {cats && cats.length !== 0 && <CatCardList cats={cats} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    margin: spacing.sm,
  },
  catsContainer: {
    marginHorizontal: spacing.sm,
    marginVertical: spacing.xxxs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.accent,
    borderRadius: 40,
    overflow: 'hidden',
    height: 720,
  },
  listContainer: {
    flex: 1,
    marginVertical: spacing.xxs,
    borderRadius: 40,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: colors.primary,
    marginBottom: spacing.xxxs,
    alignSelf: 'center',
  },
});

export default CatListScreen;
