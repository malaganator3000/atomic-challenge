/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './navigators/root/root.navigator';
import { Provider } from 'react-redux';
import store from './store';
export const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer >
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
