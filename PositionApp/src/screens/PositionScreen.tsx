import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const PositionScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View style={styles.container}>

            <View style={styles.division}>
                <View style={styles.cajaMorada}></View>
                <View style={styles.cajaNaranja}></View>
            </View>
            <View style={styles.division}>
                <View style={styles.cajaMorada2}>
                    <Text style={styles.cajaText}>+</Text>
                </View>
                <View style={styles.cajaNaranja2}>
                    <Text style={styles.cajaText}>-</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    division: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1
    },
    container: {
        backgroundColor: '#28C4D9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cajaMorada: {
        top: 10,
        left: -25,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "#5856D6",
    },
    cajaNaranja: {
        top: -40,
        left: 25,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaMorada2: {
        position: 'absolute',
        top: 5,
        left: 5,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "#5856D6",
        borderRadius: 100,          
        justifyContent: 'center'    
    },
    cajaNaranja2: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        borderRadius: 100,
        justifyContent: 'center'
    },
    cajaText : {
        top : -4,
        fontSize: 50,
        color: 'white',
        alignSelf: 'center',        
    }
});
