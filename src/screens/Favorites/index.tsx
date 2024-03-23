import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import CharacterCard from '../../components/molecules/CharacterCard';

const Favorites = () => {
  const {favorites} = useAppSelector((state: StateProps) => state.user);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.cardList}
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CharacterCard characterData={item} />}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardList: {
    padding: 16,
    gap: 16,
  },
});
