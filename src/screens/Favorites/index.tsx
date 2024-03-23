import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import CharacterCard from '../../components/molecules/CharacterCard';

const Favorites = () => {
  const {favorites} = useAppSelector((state: StateProps) => state.user);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.cardList}
      data={favorites}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <CharacterCard characterData={item} />}
    />
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    padding: 20,
    gap: 20,
  },
});
