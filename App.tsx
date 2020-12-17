import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './src/components/onBoarding/OnBoarding';
export default function App() {
  return (
    <View style={styles.container}>
      <OnBoarding />
      {/* <Text> what áđasdsdsadsadasds</Text> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
