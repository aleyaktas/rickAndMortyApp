import React from 'react';
import {Text, View} from 'react-native';
import {InfoCardProps} from './types';
import style from './styles';

const InfoCard: React.FC<InfoCardProps> = ({label, text}) => {
  const styles = style();
  return (
    <View style={styles.infoCard}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoCard;
