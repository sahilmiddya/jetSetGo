import {
  View,
  Text,
  Button,
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Login = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
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
            navigation.navigate('Home');
          }}
          title="Home"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
