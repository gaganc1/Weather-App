import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import WeatherScreen from '../screens/WeatherScreen';
import { useAuth } from '../hooks/useAuth';

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <WeatherScreen /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
