import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StackParamList } from '../Main';
import { Cat } from '../interfaces';
import { colors, spacing } from '../themes';
import FastImage from './FastImage';

interface MostSearchedCardProps {
  cat: Cat;
  index: number;
}

const MostSearchedCard = ({ index, cat }: MostSearchedCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {index + 1}. {cat.name}
      </Text>
      <Text style={styles.content}>{cat.description}</Text>
      <View style={styles.imageContainer}>
        <FastImage imageId={cat.reference_image_id} style={styles.image} />
      </View>
      <Pressable
        style={styles.readMoreContainer}
        onPress={() =>
          navigation.navigate('CatDetails', {
            id: cat.id,
            imageId: cat.reference_image_id,
            name: cat.name,
          })
        }
      >
        <Text style={styles.readMore}>Read More</Text>
        <Ionicons name="arrow-forward-sharp" size={18} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  image: {
    width: '100%',
    height: 350,
  },
  imageContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: spacing.xxs,
  },
  title: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 24,
  },
  content: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
    marginTop: spacing.xxxs,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: spacing.xxs,
    marginTop: spacing.xxs,
  },
  readMore: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MostSearchedCard;
