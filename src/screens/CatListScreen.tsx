import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AndroidKeyboardAvoidingView from '../components/AndroidKeyboardAvoidingView';
import CatCard from '../components/CatCard';
import Searchbar from '../components/Searchbar';
import { Cat } from '../interfaces';
import { useCatStore, useSearchStore } from '../stores';
import { colors, spacing } from '../themes';

const CatListScreen = () => {
  const scrollRef = useRef<ScrollView>(null);

  const [cats, setCats] = useState<Cat[]>();
  const searchText = useSearchStore((state) => state.text);

  useEffect(() => {
    const storeCats = useCatStore.getState().cats;
    setCats(storeCats.filter((x) => x.name.toLowerCase().includes(searchText.toLowerCase())));
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [searchText, setCats]);

  return (
    <SafeAreaView style={styles.container}>
      <AndroidKeyboardAvoidingView>
        <View style={styles.searchContainer}>
          <Searchbar />
        </View>
        <View style={styles.catsContainer}>
          <ScrollView style={styles.container} ref={scrollRef}>
            {searchText.length === 0 ? (
              <Text style={styles.title}>66+ Breeds for you to discover</Text>
            ) : (
              <Text style={styles.title}>Search Result</Text>
            )}
            <View style={styles.listContainer}>
              {cats &&
                cats.map((cat) => (
                  <CatCard
                    key={cat.id}
                    id={cat.id}
                    imageId={cat.reference_image_id}
                    name={cat.name}
                  />
                ))}
            </View>
          </ScrollView>
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
  },
  listContainer: {
    flex: 1,
    marginBottom: spacing.xxs,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
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
