import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatCardList from '../components/CatCardList';
import Searchbar from '../components/Searchbar';
import { Cat } from '../interfaces';
import { useCatStore, useSearchStore } from '../stores';
import { colors, spacing } from '../themes';
import AndroidKeyboardAvoidingView from '../components/AndroidKeyboardAvoidingView';

const CatListScreen = () => {
  const [cats, setCats] = useState<Cat[]>();
  const searchText = useSearchStore((state) => state.text);

  useEffect(() => {
    const storeCats = useCatStore.getState().cats;
    setCats(storeCats.filter((x) => x.name.toLowerCase().includes(searchText.toLowerCase())));
  }, [searchText, setCats]);

  return (
    <SafeAreaView style={styles.container}>
      <AndroidKeyboardAvoidingView>
        <View style={styles.searchContainer}>
          <Searchbar />
        </View>
        <View style={styles.catsContainer}>
          <Text style={styles.title}>66+ Breeds for you to discover</Text>
          <View style={styles.listContainer}>
            {cats && cats.length !== 0 && <CatCardList cats={cats} />}
          </View>
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
  catsContainer: {
    flex: 14,
    margin: spacing.xs,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: 30,
    overflow: 'hidden',
    height: 720,
  },
  listContainer: {
    flex: 1,
    marginBottom: spacing.xxs,
    borderRadius: 30,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.primary,
    marginTop: spacing.xxs,
    marginBottom: spacing.xxxs,
    alignSelf: 'center',
  },
});

export default CatListScreen;
