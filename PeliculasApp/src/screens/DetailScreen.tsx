import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigation/Navitagion';
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import movieDb from '../api/movieDb';


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

}

const screenHeigth = Dimensions.get('screen').height

export const DetailScreen = ({ route, navigation }: Props) => {


    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    console.log(movie.id);

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);
    console.log(isLoading);

    return (
        <ScrollView>

            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{ uri }} style={styles.posterImage} />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            {
                isLoading ?
                    <ActivityIndicator size={35} color='grey' style={{ marginVertical: 20 }} /> :
                    <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <TouchableOpacity style={{
                position: 'absolute',
                zIndex: 999,
                elevation: 10,
                top: 15,
                left: 15,
            }} onPress={() => navigation.goBack()}>
                <Icon
                    color='white'
                    name="arrow-back-outline"
                    size={60}
                    style={styles.backButton}
                />
            </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: screenHeigth * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {

        backgroundColor: 'black',
        opacity: 0.6,
        borderRadius: 100
    }

});
