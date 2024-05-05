import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, MINI_SIZE } from '../config'
import { fetchByCategory } from './hooks';
import { IMovie } from './MovieDetail';

interface Props {
    category: string;
    title: string;
    open: boolean;
}

export default function SideBarItem({category, title, open: isOpen}: Props) {
    const [open, setOpen] = useState(isOpen);
    const handleToggle = () => setOpen(!open)

    const { data, isLoading } = useQuery(category, () => fetchByCategory(category));
    
    return (
        isLoading ? <p>Loading</p> : <>
            <p className='text-white font-bold py-4 px-4 text-xs tracking-wide uppercase cursor-pointer duration-100' onClick={handleToggle}>{title}</p>
            <div className={` ${open ? 'block' : 'hidden'} transform bg-gray-800 px-4 py-4 rounded-xl font-semibold text-sm duration-100`}>
                {data.map((movie:IMovie) => (
                    <Link key={movie.id} to={`/${movie.id}`}>
                        <div className=" flex mb-4"  style={{cursor: 'pointer'}}>
                            <div className='overflow-hidden w-12 h-12 bg-cover rounded-lg w-2/12'>
                                <img className='' src={`${IMAGE_BASE_URL}${MINI_SIZE}${movie.poster_path}`} alt="" />
                            </div>
                            <div className='flex justify-between w-10/12 px-4 items-center'>
                                <div>
                                    <h2 className='text-gray-200'>
                                        {movie.title}
                                    </h2>
                                    <span className='captialize text-gray-300'>
                                        {movie.original_language}
                                    </span>
                                </div>
                                <p className='text-yellow-400'>
                                    {movie.vote_average}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </>
    )
}