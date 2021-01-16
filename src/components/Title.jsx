import React from 'react'

export default function Title(props) {
    return (
        <h1 className='lg:text-3xl md:text-2xl text-xl font-bold text-gray-900 lg:mb-8 mb-6'>
            {props.children}
        </h1>
    )
}
