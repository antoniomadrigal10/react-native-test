import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CharacterDetails from '../screens/CharacterDetails';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Characters'}}
        />
        <Stack.Screen name="Details" component={CharacterDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
