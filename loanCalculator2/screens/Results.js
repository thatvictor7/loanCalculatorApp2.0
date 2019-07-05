import React from 'react'
import { View, Text } from 'react-native'

export default class Results extends React.Component{
    render(){
        const { navigation } = this.props
        const test = navigation.getParam('test','none')
        return(
            <View>
                <Text>{test.amount}</Text>
            </View>
        )
    }
}