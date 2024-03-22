import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CharacterDetailsProps} from './types';
import {getCharacterDetails} from './actions';
import InfoCard from '../../components/molecules/InfoCard';
import Image from '../../components/atoms/Image';
import colors from '../../themes/colors';
import Button from '../../components/atoms/Button';
import {useAppDispatch, useAppSelector} from '../../store';
import {ICharacter} from '../../store/features/user/types';
import {handleFavorite} from '../../store/features/user/userSlice';
import {StateProps} from '../../navigation/bottomTabNavigator';

const CharacterDetails: React.FC<CharacterDetailsProps> = ({characterId}) => {
  const [character, setCharacter] = useState<ICharacter>({
    id: 0,
    name: '',
    status: '',
    species: '',
    created: '',
    episode: [],
    gender: '',
    image: '',
    location: {name: '', url: ''},
    origin: {name: '', url: ''},
    type: '',
    url: '',
  });

  useEffect(() => {
    getCharacterDetails(characterId, setCharacter);
  }, [characterId]);

  const dispatch = useAppDispatch();
  const {favorites} = useAppSelector((state: StateProps) => state.user);

  const isFavorite = favorites.some(favorite => favorite.id === character.id);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: character.image}} style={styles.image} />
        <Button
          style={styles.favorite}
          iconName={isFavorite ? 'Favorites' : 'FavoritesOutline'}
          borderRadius={8}
          border
          borderColor={colors.border}
          iconWidth={28}
          iconHeight={28}
          color={colors.transparent}
          iconColor={colors.primary}
          onPress={() => dispatch(handleFavorite(character))}
        />
      </View>
      <View style={styles.infoContainer}>
        <InfoCard label="Name" text={character.name} />
        <InfoCard label="Status" text={character.status} />
        <InfoCard label="Species" text={character.species} />
        <InfoCard label="Gender" text={character.gender} />
      </View>
    </View>
  );
};

export default CharacterDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  favorite: {
    position: 'absolute',
    right: 0,
    top: 16,
  },
  infoContainer: {
    gap: 16,
    width: '100%',
  },
});
