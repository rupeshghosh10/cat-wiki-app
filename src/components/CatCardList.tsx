import { StyleSheet, View } from 'react-native';
import { Cat } from '../interfaces';
import CatCard from './CatCard';

interface CatCardListProps {
  cats: Cat[];
}

const CatCardList = ({ cats }: CatCardListProps) => {
  return (
    <View style={styles.container}>
      {cats.map((cat) => (
        <CatCard id={cat.id} imageId={cat.reference_image_id} name={cat.name} key={cat.id} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default CatCardList;
