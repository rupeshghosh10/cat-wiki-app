import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../Main';
import { Card } from '../interfaces';
import { colors, spacing } from '../themes';
import FastImage from './FastImage';

const CatCard = ({ id, name, imageId }: Card) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  function handlePress() {
    navigation.navigate('CatDetails', { id: id, imageId: imageId, name: name });
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <FastImage imageId={imageId} style={styles.image} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
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
    width: 180,
    height: 180,
  },
  image: {
    borderRadius: 30,
    width: 180,
    height: 180,
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
