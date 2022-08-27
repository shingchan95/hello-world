import React, { useState } from 'react';
import { QUERY_ALL_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@material-ui/icons/Close";
import { Link } from 'react-router-dom';
import '../../styles/searchbar.css';

const SearchBar = () =>{

    const { loading, data } = useQuery(QUERY_ALL_USER)
    const users = data?.users || [];
    const [filteredData, setFilteredData]= useState([])
    const [wordEntered, setWordEntered] = useState("");
    
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = users.filter((value)=> {
            return value.username.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }

    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      };
    

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder="search for friend" onChange={handleFilter} />
                <div className= "searchIcon" >     
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
                {filteredData.length !== 0 && (
                    <div className='dataResult'>
                        {filteredData.slice(0, 15).map((value, key) => {           
                            return (
                                <Link className="dataItem" key={key} to={`/profiles/${value.username}`} onClick={clearInput}>
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