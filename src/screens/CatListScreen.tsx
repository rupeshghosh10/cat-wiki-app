import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatCard from '../components/CatCard';
import { Cat } from '../interfaces';
import useCatStore from '../store';
import { colors, spacing } from '../themes';

const CatListScreen = () => {
  const [cats, setCats] = useState<Cat[]>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cats = useCatStore.getState().cats.slice(index * 6, (index + 1) * 6);
    setCats(cats);
  }, [index, setCats]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>66+ Breeds for you to discover</Text>
        {cats && cats.length !== 0 && (
          <View>
            <FlatList
              data={cats}
              renderItem={({ item }) => (
                <CatCard id={item.id} imageId={item.reference_image_id} name={item.name} />
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={styles.row}
            />
          </View>
        )}
        <View style={styles.navigationContainer}>
          {index === 0 && <Ionicons name="chevron-back-outline" size={46} color={colors.gray} />}
          {index > 0 && (
            <Ionicons
              name="chevron-back-outline"
              size={46}
              color={colors.secondary}
              onPress={() => {
                setIndex(index - 1);
              }}
            />
          )}
          {index === 11 && <Ionicons name="chevron-forward-sharp" size={46} color={colors.gray} />}
          {index < 11 && (
            <Ionicons
              name="chevron-forward-sharp"
              size={46}
              color={colors.primary}
              onPress={() => setIndex(index + 1)}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.sm,
    marginVertical: spacing.xxs,
    padding: spacing.sm,
    backgroundColor: colors.accent,
    borderRadius: 40,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: colors.primary,
    marginBottom: spacing.sm,
    alignSelf: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  navigationContainer: {
    marginTop: spacing.xs,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default CatListScreen;
