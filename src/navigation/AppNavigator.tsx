import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {RootState} from '../store';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.mode === 'dark' ? '#1e1e1e' : '#ffffff',
        },
        headerTintColor: theme.mode === 'dark' ? '#ffffff' : '#000000',
      }}>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
