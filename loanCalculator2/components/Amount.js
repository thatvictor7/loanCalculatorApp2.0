import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Text, Input } from 'react-native-elements'

const Amount = () => {
    return(
        // <View style={styles.inputView}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder='$5,000'>
                </TextInput>
            </View>
    )
    {/* </View> */}
}

const styles = StyleSheet.create({
   inputView: {
       backgroundColor: "white",
       borderRadius: 50,
       width: 360,
       height: 50,
    //    width: 205,
    //    borderRadius: 50,
   },
   input: {
       borderRadius: 50,
       textAlign: 'center',
       alignItems: 'center',
       flex: 1,
       // height: 30
   },
})

export default Amount