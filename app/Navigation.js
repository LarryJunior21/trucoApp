import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';

//Pages
import Home from './src/components/Home';
import Game from './src/components/Game';

//Declarations
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Truco!'}}
        />
        <Stack.Screen name="Game" component={Game} options={{title: 'Game'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
