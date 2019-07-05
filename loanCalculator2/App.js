import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Splash from './screens/splash.js'
import LoanEntry from './screens/LoanEntry.js'
import Results from './screens/Results.js'
// import Summary from './components/Summary.js/index.js'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <LoanEntry></LoanEntry>
//     </View>
//   );
// }

const NavigationApp = createStackNavigator({
  Main: { screen: Splash },
  Loan: { screen: LoanEntry },
  Results: { screen: Results },
  // Summary: { screen: Summary }
  // Main: () => <Splash></Splash>,
},{
  headerMode: "none"
})

export default createAppContainer(NavigationApp)

// export default class App extends React.Component {
//   render(){
//     return(
//       <NavigationApp />
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
