import React from 'react'
import { View, Text, StyleSheet, Dimensions,ScrollView } from 'react-native'
import DisplayInputs from '../components/DisplayInputs.js'
import HeaderTitle from '../components/Header.js'
import Summary from '../components/Summary.js'

export default class Results extends React.Component{

    roundHundredthPlace(num){
        return Math.floor(num * 100) / 100
    }

    roundDownHundredthPlace(num){
        return Math.ceil(num * 100) / 100
    }

    calculateMonthlyPayment = (input) => {
        const rate = input.interest / 100
        const monthly = 12

        // const interest = rate

        const interestCalculation = rate / monthly
        const negativeMonth = input.loanTerm * -1

        let monthlyTotal = (input.amount * interestCalculation) / (1 - Math.pow((1 + interestCalculation),negativeMonth))
        let totalWithApr = monthlyTotal * input.loanTerm

        // console.log(this.roundHundredthPlace(totalWithApr))
        return this.calculateMonthlySchedule(interestCalculation, monthlyTotal, input.amount, input.loanTerm)
        // return this.roundHundredthPlace(monthlyTotal)
    }

    calculateMonthlySchedule = (interest, monthlyPay, principalAmount, length) => {
        console.log(this.roundHundredthPlace(monthlyPay))
        let balance = principalAmount
        let payment = []
        // console.log(interest, " ", monthlyPay, " ", principalAmount, " ", length);
        for (let i = 0; i < length; i++) {
            let singlePayment = []
            // console.log(interest)

            let modifiedInterest = this.roundHundredthPlace(balance * interest)

            let principalPayment = this.roundHundredthPlace(monthlyPay - modifiedInterest)

            balance -= principalPayment

            if (balance < 1) {
                balance = 0
            }

            singlePayment.push(i + 1)
            singlePayment.push(modifiedInterest)
            singlePayment.push(principalPayment)
            singlePayment.push(this.roundHundredthPlace(balance))
            
            payment.push(singlePayment)
        }
        // console.log(payment);
        return payment
    }

    render(){
        const { navigation } = this.props
        const info = navigation.getParam('results','none')

        const calculate = this.calculateMonthlyPayment(info)

        return(
            <View style={styles.fullScreen}>
                <HeaderTitle></HeaderTitle>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                <Summary info={info}>{console.log(info)}</Summary>
                {/* <DisplayInputs></DisplayInputs> */}
                <View style={styles.paymentRow}>
                    <Text style={styles.itemNumber} key={0}>Payment:</Text>
                    <Text style={styles.item} key={0}>Interest:</Text>
                    <Text style={styles.item} key={0}>Principal:</Text>
                    <Text style={styles.item} key={0}>Balance:</Text>
                </View>
                {/* <Text style={styles.item} key={payment[0]}>{payment[0]}</Text> */}
                <View>{calculate.map((payment) => {
                    return <View style={styles.paymentRow}>
                            {/* {payment[0] === 1 ? <Text style={styles.item} key={payment[0]}>Test</Text>: null} */}
                            <Text style={styles.itemNumber} key={payment[0]}>{payment[0]}</Text>
                            <Text style={styles.item} key={payment[0]}>${payment[1]}</Text>
                            <Text style={styles.item} key={payment[0]}>${payment[2]}</Text>
                            <Text style={styles.item} key={payment[0]}>${payment[3]}</Text>
                         </View>
                })}</View>
            </ScrollView>
            </View>
        )
    }
}

var width = Dimensions.get('window').width

const styles = StyleSheet.create({
    fullScreen: {
        // alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        // marginTop: 10,
        // marginBottom: 20,
        backgroundColor: '#000E23',
        // alignSelf: 'stretch',
        // width: width,
    },
    item: {
        color: 'white',
        width: 85,
        marginLeft: 4,
        // width: width,
        // alignSelf: 'stretch',
    },
    itemNumber: {
        color: 'white',
        width: 45,
        marginLeft: 4,
    },
    paymentRow: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignSelf: 'stretch',
        // width: width,
    },
    contentContainer: {
        paddingTop: 20,
        backgroundColor: '#000E23',
    }
})