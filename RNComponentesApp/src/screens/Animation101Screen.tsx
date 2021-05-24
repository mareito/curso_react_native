import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'


export const Animation101Screen = () => {

    const {startMovingPosition, position, opacity, fadeIn, fadeOut} = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                transform: [{
                    translateY: position
                }],             
                }} />

             <View style={{                 
                 flexDirection: 'row',            
                 margin: 20,
                 width: 200,
                 justifyContent:'space-between'                 
             }}>
                <Button title="FadeIn" onPress={() => {fadeIn(); startMovingPosition(100)} } />
                <Button title="FadeOut" onPress={fadeOut} />
             </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox : {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
