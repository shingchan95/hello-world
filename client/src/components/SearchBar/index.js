import React from 'react';
import {QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const SearchBar = (placeholder) =>{

 const { loading, data } = useQuery(QUERY_USER)
 console.log(data)

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder={placeholder}/>
                <div className= "searchIcon"></div>
            </div>
            <div className='dataResult'></div>
        </div>
    )
}

export default SearchBar