import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../themes';

const CatWikiHeader = () => {
  return (
    <ImageBackground source={require('../../assets/images/HomeImage.png')} style={styles.image}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Cat Wiki</Text>
        <Text style={styles.textContent}>Get to know more about your cat breed</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 2,
    resizeMode: 'contain',
    backgroundColor: 'yellow',
  },
  textContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-evenly',
    marginLeft: spacing.md,
  },
  textHeading: {
    color: colors.lightGray,
    fontWeight: '900',
    fontSize: 40,
    fontFamily: 'Cochin',
  },
  textContent: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: 18,
  },
});

export default CatWikiHeader;
