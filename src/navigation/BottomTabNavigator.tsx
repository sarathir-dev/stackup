import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageSourcePropType} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {RootState} from '../store';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  let iconSource: ImageSourcePropType;

  switch (routeName) {
    case 'Home':
      iconSource = focused
        ? require('../assets/ExerciseFill.png')
        : require('../assets/ExerciseOutline.png');
      break;
    case 'Analytics':
      iconSource = focused
        ? require('../assets/AnalyticsFill.png')
        : require('../assets/AnalyticsOutline.png');
      break;
    case 'Profile':
      iconSource = focused
        ? require('../assets/ProfileFill.png')
        : require('../assets/ProfileOutline.png');
      break;
    default:
      iconSource = require('../assets/default.png');
  }

  return <Image source={iconSource} style={{width: 24, height: 24}} />;
};

const BottomTabNavigator = () => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
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
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
