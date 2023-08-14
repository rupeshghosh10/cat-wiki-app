import { useFonts } from 'expo-font';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../themes';

const CatWikiHeader = () => {
  const [fontsLoaded] = useFonts({
    Borel: require('../../assets/fonts/Borel.ttf'),
  });

  return (
    <ImageBackground source={require('../../assets/images/HomeImage.png')} style={styles.image}>
      <View style={styles.textContainer}>
        <Text style={[styles.textHeading, fontsLoaded ? styles.borelFont : null]}>Cat Wiki</Text>
        <View>
          <Text style={styles.textContent}>Get to know more about your cat breed</Text>
        </View>
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
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    marginLeft: spacing.md,
  },
  textHeading: {
    color: colors.lightGray,
    fontSize: 40,
  },
  borelFont: {
    fontFamily: 'Borel',
  },
  textContent: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Courier New' : 'monospace',
  },
});

export default CatWikiHeader;
