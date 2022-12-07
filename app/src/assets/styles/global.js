import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: '30%',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  bundleRow: {
    flexDirection: 'row',
  },
  bundleColumn: {
    flexDirection: 'column',
  },
  cardimage: {
    height: 150,
    width: 100,
    resizeMode: 'center',
    alignSelf: 'center',
    down: {
      borderRadius: 5,
      borderWidth: 0.3,
      borderColor: 'black',
    },
    manilha: {
      height: 80,
      width: 55,
    },
  },
});
