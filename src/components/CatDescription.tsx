import { StyleSheet, Text } from 'react-native';
import { Cat } from '../interfaces/Cat';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';

const CatDescription = (cat: Cat) => {
  return (
    <>
      <Text style={styles.name}>{cat.name}</Text>
      <Text style={styles.description}>{cat.description}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.primary,
  },
  description: {
    marginTop: spacing.xs,
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
});

export default CatDescription;
