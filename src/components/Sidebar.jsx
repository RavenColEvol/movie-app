import React from 'react'

import { API_URL, API_KEY } from '../config'
import SidebarItem from './SidebarItem'

const openingThisWeek = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const nowPlayingUrl = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
const topRatedUrl = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const aroundTheWebUrl = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export default function() {

    return (
        <>
            <div
                className='rounded-xl m-2 overflow-hidden'
            >
                <img 
                src="http://image.tmdb.org/t/p/w1280/5BwqwxMEjeFtdknRV792Svo0K1v.jpg" 
                alt=""
                className='w-full'
                />
            </div>

            <SidebarItem key='Opening this week' type='Opening this week' url={openingThisWeek}/>
            <SidebarItem key='Now playing' type='Now playing' url={nowPlayingUrl}/>
            <SidebarItem key='Top Rated' type='Top Rated' url={topRatedUrl}/>
            <SidebarItem key='Around the web' type='Around the web' url={aroundTheWebUrl}/>
        </>
    )
}