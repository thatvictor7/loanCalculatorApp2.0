import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default class Splash extends React.Component {
    render(){
        const { navigate } = this.props.navigation
        return(
            <View style={styles.fullScreen}>
                <Text onPress={() => navigate('Loan')} style={styles.title}>AppName</Text>
                <Text style={styles.title}>Logo</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    fullScreen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        // marginTop: 10,
        // marginBottom: 20,
        backgroundColor: '#000E23'
    },
    title: {
        color: 'white'
    }
})