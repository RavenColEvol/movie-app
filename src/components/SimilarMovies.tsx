import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config'

import MovieCard from './MovieCard'
import Loader from './Loader';
import { IMovie } from './MovieDetail';
import { similarMovieOpts } from './api/options';

interface Props {
    movieId: string;
}

const SimilarMovies = ({movieId}: Props) => {
    const { data, refetch, isLoading } = useQuery(similarMovieOpts(movieId))

    useEffect(() => {
        refetch();
    }, [movieId, refetch])

    // const isEmpty = data.length === 0;

    return (
        <div className='grid row-auto grid-cols-12 md:col-gap-6 md:row-gap-3 lg:col-gap-12 lg:row-gap-4 md:mr-4 lg:mr-0'>
            { isLoading ?
                <Loader/> :
                data.map((movie:IMovie) => (
                    <MovieCard
                        id={movie.id}
                        key={movie.id}
                        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} 
                        title={movie.title} 
                        vote_average={movie.vote_average}
                        url={movie.id}
                    />
                ))
            }
        </div>
    )
}

export default SimilarMovies; 

