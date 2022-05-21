/**
 * @format
 */

 import {AppRegistry} from 'react-native';

 import {name as appName} from './app.json';
 
 /**
  * @format
  */
 
  
  import App from './src/App';
  
  import {extendTheme, NativeBaseProvider, useTheme, Text, Box } from 'native-base';
  import React from 'react';
  
  const newColorTheme = {
    brand: {
      900: '#8287af',
      800: '#7c83db',
      700: '#b3bef6',
    },
  };
  const theme = extendTheme({ colors: newColorTheme });
  function Root() {
    return (
    <NativeBaseProvider theme={theme}>
        <App />
    </NativeBaseProvider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Root);
  
 