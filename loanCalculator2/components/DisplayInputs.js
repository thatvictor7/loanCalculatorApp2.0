import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DisplayInputs = () => {
    return(
        <View style={styles.display}>
            <View>
                <Text style={styles.text}>Summary:</Text>
                <Text style={styles.text}>Amount: $5000</Text>
                <Text style={styles.text}>dssdfd</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        backgroundColor: '#1d0693'
    },
    text: {
        // backgroundColor: 'white'
    }
})

export default DisplayInputs