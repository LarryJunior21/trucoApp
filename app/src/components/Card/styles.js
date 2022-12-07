import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  select: {
    display: 'flex',
    // borderWidth: 1,
    alignItems: 'center',
    card1: {
      borderColor: 'red',
      left: '35%',
      transform: [{rotate: '0deg'}],
      selected: {
        bottom: '10%',
        transform: [{rotate: '0deg'}],
      },
    },
    card2: {
      borderColor: 'green',
      transform: [{rotate: '2deg'}],
      left: '0%',
      selected: {
        bottom: '10%',
        transform: [{rotate: '0deg'}],
      },
    },
    card3: {
      borderColor: 'blue',
      transform: [{rotate: '3deg'}],
      left: '-35%',
      selected: {
        bottom: '10%',
        transform: [{rotate: '0deg'}],
      },
    },
  },
});
