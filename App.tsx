import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {MessageScreen} from './screens/MessageScreen';

const App = () => {
  return (
    <Provider store={store}>
      <MessageScreen />
    </Provider>
  );
};

export default App;
