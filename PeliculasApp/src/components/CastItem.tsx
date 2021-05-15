import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/movieInterface'

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image source={{ uri }} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10
                    }} />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
                <Text style={{ fontSize: 16, opacity: 0.7, fontWeight: 'bold' }}>{actor.character}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 20,
        paddingRight: 15,
        paddingTop: 5,
        height:60,
        marginHorizontal: 20
    },
    actorInfo: {
        marginLeft: 10,
    }
});
