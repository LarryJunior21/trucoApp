import React from 'react';

import {SafeAreaView} from 'react-native';

import Navigation from './Navigation';
import global from './src/assets/styles/global';

const App = () => {
  return (
    <SafeAreaView style={global.container}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
