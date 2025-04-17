import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName = '';

  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home';
      break;
    case 'Settings':
      iconName = focused ? 'settings' : 'settings';
      break;
    case 'Profile':
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      iconName = 'help-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const BottomTabNavigator = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: theme.mode === 'dark' ? '#ffffff' : '#000000',
        tabBarInactiveTintColor: theme.mode === 'dark' ? '#aaaaaa' : '#555555',
        tabBarStyle: {
          backgroundColor: theme.mode === 'dark' ? '#1e1e1e' : '#ffffff',
          borderTopColor: theme.mode === 'dark' ? '#333333' : '#e0e0e0',
        },
        headerStyle: {
          backgroundColor: theme.mode === 'dark' ? '#1e1e1e' : '#ffffff',
        },
        headerTitleStyle: {
          color: theme.mode === 'dark' ? '#ffffff' : '#000000',
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
