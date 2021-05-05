import { CSSProperties, useRef, MutableRefObject } from 'react'
import notFound from '../assets/notFound.svg';
import {Link} from 'react-router-dom'

interface Props {
    src: string;
    title: string;
    vote_average: number;
    id: number,
    url: number
};

export default function MovieCard(props:Props) {
    const {src, title, vote_average, id} = props;
    const ref = useRef() as MutableRefObject<HTMLImageElement>;
    const loadingRef = useRef<HTMLDivElement>(null);

    const handleError = () => {
        if(ref.current) {
            ref.current.src = notFound;
            ref.current.style.width = '200px';
            ref.current.style.height = '300px';
        }
    }

    const handleLoad = () => {
        if(loadingRef.current) 
            loadingRef.current.classList.remove('card__img--loader');
    }
    
    return (
        <div 
            style={{'width':'12.5rem'}}
            className='card lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center mx-auto md:w-auto mb-8 rounded-lg  duration-300 ease-in-out text-gray-900 hover:shadow-xl transform hover:scale-105 hover:bg-gray-800 hover:text-white'>
            <Link to={`/${id}`}>    
                <div className='card__img--shadow card__img--loader' style={{'--data-url': `url(${src})` } as CSSProperties} ref={loadingRef}>
                    <div className="overflow-hidden rounded-lg">
                        <img className='card__img' src={src} alt={title} onLoad={handleLoad} onError={handleError} ref={ref}></img>
                    </div>
                </div>
                <h2 className='text-center mt-2 mb-1 font-semibold text-xs'>{title}</h2>
                <div className="stars mb-2" style={{"--rating":vote_average} as CSSProperties}>
                </div>
            </Link>
        </div>
    )
}
