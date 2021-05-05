import { useState, useEffect } from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE, API_URL, API_KEY} from '../config'

import MovieCard from './MovieCard'
import { IMovie } from './MovieDetail';

interface Props {
    movieId: string;
}

const SimilarMovies = ({movieId}: Props) => {
    const [state, setState] = useState({
        movies: [] as IMovie[]
    });

    useEffect(() => {
        let endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
        const fetchItems = (endpoint:string) => {
            fetch(endpoint)
            .then(res => res.json())
            .then(res => setState(state => ({
                ...state,
                movies:res.results
            })));
        }
        fetchItems(endpoint);
    }, [movieId])

    return (
        <div className='grid row-auto grid-cols-12 md:col-gap-6 md:row-gap-3 lg:col-gap-12 lg:row-gap-4 md:mr-4 lg:mr-0'>
            {state.movies.map((movie) => (
                <MovieCard
                    id={movie.id}
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

