import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Splash from './screens/splash.js'
import LoanEntry from './screens/LoanEntry.js'
import Results from './screens/Results.js'

const NavigationApp = createStackNavigator({
  Main: { screen: Splash },
  Loan: { screen: LoanEntry },
  Results: { screen: Results },
},{
  headerMode: "none"
})

export default createAppContainer(NavigationApp)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
