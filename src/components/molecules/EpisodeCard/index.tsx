import React from 'react';
import {Text, View} from 'react-native';
import Icon from '../../atoms/Icon';
import style from './styles';
import {EpisodeData} from './types';

const EpisodeCard = ({episodeData}: {episodeData: EpisodeData}) => {
  const styles = style();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{episodeData?.episode}</Text>
      <Text style={styles.subtitle}>{episodeData?.name}</Text>
      <View style={styles.footer}>
        <Icon name="Episode" width={20} height={20} color="black" />
        <Text>{episodeData?.air_date}</Text>
      </View>
    </View>
  );
};

export default EpisodeCard;
