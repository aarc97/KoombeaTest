import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from '../constants';
import {MainStack} from './stacks';

import Onboarding from '../screens/Onboarding';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  const isFirstTime = false;

  return (
    <>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {isFirstTime ? (
          <RootStack.Screen name={Routes.ONBOARDING} component={Onboarding} />
        ) : (
          <RootStack.Screen name="Main" component={MainStack} />
        )}
      </RootStack.Navigator>
    </>
  );
};

export default RootStackScreen;
