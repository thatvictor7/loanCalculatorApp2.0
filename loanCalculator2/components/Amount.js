import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Text, Input } from 'react-native-elements'

const Amount = (props) => {
    const {amountEntered, change} = props
    return(
        // <View style={styles.inputView}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    onChangeText={(amountEntered) => change(amountEntered)}
                    keyboardType='numeric'
                    // value={amountEntered}
                    placeholder='$5,000'>
                </TextInput>
                <Text>{console.log(amountEntered, "testss")}</Text>
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