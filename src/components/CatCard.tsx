import { Image, StyleSheet, Text, View } from 'react-native';
import { Card } from '../interfaces/Card';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';
import { useEffect, useState } from 'react';
import { getImageById } from '../api/imagesApi';

const CatCard = ({ name, imageId }: Card) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchImage(imageId: string) {
      const image = await getImageById(imageId);
      setImageUrl(image.url);
    }
    fetchImage(imageId);
  }, [imageId, setImageUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageUrl.length !== 0 && <Image source={{ uri: imageUrl }} style={styles.image} />}
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
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
