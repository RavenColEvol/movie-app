import { useState } from 'react';

import Title from './Title'
import Search from './Search'
import Result from './Result'


const Home = () => {
    const [state, setState] = useState({
        title: 'Popular Movies',
        query: ''
    })
    const { query, title } = state;

    const handleSearch = (query:string) => {
        setState(state => ({...state, query}));
    }

    return (
        <>
            <Title>Explore</Title>
            <Search className='md:mb-6 lg:mb-8 mb-4' handleSearch={handleSearch}/>
            <Title>{title} {new Date().getFullYear()}</Title>
            <Result query={query}/>
        </>
    )
}

export default Home;