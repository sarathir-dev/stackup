import React, {useEffect} from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme, toggleTheme} from '../store/themeSlice';
import {Appearance} from 'react-native';
import {RootState, AppDispatch} from '../store';

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      dispatch(setTheme(colorScheme as 'light' | 'dark'));
    });

    return () => subscription.remove();
  }, [dispatch]);

  const handleValueChange = () => {
    dispatch(toggleTheme());
  };

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        value={theme.mode === 'dark'}
        onValueChange={() => handleValueChange()}
        thumbColor={theme.mode === 'dark' ? '#ffffff' : '#f5f5f5'}
        trackColor={{false: '#767577', true: '#81b0ff'}}
      />
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    text: {
      marginRight: 10,
      color: theme.mode === 'dark' ? '#ffffff' : '#000000',
    },
  });

export default ThemeToggle;
