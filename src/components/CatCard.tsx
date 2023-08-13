import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../Main';
import { getImage } from '../api';
import { Card } from '../interfaces';
import { colors, spacing } from '../themes';
import Loading from './Loading';

const CatCard = ({ id, name, imageId }: Card) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  useEffect(() => {
    async function fetchImage(imageId: string) {
      const image = await getImage(imageId);
      setImageUrl(image.url);
    }
    fetchImage(imageId);
  }, [imageId, setImageUrl]);

  function handlePress() {
    navigation.navigate('CatDetails', { id: id, name: name });
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {imageUrl.length !== 0 && (
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              onLoadEnd={() => setLoading(false)}
            />
          )}
          {loading && (
            <View style={styles.loading}>
              <Loading />
            </View>
          )}
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
  loading: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    zIndex: 1,
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
