import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './components/HomeScreen';
import {CFrancesScreen} from './components/CFrances';
import {CRussoScreen} from './components/CRusso';
import {CBelgaScreen} from './components/CBelga';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="CFrances" component={CFrancesScreen} />
        <Stack.Screen name="CRusso" component={CRussoScreen} />
        <Stack.Screen name="CBelga" component={CBelgaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}