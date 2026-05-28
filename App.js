import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Agenda from './src/screens/Agenda';
import Financeiro from './src/screens/Financeiro';
import Frequencia from './src/screens/Frequencia';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Financeiro" component={Financeiro} />
        <Stack.Screen name="Frequencia" component={Frequencia} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}