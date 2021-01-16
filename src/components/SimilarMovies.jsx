import React, { useState, useEffect } from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE, API_URL, API_KEY} from '../config'

import MovieCard from './MovieCard'

const SimilarMovies = ({movieId}) => {
    const [state, setState] = useState({
        movies: []
    });

    const fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(res => res.json())
        .then(res => setState({
            ...state,
            movies:res.results
        }));
    }

    useEffect(() => {
        let endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
        fetchItems(endpoint);
    }, [movieId])

    return (
        <div className='grid row-auto grid-cols-12 md:col-gap-6 md:row-gap-3 lg:col-gap-12 lg:row-gap-4 md:mr-4 lg:mr-0'>
            {state.movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} 
                    title={movie.title} 
                    vote_average={movie.vote_average}
                    url={movie.id}
                />
            ))}
        </div>
    )
}

export default SimilarMovies; 

