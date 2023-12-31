import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';
import { useSearchStore } from '../stores';
import { colors, spacing } from '../themes';

interface SearchBarProps {
  onSubmit?: () => void;
}

const SearchBar = ({ onSubmit = () => {} }: SearchBarProps) => {
  const { text, update, clear } = useSearchStore();

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color={colors.primary} style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.searchBar}
        value={text}
        autoFocus={false}
        onChangeText={(text) => update(text.trim())}
        onSubmitEditing={onSubmit}
      />
      {text && text.length !== 0 && (
        <FontAwesome
          name="close"
          size={24}
          color={colors.primary}
          style={styles.cancelIcon}
          onPress={() => clear()}
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

export default SearchBar;
