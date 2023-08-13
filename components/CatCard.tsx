import { Image, StyleSheet, Text, View } from 'react-native';
import { Cat } from './MostSearchedBreed';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';

const CatCard = ({ type }: Cat) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/HomeImage.png')} style={styles.image} />
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
  },
  image: {
    borderRadius: 20,
    width: 180,
    height: 180,
  },
  text: {
    marginLeft: spacing.xs,
    marginTop: spacing.xxxs,
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CatCard;
