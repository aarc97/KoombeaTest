import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStackScreen from './Root';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
