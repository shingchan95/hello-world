import React, { useState } from 'react';
import { QUERY_ALL_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import '../../styles/searchbar.css';

const SearchBar = () =>{

    const { loading, data } = useQuery(QUERY_ALL_USER)
    const users = data?.users || [];
    const [filteredData, setFilteredData]= useState([])
    
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = users.filter((value)=> {
            return value.username.toLowerCase().includes(searchWord.toLowerCase());
        });
        console.log(newFilter)
        console.log(searchWord)

        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
    }
    

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder="search for friend" onChange={handleFilter} />
                <div className= "searchIcon" >     
                    <SearchIcon />
                </div>
            </div>
                {filteredData.length !== 0 && (
                    <div className='dataResult'>
                        {filteredData.slice(0, 15).map((value, key) => {           
                            return (
                                <Link className="dataItem" key={key} to={`/profiles/${value.username}` }>
                        <p>{value.username}</p>
                        </Link>
                        )
                        })}
                    </div>
                )}
        </div>
    )
}

export default SearchBar