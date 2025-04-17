import 'react-native-gesture-handler';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './src/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const Stack = createStackNavigator();

const ThemedApp = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.mode === 'dark' ? '#121212' : '#ffffff'}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <ThemedApp />
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
