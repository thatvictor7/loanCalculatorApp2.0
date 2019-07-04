import React from 'react'
import { View, StyleSheet, Picker } from 'react-native'
// import { Picker } from 'react-native-elements'

// state = { language: true };
// constructor(props){
//     su
// }

const LoanTypePicker = () => {
    return(
        <View style={styles.pickerView}>
            <View style={styles.pickerViewLoanType}>
                <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue
                        // (e) => this({setS})
                        })
                    }>
                    <Picker.Item label="Personal Loan" value="personal" />
                    <Picker.Item label="Auto Loan" value="auto" />
                </Picker>
            </View>
        </View>
    )
}
console.log(this.state)

const styles = StyleSheet.create({
    loanTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 5
    },
    picker: {
        height: 50,
        width: 360,
        backgroundColor: '#2608B1',
        color: 'white',
    },
    pickerView: {
        borderRadius: 50,
        borderColor: '#bdc3c7',
        overflow: 'hidden',
    },
    pickerViewLoanType: {
        // marginLeft: 15,
        // borderRadius: 50,
        // color: 'white',
        // backgroundColor: '#2608B1',
        // borderWidth: 1,
        // overflow: 'hidden',
        // width: 140
           },
})

export default LoanTypePicker