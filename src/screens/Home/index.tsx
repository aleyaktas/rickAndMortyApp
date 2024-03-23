import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import EpisodeCard from '../../components/molecules/EpisodeCard';
import {Episode, EpisodeData} from '../../services/api/types';
import {getAllEpisodes} from './actions';
import TextInput from '../../components/atoms/TextInput';
import colors from '../../themes/colors';
import Header from '../../components/atoms/Header';

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeData>({
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: null,
    },
    results: [],
  });
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getAllEpisodes(currentPage, setEpisodes);
  }, [currentPage]);

  const renderItem = ({item}: {item: Episode}) => {
    return <EpisodeCard episodeData={item} />;
  };

  const handleLoadMore = () => {
    if (episodes.info.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = () => {
    setFilteredEpisodes(
      episodes.results.filter(
        episode =>
          episode.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          episode.air_date.toLowerCase().includes(searchValue.toLowerCase()) ||
          episode.episode.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <FlatList
      style={styles.container}
      data={searchValue ? filteredEpisodes : episodes.results}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={20}
      contentContainerStyle={styles.episodeCardList}
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
          <Header text="No episodes found!" size={20} bold center />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  episodeCardList: {
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

export default Home;
