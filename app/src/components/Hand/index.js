import {useEffect, useState} from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import styles from './styles';
import global from '../../assets/styles/global';
import Card from '../Card';

const Hand = props => {
  const {drawed} = props;

  const [currentCard, setCurrentCard] = useState('');
  const [turned, setTurned] = useState(false);

  const select = card => {
    setTurned(false);
    setCurrentCard(card);
  };

  return (
    <View style={styles.container}>
      <View style={styles.hand}>
        {drawed.map((card, index) => {
          return (
            <Card
              card={card}
              pos={index}
              key={index}
              turned={turned}
              select={select}
              isCurrent={currentCard.id == card.id}
            />
          );
        })}
      </View>
      <View style={[styles.bundle, global.bundleRow]}>
        <TouchableOpacity
          style={global.button}
          onPress={() => {
            setTurned(!turned);
          }}>
          <Text>Turn card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={global.button}>
          <Text>Choose card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hand;
