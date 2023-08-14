import { FlatList, StyleSheet } from 'react-native';
import { Cat } from '../interfaces';
import CatCard from './CatCard';

interface CatCardListProps {
  cats: Cat[];
}

const CatCardList = ({ cats }: CatCardListProps) => {
  return (
    <FlatList
      data={cats}
      renderItem={({ item }) => (
        <CatCard id={item.id} imageId={item.reference_image_id} name={item.name} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default CatCardList;
