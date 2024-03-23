import React from 'react';
import {Text, View} from 'react-native';
import {InfoCardProps} from './types';
import style from './styles';
import Header from '../../atoms/Header';
import colors from '../../../themes/colors';

const InfoCard: React.FC<InfoCardProps> = ({label, text}) => {
  const styles = style();
  return (
    <View style={styles.infoCard}>
      <Header text={`${label}: `} size={16} color={colors.slimyGreen} bold />
      <Header text={text} size={16} style={styles.text} />
    </View>
  );
};

export default InfoCard;
