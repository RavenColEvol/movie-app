import React, { useRef } from 'react'
import notFound from '../assets/notFound.svg';
import {Link} from 'react-router-dom'

export default function MovieCard({src, title, vote_average, url}) {
    const ref = useRef(null);
    const loadingRef = useRef(null);

    const handleError = () => {
        ref.current.src = notFound;
        ref.current.style.width = '200px';
        ref.current.style.height = '300px';
    }

    const handleLoad = () => {
        loadingRef.current.classList.remove('card__img--loader');
    }
    
    return (
        <div 
            style={{'width':'12.5rem'}}
            className='card lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center mx-auto md:w-auto mb-8 rounded-lg  duration-300 ease-in-out text-gray-900 hover:shadow-xl transform hover:scale-105 hover:bg-gray-800 hover:text-white'>
            <Link to={`/${url}`}>    
                <div className='card__img--shadow card__img--loader' style={{'--data-url': `url(${src})` }} ref={loadingRef}>
                    <div className="overflow-hidden rounded-lg">
                        <img className='card__img' src={src} onLoad={handleLoad} onError={handleError} ref={ref}></img>
                    </div>
                </div>
                <h2 className='text-center mt-2 mb-1 font-semibold text-xs'>{title}</h2>
                <div className="stars mb-2" style={{"--rating":vote_average,}}>
                </div>
            </Link>
        </div>
    )
}
