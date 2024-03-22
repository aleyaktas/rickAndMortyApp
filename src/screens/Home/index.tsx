import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import EpisodeCard from '../../components/molecules/EpisodeCard';
import {Episode, EpisodeData} from '../../services/api/types';
import {getAllEpisodes} from './actions';

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
    <View style={styles.container}>
      <FlatList
        data={episodes.results}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={20}
        contentContainerStyle={styles.episodeCardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  episodeCardList: {
    padding: 16,
    gap: 16,
  },
});

export default Home;
