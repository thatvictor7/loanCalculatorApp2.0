// import React from 'react'
// import { View, StyleSheet } from 'react-native'
// import { Button, Text } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HeaderTitle from '../components/Header.js'
// import LoanTypePicker from '../components/LoanTypePicker.js'
// import Amount from '../components/Amount.js'
// import LoanTerm from '../components/LoanTerm.js'
// import InterestRate from '../components/InterestRate.js'

// export default function LoanEntry() {
//     return(
//         <View style={styles.fullScreen}>
//             <HeaderTitle></HeaderTitle>

//             <Text style={styles.screenTitle}>Enter Loan Info:</Text>
//             <LoanTypePicker></LoanTypePicker>

//             <Text style={styles.title}>Amount:</Text>
//             <Amount></Amount>

//             <Text style={styles.title}>Loan Term:</Text>
//             <LoanTerm></LoanTerm>

//             <Text style={styles.title}>Interest Rate:</Text>
//             <InterestRate></InterestRate>

//             <Button
//               buttonStyle={styles.button}
//               icon={
//                 <Icon
//                   name="arrow-right"
//                   size={15}
//                   color="white"
//                 />}
//                 title="Calculate"
//             />

//             <View style={styles.ad}>
//                 <Text style={styles.adText}>ADS ADS ADS ADS ADS</Text>
//             </View>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        // marginTop: 10,
        // marginBottom: 20,
        backgroundColor: '#000E23'
    },
    screenTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 5
    },
    title: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 30,
    },
    button: {
        backgroundColor: '#f9002c',
        marginTop: 50,
        width: 500,
    },
    ad: {
        width: 350,
        height: 50,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    adText: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonDisabled: {
        backgroundColor: '#fff',
        marginTop: 50,
        width: 500,
    }

})

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderTitle from '../components/Header.js'
import LoanTypePicker from '../components/LoanTypePicker.js'
import Amount from '../components/Amount.js'
import LoanTerm from '../components/LoanTerm.js'
import InterestRate from '../components/InterestRate.js'


export default class LoanEntry extends React.Component {

    // static navigationOptions = {
    //     title: 'welcomw'
    // }

  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  changeAmount = (input) => {
     this.setState({ 
         amount: input})
    // console.log(this.state)
    // console.log(input)
  }

  changeLoanTerm = (input) => {
      this.setState({
          loanTerm: input
      })
  }

  changeTimeUnit = (input) => {
      this.setState({
          timeUnit: input
      })
  }

  changeInterest = (input) => {
      this.setState({
          interest: input
      })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={styles.fullScreen}>
            <HeaderTitle></HeaderTitle>

            <Text style={styles.screenTitle}>Enter Loan Info:</Text>
            <LoanTypePicker></LoanTypePicker>

            <Text style={styles.title}>Amount:</Text>
            <Amount amountEntered={this.state.amount} change={this.changeAmount}></Amount>

            <Text style={styles.title}>Loan Term:</Text>
            <LoanTerm lengthEntered={this.state} change={this.changeLoanTerm} changeTime={this.changeTimeUnit}></LoanTerm>

            <Text style={styles.title}>Interest Rate:</Text>
            <InterestRate interestEntered={this.state.interest} changeInterest={this.changeInterest}></InterestRate>

            {this.state.amount > 0 && this.state.interest > 0 && this.state.loanTerm > 0? 
                <Button
                    buttonStyle={styles.button}
                    onPress={() => navigate('Results', {
                        test: this.state
                    })}
                    icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />}
                    title="Calculate"
                /> : 
                <Button
                    disabledStyle={styles.buttonDisabled}
                    disabled={true}
                    color='red'
                    icon={
                    <Icon
                        name="arrow-up"
                        size={15}
                        color="red"
                />}
                title=" Enter Loan Info to Calculate"
            />}

            <View style={styles.ad}>
                <Text style={styles.adText}>ADS ADS ADS ADS ADS</Text>
            </View>
        </View>
    );
  }
}