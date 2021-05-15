import { useEffect, useState } from "react"
import movieDb from "../api/movieDb";
import { Cast, CreditsResponse, MovieFull } from "../interfaces/movieInterface";


interface MovieDetails {
    cast: Cast[],
    isLoading: boolean
    movieFull?: MovieFull
}

export const useMovieDetails = (movieId: number ) => {    

    const [state, setState] = useState<MovieDetails>({
        isLoading:true,
        movieFull: undefined,
        cast: []
    });    

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDb.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`);
        const [movieDetailsResponse, castReponse]  = await Promise.all([movieDetailsPromise,castPromise]);
        setState({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castReponse.data.cast
        })
    }

    useEffect(() => {   
        getMovieDetails()   
    }, [])


    return {
        ...state
    }
}

