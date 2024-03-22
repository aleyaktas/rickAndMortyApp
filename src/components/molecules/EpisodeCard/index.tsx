import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../atoms/Icon';
import style from './styles';
import {Episode} from '../../../services/api/types';

const EpisodeCard = ({episodeData}: {episodeData: Episode}) => {
  const styles = style();

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <Text style={styles.title}>{episodeData?.episode}</Text>
      <Text style={styles.subtitle}>{episodeData?.name}</Text>
      <View style={styles.footer}>
        <Icon name="Episode" width={20} height={20} color="black" />
        <Text>{episodeData?.air_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
