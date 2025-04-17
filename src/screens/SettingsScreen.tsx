import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import ThemeToggle from '../components/ThemeToggle';

const SettingsScreen = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <ThemeToggle />
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.mode === 'dark' ? '#121212' : '#f5f5f5',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
      color: theme.mode === 'dark' ? '#ffffff' : '#000000',
    },
  });

export default SettingsScreen;
