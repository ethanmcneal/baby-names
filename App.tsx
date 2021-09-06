import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import AppNavigator from './navigation/AppNavigator';
import namesReducer from './store/reducers/name'
import filtersReducer from './store/reducers/filters'
import { enableScreens } from 'react-native-screens';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const DefaultRootState = combineReducers({
  names: namesReducer,
  filters: filtersReducer,
})

const store = createStore(DefaultRootState, applyMiddleware(thunk))
export default function App() {
  enableScreens()
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loading, setLoading] = useState(false)

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
