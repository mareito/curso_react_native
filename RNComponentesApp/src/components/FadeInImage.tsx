import React from 'react'
import { useState } from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation'
import { styles } from '../theme/AppTheme';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}


export const FadeInImage = ({ uri, style }: Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                isLoading && <ActivityIndicator style={{position : 'absolute'}} color="#5856D6" size={30} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any
                }}
                //style={{
                //    width: '100%',
                //    height: 400,
                //    opacity
                //}}
            >
            </Animated.Image>
        </View>
    )
}
