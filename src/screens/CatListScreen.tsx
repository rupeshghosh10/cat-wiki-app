import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCats } from '../api';
import { Cat } from '../interfaces';
import { colors, spacing } from '../themes';
import CatCard from '../components/CatCard';

const CatListScreen = () => {
  const [cats, setCats] = useState<Cat[]>();

  useEffect(() => {
    async function fetchCats() {
      const cats = await getCats();
      setCats(cats);
    }
    fetchCats();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>66+ Breeds for you to discover</Text>
        {/* {cats && cats.length !== 0 && (
          <View>
            <FlatList
              data={cats}
              renderItem={({ item }) => (
                <CatCard id={item.id} imageId={item.reference_image_id} name={item.name} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        )} */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: spacing.sm,
    padding: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: 40,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: colors.primary,
  },
});

export default CatListScreen;
