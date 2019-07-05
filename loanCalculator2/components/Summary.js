import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

// export default class Summary extends React.Component{
//     render(){
//         const { navigation } = this.props
//         const info = navigation.getParam('info', 'none')
//         return(
//             <View style={styles.fullScreen}>
//                 <Text style={styles.title}>Loan Info:</Text>
//                 <Text style={styles.text}>Amount: ${info.amount}</Text>
//                 <Text style={styles.text}>Loan Term: {info.loanTerm} {info.timeUnit}</Text>
//                 <Text style={styles.text}>Interest: {info.interest} %</Text>
//             </View>
//         )
//     }
// }
const Summary = (props) => {
    const { info } = props
    return(
        <View style={styles.fullScreen}>
            <Text style={styles.title}>Loan Info: {console.log(info)}</Text>
            <Text style={styles.text}>Amount: ${info.amount}</Text>
            <Text style={styles.text}>Loan Term: {info.loanTerm} {info.timeUnit}</Text>
            <Text style={styles.text}>Interest: {info.interest} %</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        // marginTop: 20,
        // marginBottom: 20,
        backgroundColor: '#000E23',
        // alignSelf: 'stretch',
        // width: width,
    },
    text: {
        color: 'white',
        backgroundColor: 'red',
        marginVertical: 5,
        height: 30,
        width: 200,
        borderRadius: 50,
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 30,
        // marginHorizontal: 35,
    },
})

export default Summary