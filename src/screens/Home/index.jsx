import {View, Text, Button, StatusBar, useColorScheme} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log({navigation});

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text>Home</Text>
        <Button
          onPress={() => {
            console.log('pressed');
            navigation.navigate('Login');
          }}
          title="Login"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
