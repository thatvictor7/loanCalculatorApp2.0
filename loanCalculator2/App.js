import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import splash from './screens/splash.js'
import LoanEntry from './screens/LoanEntry.js'

export default function App() {
  return (
    <View style={styles.container}>
      <LoanEntry></LoanEntry>
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
