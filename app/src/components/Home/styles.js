import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  text: {
    input: {
      color: 'black',
    },
    default: {
      color: 'gray',
    },
    fontSize: 20,
    textAlign: 'center',
  },
});
