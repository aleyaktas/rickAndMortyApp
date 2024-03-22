import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {EpisodeDetailsProps, CharacterItem} from './types';
import {Episode} from '../../services/api/types';
import {getEpisodesDetails, getCharacterDetails} from './actions';
import colors from '../../themes/colors';
import InfoCard from '../../components/molecules/InfoCard';

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({episodeId}) => {
  const [episode, setEpisode] = useState<Episode>({
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
    created: '',
  });
  const [characterData, setCharacterData] = useState<
    {imageUrl: string; name: string}[]
  >([]);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      await getEpisodesDetails(episodeId, setEpisode);
    };
    fetchEpisodeDetails();
  }, [episodeId]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const promises = episode.characters.map(async characterUrl => {
        const characterId = characterUrl.split('/').pop();
        if (characterId) {
          const character = await getCharacterDetails(Number(characterId));
          return {
            imageUrl: character?.image || '',
            name: character?.name || '',
          };
        }
        return {imageUrl: '', name: ''};
      });
      const characterDataList = await Promise.all(promises);
      setCharacterData(characterDataList);
    };

    if (episode?.characters?.length > 0) {
      fetchCharacterData();
    }
  }, [episode]);

  const renderCharacterItem = ({item}: CharacterItem) => (
    <View style={styles.characterContainer}>
      <Image source={{uri: item.imageUrl}} style={styles.characterImage} />
      <Text style={styles.characterName}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoCardContainer}>
        <InfoCard label="Name" text={episode.name} />
        <InfoCard label="Air Date" text={episode.air_date} />
        <InfoCard label="Episode" text={episode.episode} />
      </View>
      <Text style={styles.characterTitle}>Characters</Text>
      <FlatList
        data={characterData}
        renderItem={renderCharacterItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  characterContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.quickSilver,
    overflow: 'hidden',
    margin: 4,
  },
  characterImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  characterName: {
    marginTop: 'auto',
    fontSize: 14,
    textAlign: 'center',
    padding: 8,
  },
  characterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.slimyGreen,
    marginBottom: 12,
  },
  infoCardContainer: {gap: 16, marginVertical: 16},
});

export default EpisodeDetails;
