import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

// import { Container } from './styles';
import styles from './styles';
import global from '../../assets/styles/global';

const Card = props => {
  const {card, pos, select, isCurrent, turned} = props;

  const currentStyle = [
    styles.select.card1.selected,
    styles.select.card2.selected,
    styles.select.card3.selected,
  ];

  const cardStyle = [
    styles.select.card1,
    styles.select.card2,
    styles.select.card3,
  ];

  // console.log(pos);

  return (
    <TouchableOpacity
      style={[
        styles.select,
        cardStyle[pos],
        isCurrent ? currentStyle[pos] : '',
      ]}
      onPress={() => {
        select(card);
      }}>
      <Image
        source={isCurrent && turned ? card.down_card : card.picture_name}
        style={global.cardimage}
      />
    </TouchableOpacity>
  );
};

export default Card;
