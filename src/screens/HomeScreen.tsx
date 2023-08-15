import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabParamsList } from '../BottomTabRoutes';
import AndroidKeyboardAvoidingView from '../components/AndroidKeyboardAvoidingView';
import CatWikiHeader from '../components/CatWikiHeader';
import HomeScreenBody from '../components/HomeScreenBody';
import Searchbar from '../components/Searchbar';
import { useSearchStore } from '../stores';
import { spacing } from '../themes';

const HomeScreen = () => {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamsList>>();

  function handleSubmit() {
    if (useSearchStore.getState().text !== '') {
      navigation.navigate('CatList');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <AndroidKeyboardAvoidingView>
        <View style={styles.searchContainer}>
          <Searchbar onSubmit={handleSubmit} />
        </View>
        <View style={styles.bodyContainer}>
          <CatWikiHeader />
          <HomeScreenBody />
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
