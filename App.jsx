/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import CardList from './src/Components/CardList/CardList';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacityBase,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/Redux/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={{height: '100%', backgroundColor: 'blue'}}>
        <CardList />
      </View>
    </Provider>
  );
};

export default App;
