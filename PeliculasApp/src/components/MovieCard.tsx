import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

interface Props {
    movie: Movie;
    height?: number;
    width?: number
}

export const MovieCard = ({ movie, height = 450, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('DetailScreen', movie)}>
            <View style={{ 
                paddingBottom : 20,
                paddingHorizontal: 7,
                width, 
                height, 
                marginHorizontal: 2 }}>
                <View style={styles.card}>
                    <Image source={{ uri }} style={styles.imagen} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        borderRadius: 18
    },
    card: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
    }

});
