import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';

interface CatDescriptionItemProps {
  title: string;
  description: string;
}

const CatDescriptionItem = ({ title, description }: CatDescriptionItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: spacing.sm,
    flexWrap: 'wrap',
  },
  title: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    marginLeft: spacing.xxs,
  },
});

export default CatDescriptionItem;
