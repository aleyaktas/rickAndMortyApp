import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {EpisodeDetailsProps, CharacterItem} from './types';
import {Episode} from '../../services/api/types';
import {getEpisodesDetails, getMultipleCharacters} from './actions';
import colors from '../../themes/colors';
import InfoCard from '../../components/molecules/InfoCard';
import {ScreenProp} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

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
    {id: number; image: string; name: string}[]
  >([]);

  const [characterIds, setCharacterIds] = useState<number[]>([]);

  const navigation = useNavigation<ScreenProp>();

  useEffect(() => {
    getEpisodesDetails(episodeId, setEpisode);
  }, [episodeId]);

  useEffect(() => {
    getMultipleCharacters(characterIds, setCharacterData);
  }, [characterIds]);

  useEffect(() => {
    if (episode?.characters?.length > 0) {
      setCharacterIds(
        episode.characters.map(characterUrl =>
          Number(characterUrl.split('/').pop()),
        ),
      );
    }
  }, [episode]);

  const renderCharacterItem = ({item}: CharacterItem) => (
    <TouchableOpacity
      style={styles.characterContainer}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('CharacterDetails', {
          characterId: item?.id,
        })
      }>
      <Image source={{uri: item.image}} style={styles.characterImage} />
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      data={characterData}
      renderItem={renderCharacterItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={4}
      ListHeaderComponent={
        <>
          <View style={styles.infoCardContainer}>
            <InfoCard label="Name" text={episode.name} />
            <InfoCard label="Air Date" text={episode.air_date} />
            <InfoCard label="Episode" text={episode.episode} />
          </View>
          <Text style={styles.characterTitle}>Characters</Text>
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    paddingVertical: 16,
  },
  characterContainer: {
    flex: 1 / 4,
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
    flex: 1,
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
