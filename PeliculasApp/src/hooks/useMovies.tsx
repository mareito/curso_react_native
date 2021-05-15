import React, { useEffect, useState } from 'react'
import movieDb from '../api/movieDb';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []

    })


    const getMovies = async () => {
        setisLoading(true);
        const nowPlayingPromise = movieDb.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise = movieDb.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = movieDb.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise = movieDb.get<MovieDBMoviesResponse>('/upcoming');
        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })
        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState, isLoading
    }
}


