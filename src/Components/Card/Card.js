import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import useStyles from './Card.styles';

const Card = ({title, desc}) => {
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{desc}</Text>
    </View>
  );
};

export default Card;
