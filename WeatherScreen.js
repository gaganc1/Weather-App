import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import auth from '@react-native-firebase/auth';

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY`);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {weather ? (
        <View>
          <Text>Weather in {weather.name}</Text>
          <Text>Temperature: {weather.main.temp}°K</Text>
          <Text>Condition: {weather.weather[0].description}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default WeatherScreen;
