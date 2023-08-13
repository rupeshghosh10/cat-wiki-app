import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatWikiHeader from '../components/CatWikiHeader';
import Searchbar from '../components/Searchbar';
import MostSearchedBreed from '../components/MostSearchedBreed';
import { spacing } from '../themes/spacing';

const Home = () => {
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
    margin: spacing.sm,
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default Home;
