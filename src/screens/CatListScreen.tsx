import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatCardList from '../components/CatCardList';
import { Cat } from '../interfaces';
import useCatStore from '../store';
import { colors, spacing } from '../themes';

const CatListScreen = () => {
  const [cats, setCats] = useState<Cat[]>();

  useEffect(() => {
    const cats = useCatStore.getState().cats;
    setCats(cats);
  }, [setCats]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
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
  innerContainer: {
    marginHorizontal: spacing.sm,
    marginVertical: spacing.xxxs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: colors.accent,
    borderRadius: 40,
    overflow: 'hidden',
    flex: 1,
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
    marginBottom: spacing.sm,
    alignSelf: 'center',
  },
});

export default CatListScreen;
