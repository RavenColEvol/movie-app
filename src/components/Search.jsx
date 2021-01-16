import React, { useState } from 'react'


export default ({handleSearch, ...props}) => {
    const [query, setQuery] = useState('');
    const handleChange = (e) => setQuery(e.target.value);
    const handleSubmit = (e) => {
        handleSearch(query);
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter') handleSubmit();
    }
    return (
        <div className='flex items-start'>
            <input placeholder='Find Movies, TV shows, Celebrities and more ...'
            value={query}
            onKeyUp={handleEnter}
            onChange={handleChange}
            className={'md:text-xl text-normal bg-gray-300 rounded-lg md:py-3 md:px-6 py-2 px-3 focus:outline-none w-full font-semibold text-gray-800 ' + props.className} 
            />
            <button onClick={handleSubmit} className='ml-2 rounded bg-gray-800 text-white uppercase md:text-xl text-normal tracking-wide font-semibold md:py-3 md:px-6 py-2 px-3'>Search</button>
        </div>
    )
}