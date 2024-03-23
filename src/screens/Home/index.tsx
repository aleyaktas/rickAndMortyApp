import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import EpisodeCard from '../../components/molecules/EpisodeCard';
import {Episode, EpisodeData} from '../../services/api/types';
import {getAllEpisodes} from './actions';
import TextInput from '../../components/atoms/TextInput';
import colors from '../../themes/colors';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [episodes, setEpisodes] = useState<EpisodeData>({
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: null,
    },
    results: [],
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  return (
    <FlatList
      style={styles.container}
      data={episodes.results}
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
            value={search}
            onChange={setSearch}
            containerStyle={styles.search}
          />
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
