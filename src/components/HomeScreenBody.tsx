import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BottomTabParamsList } from '../BottomTabRoutes';
import { Cat } from '../interfaces';
import { useCatStore } from '../stores';
import { colors, spacing } from '../themes';
import CatCard from './CatCard';

const homeScreenBreeds = ['pers', 'sava', 'sphy', 'acur'];

const HomeScreenBody = () => {
  const [cats, setCats] = useState<Cat[]>();

  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamsList>>();

  useEffect(() => {
    const fetchedCats = homeScreenBreeds.map((x) => getCat(x));
    setCats(fetchedCats);
  }, [setCats]);

  function getCat(id: string): Cat {
    return useCatStore.getState().cats.find((x) => x.id === id)!;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>66+ Breeds for you to discover</Text>
      <Pressable style={styles.seeMoreContainer} onPress={() => navigation.navigate('CatList')}>
        <Text style={styles.seeMore}>See More</Text>
        <Ionicons name="arrow-forward-sharp" size={18} color="black" />
      </Pressable>
      <ScrollView>
        <View style={styles.listContainer}>
          {cats &&
            cats.map((cat) => (
              <CatCard key={cat.id} id={cat.id} imageId={cat.reference_image_id} name={cat.name} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: spacing.xxs,
  },
  title: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 22,
    flexWrap: 'wrap',
  },
  seeMore: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default HomeScreenBody;
