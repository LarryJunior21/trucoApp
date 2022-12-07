import Hand from '../Hand';
import Table from '../Table';
import global from '../../assets/styles/global';
import {useState, useEffect} from 'react';

import {View} from 'react-native';

//Common Data
import api from '../../api/Api';
import cards from '../../assets/cards';

const Game = ({route}) => {
  const {quantity} = route.params;

  const [gameCards, setGamecards] = useState(null);
  const [manilha, setManilha] = useState(null);

  useEffect(() => {
    if (quantity && quantity > 0)
      api.post('/draw', {quantity: quantity}).then(result => {
        data = result.data;
        const drawed = data
          .map(card => {
            return cards.find(c => c.id === card.id);
          })
          .slice(0, 3);

        if (drawed && drawed.length > 0) {
          setGamecards(drawed);
          setManilha(drawed[drawed.length - 1]);
        }
      });
  }, [quantity]);

  return (
    <>
      {gameCards && manilha && (
        <View style={global.container}>
          <Table card={manilha} />
          <Hand drawed={gameCards} />
        </View>
      )}
    </>
  );
};

export default Game;
