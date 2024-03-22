import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CharacterDetailsProps, CharacterItem} from './types';
import {getCharacterDetails} from './actions';
import InfoCard from '../../components/molecules/InfoCard';
import Image from '../../components/atoms/Image';

const CharacterDetails: React.FC<CharacterDetailsProps> = ({characterId}) => {
  const [character, setCharacter] = useState<CharacterItem>({
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  });

  useEffect(() => {
    getCharacterDetails(characterId, setCharacter);
  }, [characterId]);

  return (
    <View style={styles.container}>
      <Image source={{uri: character.image}} style={styles.image} />
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  infoContainer: {
    gap: 16,
    width: '100%',
  },
});
