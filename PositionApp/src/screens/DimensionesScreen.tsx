import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'



export const DimensionesScreen = () => {

    //const {width, height } = Dimensions.get('window');

    const {width, height } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.cajaMorada,
                width: width * 0.5,
                }}></View>
            <View style={styles.cajaNaranja}></View>
            <Text style={styles.titulo}>Height : {height}</Text>
            <Text style={styles.titulo}>Width : {width}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cajaMorada : {
        marginVertical: 3,
        width: 100,
        height: 100,
        backgroundColor: '#4E9C81',
        borderColor: '#DFEAE2',
        borderWidth: 2,
        borderRadius: 10        
    },
    cajaNaranja : {
        marginVertical: 3,
        width: 100,
        height: 100,
        backgroundColor: '#8DC3A7',
        borderColor: '#DFEAE2',
        borderWidth: 2,
        borderRadius: 100

    },
    container : {
        flex:1,
        backgroundColor: '#6BAF92'
    },
    titulo : {
        fontSize: 20,       
        textAlign: 'center'
    }    
});
