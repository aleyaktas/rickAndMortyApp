import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import CharacterCard from '../../components/molecules/CharacterCard';
import TextInput from '../../components/atoms/TextInput';
import colors from '../../themes/colors';
import Header from '../../components/atoms/Header';

const Favorites = () => {
  const {favorites} = useAppSelector((state: StateProps) => state.user);
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = () => {
    setFilteredFavorites(
      favorites.filter(
        character =>
          character.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          character.species.toLowerCase().includes(searchValue.toLowerCase()) ||
          character.status.toLowerCase().includes(searchValue.toLowerCase()) ||
          character.gender.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.cardList}
      data={searchValue ? filteredFavorites : favorites}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <CharacterCard characterData={item} />}
      ListHeaderComponent={
        <View>
          <TextInput
            placeholder="Search..."
            value={searchValue}
            onChange={setSearchValue}
            containerStyle={styles.search}
          />
        </View>
      }
      ListEmptyComponent={
        <View>
          <Header text="No favorites found!" size={20} center />
        </View>
      }
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
  search: {
    borderRadius: 12,
    borderColor: colors.border,
    shadowColor: colors.blackOlive,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
