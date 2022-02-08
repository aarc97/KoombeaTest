import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import RootStackScreen from './Root';

const AppNavigator = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
