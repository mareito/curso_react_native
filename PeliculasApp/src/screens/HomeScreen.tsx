import React from 'react'
import { FlatList, ScrollView, useWindowDimensions } from 'react-native';
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies'

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const dimensions = useWindowDimensions();
    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',

            }}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }   

    return (
        <ScrollView >
            <View style={{
                marginTop: top + 20
            }}>
                <View style={{
                    height: 470,
                    marginBottom: 10
                    
                }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MovieCard movie={item} />}
                        sliderWidth={dimensions.width}
                        inactiveSlideOpacity={0.9}
                        itemWidth={300} />
                </View>

                <HorizontalSlider title='Populares' movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />                
                <HorizontalSlider title="Upcoming" movies={upcoming} />                
            </View>            
        </ScrollView>
    )
}
