import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabParamsList } from '../BottomTabRoutes';
import { getCats } from '../api';
import CatWikiHeader from '../components/CatWikiHeader';
import Loading from '../components/Loading';
import MostSearchedBreed from '../components/MostSearchedBreed';
import Searchbar from '../components/Searchbar';
import { useCatStore, useSearchStore } from '../store';
import { spacing } from '../themes';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const searchText = useSearchStore((state) => state.text);
  const populateCats = useCatStore((state) => state.populateCats);

  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamsList>>();

  useEffect(() => {
    async function fetchCats() {
      const cats = await getCats();
      populateCats(cats);
      setLoading(false);
    }
    if (loading) {
      fetchCats();
    }
  }, [setLoading, loading]);

  useEffect(() => {
    if (searchText !== '') {
      navigation.navigate('CatList');
    }
  }, [searchText]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
      <View style={styles.bodyContainer}>
        <CatWikiHeader />
        <MostSearchedBreed />
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
  bodyContainer: {
    marginHorizontal: spacing.sm,
    marginVertical: spacing.xs,
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default HomeScreen;
