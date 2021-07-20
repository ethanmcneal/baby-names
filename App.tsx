import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AppNavigator from './navigation/AppNavigator';
import namesReducer from './store/reducers/name'
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


const DefaultRootState = combineReducers({
  names: namesReducer
})

const store = createStore(DefaultRootState)
export default function App() {
  enableScreens()
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
