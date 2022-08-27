import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import PostForm from '../components/PostForm';
import HomePostList from '../components/HomePostList';
import WelcomePage from '../components/WelcomePage';

import {QUERY_ME } from '../utils/queries';
import '../styles/home.css';

const Home = () => {
  
  
  const { loading, data, refetch } = useQuery(QUERY_ME);
  // const [postArray, setPostArray]= useState([])
  
  const [friendArray, setFriendArray]= useState()
  const user = data?.me || {};
  const friendlist = user.friends

  useEffect(() => {
    handleFilter(friendlist, user);
  }, [friendlist])

  useEffect(()=>{
    refetch()
  },[data])

  const handleFilter =(friendlist,user) =>{
    setFriendArray(friendlist)
    
    if(friendlist){
      setFriendArray(current => [...current, user])
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <WelcomePage />
    );
  }

  return (
    <div className='homePost'>
      <div className='postForm'>
       <PostForm />
      </div>
        <div>
          <HomePostList
            data={friendArray}
            showTitle={false}
           />
        </div>
    </div>
  );
};

export default Home;
