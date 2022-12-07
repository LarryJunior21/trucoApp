import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    flexDirection: 'column',
    // borderColor: 'blue',
    // borderWidth: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  hand: {
    flex: 0,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  bundle: {
    flex: 0,
    justifyContent: 'center',
  },
});
