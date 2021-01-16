import React from 'react'

import Title from './Title'
import Search from './Search'
import Result from './Result'


export default class extends React.Component {
    
    state = {
        title: "Popular Movies",
        query: ''
    }

    handleSearch = (query) => {
        this.setState({query});
    }

    render() {

        const { query, title } = this.state;

        return(
            <>
                <Title>Explore</Title>
                <Search className='md:mb-6 lg:mb-8 mb-4' handleSearch={this.handleSearch}/>
                <Title>{title} {new Date().getFullYear()}</Title>
                <Result query={query}/>
            </>
        )
    }
}