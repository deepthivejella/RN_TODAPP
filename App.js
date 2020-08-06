/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import codePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import store from './src/store/configStore';
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};
export default codePush(codePushOptions)(App);
