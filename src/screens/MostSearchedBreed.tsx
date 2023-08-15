import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MostSearchedCard from '../components/MostSearchedCard';
import { Cat } from '../interfaces';
import { useCatStore } from '../stores';
import { colors, spacing } from '../themes';

const mostSearchedBreeds = [
  'siam',
  'mcoo',
  'ragd',
  'sphy',
  'beng',
  'pers',
  'sfol',
  'abys',
  'rblu',
  'bslo',
];

const MostSearchedBreed = () => {
  const [cats, setCats] = useState<Cat[]>();

  const [fontsLoaded] = useFonts({
    Borel: require('../../assets/fonts/Borel.ttf'),
  });

  useEffect(() => {
    const fetchedCats = mostSearchedBreeds.map((x) => getCat(x));
    setCats(fetchedCats);
  }, [setCats]);

  function getCat(id: string): Cat {
    return useCatStore.getState().cats.find((x) => x.id === id)!;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={[styles.title, fontsLoaded ? styles.borelFont : null]}>
          Top 10 most searched breeds
        </Text>
        <View style={styles.listContainer}>
          {cats &&
            cats.map((cat, index) => <MostSearchedCard key={cat.id} cat={cat} index={index} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    textAlign: 'center',
  },
  borelFont: {
    fontFamily: 'Borel',
  },
  listContainer: {
    marginHorizontal: spacing.sm,
  },
});

export default MostSearchedBreed;
