import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Route from './src/navigation/Route';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
