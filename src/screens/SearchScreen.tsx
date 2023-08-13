import { SafeAreaView, StyleSheet, View } from 'react-native';
import Searchbar from '../components/Searchbar';
import { spacing } from '../themes';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar />
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
});

export default SearchScreen;
