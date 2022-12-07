import React from 'react';
import {View, Text, Image} from 'react-native';

// import { Container } from './styles';
import global from '../../assets/styles/global';
import styles from './styles';

const down_card = require('../../assets/cards/upside_down_card.png');
const yugioh = require('../../assets/cards/yugioh_down_card.jpg');

const Table = card => {
  const picture = card.card.picture_name;

  return (
    <View style={global.container}>
      <View style={styles.manilha}>
        <Image
          source={picture}
          style={[
            global.cardimage,
            global.cardimage.down,
            global.cardimage.manilha,
          ]}
        />
        <Text style={styles.manilha.text}>Game Card</Text>
      </View>
    </View>
  );
};

export default Table;
