import { useEffect, CSSProperties} from 'react'
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';

import SimilarMovies from './SimilarMovies'
import Title from './Title'

import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../config'
import { RouteComponentProps } from 'react-router'
import { fetchMovieById } from './hooks';

interface MatchParams {
    movie_id: string
}

interface Props extends RouteComponentProps<MatchParams> {
};

export interface IMovie {
    id: number;
    original_language: string;
    poster_path: string;
    backdrop_path: string;
    title: string;
    tagline: string;
    vote_average: number;
    runtime: number;
    status: boolean;
    overview: string;
    genres: { name: string }[]
}

export default function MovieDetail(props: Props) {
    const movie_id = props.match.params.movie_id;
    const { isLoading, data, refetch } = useQuery(['movie', movie_id], async () => await fetchMovieById(movie_id));

    useEffect(()=>{
        refetch();
    }, [movie_id])

    return (
        <>
        <Helmet>
            <title>{isLoading ? 'Loading...' : data.title}</title>
        </Helmet>
        { !isLoading && <div className='mx-auto max-w-screen-lg'>
            <div className="flex flex-col sm:flex-row">

                <div className='w-full sm:w-1/3 justify-start mb-4'>
                    <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.poster_path}`} 
                    className='shadow-lg rounded-lg md:w-64 w-48 md:block hidden' alt=""/>
                    <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.backdrop_path}`} 
                    className='shadow-lg rounded-lg md:hidden block' alt=""/>
                </div>

                <div className='w-full sm:w-2/3 lg:pr-20 lg:pl-4 md:pl-8 px-2 md:pr-12'>

                    <h1 className='md:text-4xl text-2xl text-gray-800 tracking-wide uppercase font-light'>{data.title}</h1>
                    <h2 className='text-gray-800 font-semibold mb-3 text-sm md:text-normal'>{data.tagline}</h2>
                    <div className='flex justify-between'>
                        <div className="stars mb-6" style={{"--rating":data.vote_average, "--star-size":'25px'} as CSSProperties}></div>
                        <p className='text-gray-600 font-bold text-xs uppercase'>{data.runtime}min / {data.status}</p>
                    </div>

                    <div className='mb-6'>
                        <p className='uppercase text-gray-800 text-xs font-bold tracking-wide mb-2'>The genre</p>
                        {data.genres.map((genre:{name:string}) => (
                            <button key={genre.name}
                            className='px-3 py-1 text-sm  mr-2 text-gray-800 font-semibold bg-gray-200 rounded-full '>{genre.name}</button>
                        ))}
                    </div>
                    <p className='uppercase text-gray-800 text-xs font-bold tracking-wide mb-2'>The synopsis</p>
                    <p className='text-sm text-gray-700'>{data.overview}</p>

                    <div className='mt-4'>
                        <button className='px-4 py-1 sm:text-sm sm:mr-2 mr-1 font-semibold border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-xs'>Website</button>
                        <button className='px-4 py-1 sm:text-sm sm:mr-2 mr-1 font-semibold border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-xs'>Imdb</button>
                        <button className='px-4 py-1 sm:text-sm sm:mr-2 mr-1 font-semibold border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-xs'>Trailer</button>
                        <button className='px-4 py-1 sm:text-sm sm:mr-2 mr-1 font-semibold border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white text-xs'>Back</button>
                    </div>
                    
                </div>
            </div>
            <Title>Recommended</Title>

            <SimilarMovies movieId={props.match.params.movie_id}/>
        </div>}
        </>
    )
}
