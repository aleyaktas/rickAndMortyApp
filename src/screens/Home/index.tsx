import React from 'react';
import {StyleSheet, View} from 'react-native';
import EpisodeCard from '../../components/molecules/EpisodeCard';

const Home = () => {
  const episodeData = {
    id: 1,
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
    characters: ['Rick', 'Morty'],
    url: 'https://rickandmortyapi.com/api/episode/1',
    created: '2017-11-10T12:56:33.798Z',
  };
  return (
    <View>
      <View style={styles.episodeCardList}>
        <EpisodeCard episodeData={episodeData} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  episodeCardList: {
    padding: 16,
    gap: 16,
  },
});
