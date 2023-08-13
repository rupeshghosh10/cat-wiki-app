import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';

interface CatDescriptionStatProps {
  title: string;
  value: number;
}

const FullBar = () => <View style={[styles.bar, styles.full]}></View>;

const EmptyBar = () => <View style={[styles.bar, styles.empty]}></View>;

const CatDescriptionStat = ({ title, value }: CatDescriptionStatProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.barContainer}>
        {[...Array(value)].map((_, i) => (
          <FullBar key={i} />
        ))}
        {[...Array(5 - value)].map((_, i) => (
          <EmptyBar key={i} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  title: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.xxs,
  },
  bar: {
    width: 56,
    height: 14,
    borderRadius: 10,
  },
  full: {
    backgroundColor: colors.secondary,
  },
  empty: {
    backgroundColor: colors.gray,
  },
});

export default CatDescriptionStat;
