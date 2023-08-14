import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabParamsList } from '../BottomTabRoutes';
import { getCats } from '../api';
import AndroidKeyboardAvoidingView from '../components/AndroidKeyboardAvoidingView';
import CatWikiHeader from '../components/CatWikiHeader';
import Loading from '../components/Loading';
import MostSearchedBreed from '../components/MostSearchedBreed';
import Searchbar from '../components/Searchbar';
import { useCatStore, useSearchStore } from '../stores';
import { spacing } from '../themes';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

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

  function handleSubmit() {
    if (useSearchStore.getState().text !== '') {
      navigation.navigate('CatList');
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <AndroidKeyboardAvoidingView>
        <View style={styles.searchContainer}>
          <Searchbar onSubmit={handleSubmit} />
        </View>
        <View style={styles.bodyContainer}>
          <CatWikiHeader />
          <MostSearchedBreed />
        </View>
      </AndroidKeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: spacing.sm,
    marginVertical: spacing.xxxs,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 14,
    margin: spacing.xs,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'pink',
  },
});

export default HomeScreen;
