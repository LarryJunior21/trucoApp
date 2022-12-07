import {Text, TouchableOpacity, TextInput, View, Image} from 'react-native';

import styles from './styles';
import global from '../../assets/styles/global';

export default function Home({navigation}) {
  const press = quantity => {
    navigation.navigate('Game', {
      quantity: quantity * 3 + 1,
    });
  };

  return (
    <View style={[styles.container, global.bundleRow]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          press(2);
        }}>
        <Text style={[styles.text, styles.text.default]}>2 Players</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          press(4);
        }}>
        <Text style={[styles.text, styles.text.default]}>4 Players</Text>
      </TouchableOpacity>
    </View>
  );
}
