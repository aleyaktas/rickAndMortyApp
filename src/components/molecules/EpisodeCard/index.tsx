import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from '../../atoms/Icon';
import style from './styles';
import {Episode} from '../../../services/api/types';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../../navigation/types';
import Header from '../../atoms/Header';

const EpisodeCard = ({episodeData}: {episodeData: Episode}) => {
  const styles = style();
  const navigation = useNavigation<ScreenProp>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('EpisodeDetails', {
          episodeId: episodeData.id,
        });
      }}>
      <Header text={episodeData?.episode} size={20} bold />
      <Header
        text={episodeData?.name}
        size={16}
        semiBold
        numberOfLines={1}
        ellipsizeMode="tail"
      />
      <View style={styles.footer}>
        <Icon name="Episode" width={20} height={20} color="black" />
        <Header text={episodeData?.air_date} size={14} />
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
