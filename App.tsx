/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './src/navigations';

import {
  ThemeProvider,
  customTheme,
} from './src/libraries/react-native-elements';

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <SafeAreaProvider>
        <StatusBar />
        <AppNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;

// export default Config.LOAD_STORYBOOK === 'true' ? StorybookUIRoot : App;
