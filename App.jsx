/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import FlightSearchScreen from './src/screens/FlightSearchScreen';
import {screenNames} from './src/navigations/screenNames';
import FlightSearchResult from './src/screens/FlightSearchResult';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{height: '100%'}}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        barStyle={'light-content'}
        backgroundColor={Colors.darker}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={screenNames.FlightSearchScreen}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={screenNames.FlightSearchScreen}
            component={FlightSearchScreen}
          />
          <Stack.Screen name={screenNames.Home} component={Home} />
          <Stack.Screen name={screenNames.Login} component={Login} />
          <Stack.Screen
            name={screenNames.FlightSearchResult}
            component={FlightSearchResult}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
