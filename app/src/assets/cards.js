const down_card = require('./cards/upside_down_card.png');

var cards = [
  {
    id: 'spades1',
    picture_name: require('./cards/ace_of_spades.png'),
    strength: 8,
    down_card: down_card,
  },
  {
    id: 'spades2',
    picture_name: require('./cards/2_of_spades.png'),
    strength: 9,
    down_card: down_card,
  },
  {
    id: 'spades3',
    picture_name: require('./cards/3_of_spades.png'),
    strength: 10,
    down_card: down_card,
  },
  {
    id: 'spades4',
    picture_name: require('./cards/4_of_spades.png'),
    strength: 1,
    down_card: down_card,
  },
  {
    id: 'spades5',
    picture_name: require('./cards/5_of_spades.png'),
    strength: 2,
    down_card: down_card,
  },
  {
    id: 'spades6',
    picture_name: require('./cards/6_of_spades.png'),
    strength: 3,
    down_card: down_card,
  },
  {
    id: 'spades7',
    picture_name: require('./cards/7_of_spades.png'),
    strength: 4,
    down_card: down_card,
  },
  {
    id: 'spades11',
    picture_name: require('./cards/queen_of_spades.png'),
    strength: 5,
    down_card: down_card,
  },
  {
    id: 'spades12',
    picture_name: require('./cards/jack_of_spades.png'),
    strength: 6,
    down_card: down_card,
  },
  {
    id: 'spades13',
    picture_name: require('./cards/king_of_spades.png'),
    strength: 7,
    down_card: down_card,
  },
  {
    id: 'hearts1',
    picture_name: require('./cards/ace_of_hearts.png'),
    strength: 8,
    down_card: down_card,
  },
  {
    id: 'hearts2',
    picture_name: require('./cards/2_of_hearts.png'),
    strength: 9,
    down_card: down_card,
  },
  {
    id: 'hearts3',
    picture_name: require('./cards/3_of_hearts.png'),
    strength: 10,
    down_card: down_card,
  },
  {
    id: 'hearts4',
    picture_name: require('./cards/4_of_hearts.png'),
    strength: 1,
    down_card: down_card,
  },
  {
    id: 'hearts5',
    picture_name: require('./cards/5_of_hearts.png'),
    strength: 2,
    down_card: down_card,
  },
  {
    id: 'hearts6',
    picture_name: require('./cards/6_of_hearts.png'),
    strength: 3,
    down_card: down_card,
  },
  {
    id: 'hearts7',
    picture_name: require('./cards/7_of_hearts.png'),
    strength: 4,
    down_card: down_card,
  },
  {
    id: 'hearts11',
    picture_name: require('./cards/queen_of_hearts.png'),
    strength: 5,
    down_card: down_card,
  },
  {
    id: 'hearts12',
    picture_name: require('./cards/jack_of_hearts.png'),
    strength: 6,
    down_card: down_card,
  },
  {
    id: 'hearts13',
    picture_name: require('./cards/king_of_hearts.png'),
    strength: 7,
    down_card: down_card,
  },
  {
    id: 'clubs1',
    picture_name: require('./cards/ace_of_clubs.png'),
    strength: 8,
    down_card: down_card,
  },
  {
    id: 'clubs2',
    picture_name: require('./cards/2_of_clubs.png'),
    strength: 9,
    down_card: down_card,
  },
  {
    id: 'clubs3',
    picture_name: require('./cards/3_of_clubs.png'),
    strength: 10,
    down_card: down_card,
  },
  {
    id: 'clubs4',
    picture_name: require('./cards/4_of_clubs.png'),
    strength: 1,
    down_card: down_card,
  },
  {
    id: 'clubs5',
    picture_name: require('./cards/5_of_clubs.png'),
    strength: 2,
    down_card: down_card,
  },
  {
    id: 'clubs6',
    picture_name: require('./cards/6_of_clubs.png'),
    strength: 3,
    down_card: down_card,
  },
  {
    id: 'clubs7',
    picture_name: require('./cards/7_of_clubs.png'),
    strength: 4,
    down_card: down_card,
  },
  {
    id: 'clubs11',
    picture_name: require('./cards/queen_of_clubs.png'),
    strength: 5,
    down_card: down_card,
  },
  {
    id: 'clubs12',
    picture_name: require('./cards/jack_of_clubs.png'),
    strength: 6,
    down_card: down_card,
  },
  {
    id: 'clubs13',
    picture_name: require('./cards/king_of_clubs.png'),
    strength: 7,
    down_card: down_card,
  },
  {
    id: 'diamonds1',
    picture_name: require('./cards/ace_of_diamonds.png'),
    strength: 8,
    down_card: down_card,
  },
  {
    id: 'diamonds2',
    picture_name: require('./cards/2_of_diamonds.png'),
    strength: 9,
    down_card: down_card,
  },
  {
    id: 'diamonds3',
    picture_name: require('./cards/3_of_diamonds.png'),
    strength: 10,
    down_card: down_card,
  },
  {
    id: 'diamonds4',
    picture_name: require('./cards/4_of_diamonds.png'),
    strength: 1,
    down_card: down_card,
  },
  {
    id: 'diamonds5',
    picture_name: require('./cards/5_of_diamonds.png'),
    strength: 2,
    down_card: down_card,
  },
  {
    id: 'diamonds6',
    picture_name: require('./cards/6_of_diamonds.png'),
    strength: 3,
    down_card: down_card,
  },
  {
    id: 'diamonds7',
    picture_name: require('./cards/7_of_diamonds.png'),
    strength: 4,
    down_card: down_card,
  },
  {
    id: 'diamonds11',
    picture_name: require('./cards/queen_of_diamonds.png'),
    strength: 5,
    down_card: down_card,
  },
  {
    id: 'diamonds12',
    picture_name: require('./cards/jack_of_diamonds.png'),
    strength: 6,
    down_card: down_card,
  },
  {
    id: 'diamonds13',
    picture_name: require('./cards/king_of_diamonds.png'),
    strength: 7,
    down_card: down_card,
  },
];

export default cards;
