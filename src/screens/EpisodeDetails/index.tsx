import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
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
import Header from '../../components/atoms/Header';
import TextInput from '../../components/atoms/TextInput';

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
  const [filteredCharacterData, setFilteredCharacterData] = useState<
    {id: number; image: string; name: string}[]
  >([]);

  const [characterIds, setCharacterIds] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
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

  const handleSearch = () => {
    setFilteredCharacterData(
      characterData.filter(character =>
        character.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

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
      <Header
        size={14}
        text={item.name}
        style={styles.characterName}
        numberOfLines={2}
        ellipsizeMode="tail"
        center
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.container}
      data={searchValue ? filteredCharacterData : characterData}
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
          <Header
            text="Characters"
            size={24}
            bold
            color={colors.slimyGreen}
            style={styles.characterTitle}
          />
          <TextInput
            placeholder="Search..."
            value={searchValue}
            onChange={setSearchValue}
            containerStyle={styles.search}
          />
        </>
      }
      ListEmptyComponent={
        <Header
          text="No characters found!"
          size={16}
          color={colors.blackOlive}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    paddingVertical: 20,
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
    padding: 8,
  },
  characterTitle: {
    marginBottom: 12,
  },
  infoCardContainer: {gap: 16, marginVertical: 16},
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
    marginBottom: 16,
  },
});

export default EpisodeDetails;
