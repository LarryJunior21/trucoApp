import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  manilha: {
    position: 'absolute',
    top: 5,
    right: 5,
    text: {
      color: 'grey',
      fontSize: 10,
      alignSelf: 'center',
    },
  },
});
