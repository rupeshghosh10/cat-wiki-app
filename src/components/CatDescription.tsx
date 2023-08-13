import { StyleSheet, Text, View } from 'react-native';
import { Cat } from '../interfaces/Cat';
import { colors } from '../themes/color';
import { spacing } from '../themes/spacing';
import CatDescriptionItem from './CatDescriptionItem';
import CatDescriptionStat from './CatDescriptionStat';

const CatDescription = (cat: Cat) => {
  return (
    <View>
      <Text style={styles.name}>{cat.name}</Text>
      <Text style={styles.description}>{cat.description}</Text>
      {cat.alt_names.length !== 0 && (
        <CatDescriptionItem title="Alternate Names" description={cat.alt_names} />
      )}
      <CatDescriptionItem title="Temperament" description={cat.temperament} />
      <CatDescriptionItem title="Origin" description={cat.origin} />
      <CatDescriptionItem title="Life Span" description={`${cat.life_span} years`} />
      <CatDescriptionItem title="Weight" description={`${cat.weight} Kg`} />
      <CatDescriptionStat title="Adaptability" value={cat.adaptability} />
      <CatDescriptionStat title="Affection Level " value={cat.affection_level} />
      <CatDescriptionStat title="Child Friendly" value={cat.child_friendly} />
      <CatDescriptionStat title="Energy Level" value={cat.energy_level} />
      <CatDescriptionStat title="Grooming" value={cat.grooming} />
      <CatDescriptionStat title="Health Issue" value={cat.health_issues} />
      <CatDescriptionStat title="Intelligence" value={cat.intelligence} />
      <CatDescriptionStat title="Shedding Level" value={cat.shedding_level} />
      <CatDescriptionStat title="Social Needs" value={cat.social_needs} />
      <CatDescriptionStat title="Stranger Friendly" value={cat.stranger_friendly} />
      <View style={styles.bottomMargin}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.secondary,
  },
  description: {
    marginTop: spacing.xs,
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  bottomMargin: {
    marginBottom: spacing.md,
  },
});

export default CatDescription;
