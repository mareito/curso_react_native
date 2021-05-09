import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box object model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {                
        fontSize:20 ,
        borderWidth:2
    },    
    container : {
        flex:1,
        backgroundColor: 'red'
    }
});