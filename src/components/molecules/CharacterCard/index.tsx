import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../../navigation/types';
import Image from '../../atoms/Image';
import {CharacterCardProps} from './types';

const CharacterCard: React.FC<CharacterCardProps> = ({characterData}) => {
  const styles = style();
  const navigation = useNavigation<ScreenProp>();

  const getStatusColor = () => {
    switch (characterData?.status) {
      case 'Dead':
        return 'red';
      case 'Alive':
        return 'green';
      default:
        return 'gray';
    }
  };

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
        <Text style={styles.title}>{characterData?.name}</Text>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusIndicator,
              {backgroundColor: getStatusColor()},
            ]}
          />
          <Text style={styles.subtitle}>{characterData?.status}</Text>
        </View>

        <Text style={styles.subtitle}>{characterData?.species}</Text>
        <Text>{characterData?.gender}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
