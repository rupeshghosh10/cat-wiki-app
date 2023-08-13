import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { getImageById } from '../api/imagesApi';
import CatDescription from '../components/CatDescription';
import { Cat } from '../interfaces/Cat';
import { CatImage } from '../interfaces/CatImage';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';

const data: Cat = {
  weight: [4, 6],
  id: 'pers',
  name: 'Persian',
  temperament: ['Affectionate', 'loyal', 'Sedate', 'Quiet'],
  origin: 'Iran (Persia)',
  description:
    'Persians are sweet, gentle cats that can be playful or quiet and laid-back. Great with families and children, they absolutely love to lounge around the house. While they don’t mind a full house or active kids, they’ll usually hide when they need some alone time.',
  life_span: [14, 15],
  indoor: 0,
  lap: 1,
  alt_names: ['Longhair', 'Persian Longhair', 'Shiraz', 'Shirazi'],
  adaptability: 5,
  affection_level: 5,
  child_friendly: 2,
  dog_friendly: 2,
  energy_level: 1,
  grooming: 5,
  health_issues: 3,
  intelligence: 3,
  shedding_level: 4,
  social_needs: 4,
  stranger_friendly: 2,
  vocalisation: 1,
  experimental: 0,
  hairless: 0,
  natural: 1,
  rare: 0,
  rex: 0,
  suppressed_tail: 0,
  short_legs: 0,
  wikipedia_url: 'https://en.wikipedia.org/wiki/Persian_(cat)',
  hypoallergenic: 0,
  reference_image_id: '-Zfz5z2jK',
};

const CatDetailsSCreen = () => {
  const [imageUrl, setImageUrl] = useState<CatImage>();

  useEffect(() => {
    async function fetchImage(imageId: string) {
      const image = await getImageById(imageId);
      setImageUrl(image);
    }
    fetchImage(data.reference_image_id);
  }, [setImageUrl]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {imageUrl && <Image source={{ uri: imageUrl.url }} style={styles.image} />}
        </View>
        <View style={styles.descriptionContainer}>
          <CatDescription {...data} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    margin: spacing.sm,
    backgroundColor: colors.accent,
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    resizeMode: 'cover',
    height: 300,
    width: '100%',
  },
  descriptionContainer: {
    margin: spacing.sm,
  },
});

export default CatDetailsSCreen;
