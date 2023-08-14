import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../Main';
import { colors, spacing } from '../themes';
import FastImage from './FastImage';

interface CatCardProps {
  id: string;
  name: string;
  imageId: string;
}

const imageDimension = Dimensions.get('window').width * 0.43;

const CatCard = ({ id, name, imageId }: CatCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handlePress() {
    navigation.navigate('CatDetails', { id: id, imageId: imageId, name: name });
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage imageId={imageId} style={styles.image} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
  },
  imageContainer: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: colors.accent,
    borderRadius: 30,
    width: imageDimension,
    height: imageDimension,
  },
  image: {
    borderRadius: 30,
    width: imageDimension,
    height: imageDimension,
    resizeMode: 'cover',
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
