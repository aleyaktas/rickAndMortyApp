import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import style from './styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../../navigation/types';
import Image from '../../atoms/Image';
import {CharacterCardProps} from './types';
import Header from '../../atoms/Header';
import {getStatusColor} from '../../../helpers';

const CharacterCard: React.FC<CharacterCardProps> = ({characterData}) => {
  const styles = style();
  const navigation = useNavigation<ScreenProp>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('CharacterDetails', {
          characterId: characterData?.id,
        });
      }}>
      <Image source={{uri: characterData?.image}} style={styles.image} />
      <View style={styles.details}>
        <Header text={characterData?.name} size={20} bold />
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusIndicator,
              {
                backgroundColor: getStatusColor(
                  characterData?.status.toLowerCase(),
                ),
              },
            ]}
          />
          <Header text={characterData?.status} size={16} />
        </View>
        <Header text={characterData?.species} size={16} />
        <Header text={characterData?.gender} size={16} />
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
