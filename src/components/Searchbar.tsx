import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, spacing } from '../themes';
import { useNavigation } from '@react-navigation/native';
import { BottomTabParamsList } from '../BottomTabRoutes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const searchBar = () => {
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamsList>>();

  function handleFocus() {
    if (searchText !== '') {
      navigation.navigate('Search');
    }
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color={colors.primary} style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        value={searchText}
        autoFocus={false}
        onChangeText={(text) => setSearchText(text)}
        onFocus={handleFocus}
      />
      {searchText.length !== 0 && (
        <FontAwesome
          name="close"
          size={24}
          color={colors.primary}
          style={styles.cancelIcon}
          onPress={() => setSearchText('')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 20,
  },
  searchIcon: {
    marginLeft: spacing.sm,
  },
  cancelIcon: {
    marginRight: spacing.sm,
  },
  searchBar: {
    padding: spacing.sm,
    flex: 1,
    fontWeight: '600',
  },
});

export default searchBar;
