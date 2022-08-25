import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import PostForm from '../components/PostForm';
import HomePostList from '../components/HomePostList';

import {QUERY_ME } from '../utils/queries';


const Home = () => {
  
  
  const { loading, data } = useQuery(QUERY_ME);
  // const [postArray, setPostArray]= useState([])
  
  const [friendArray, setFriendArray]= useState()
  const user = data?.me || {};
  const friendlist = user.friends

  useEffect(() => {
    handleFilter(friendlist, user);
  }, [friendlist])

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
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
       <PostForm />
        <div className="col-12 col-md-10 mb-5">
          <HomePostList
            data={friendArray}
            showTitle={false}
            showUsername={false}
          />
        </div>
    </div>
  );
};

export default Home;
