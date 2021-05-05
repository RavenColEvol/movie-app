import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {IMAGE_BASE_URL, POSTER_SIZE, API_URL, API_KEY} from '../config'

import MovieCard from './MovieCard';
import Loader from './Loader';
import { IMovie } from './MovieDetail';


interface Props {
    query: string
};

function Result({query}: Props) {
    const [state, setState] = useState({
        movies: [],
        page: 1,
        totalPages: 1,
        totalResults: Infinity
    });

    const fetchItems = (endpoint: string, addPage = false) => {
        fetch(endpoint)
        .then(res => res.json())
        .then(res => setState( state =>({
            ...state,
            movies: addPage ? [...state.movies, ...res.results] : res.results,
            page: addPage ? state.page + 1 : 1,
            totalPages: res.total_pages,
            totalResults: res.total_results
        })));
    }

    const fetchMoreItems = () => {
        let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${state.page + 1}`;
        if(query !== '')
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${state.page + 1}`;
        setTimeout(() => fetchItems(endpoint, true), 1500);
    }

    useEffect(() => {
        let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${state.page}`;
        if(query !== '')
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${state.page}`;
        fetchItems(endpoint);
    }, [query, state.page]);

    return (
        <InfiniteScroll 
            dataLength={state.movies.length}
            next={fetchMoreItems}
            hasMore={state.page < state.totalPages}
            loader={<Loader/>}
            style={{overflow: 'inherit'}}
            className='grid row-auto grid-cols-12 md:col-gap-6 md:row-gap-3 lg:col-gap-12 lg:row-gap-4 md:mr-4 lg:mr-0'>
                {state.movies.map((movie:IMovie) => (
                    <MovieCard
                        key={movie.id}
                        src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} 
                        title={movie.title} 
                        vote_average={movie.vote_average}
                        id={movie.id}
                        url={movie.id}
                    />
                ))}
        </InfiniteScroll>
    )
}

export default Result; 

