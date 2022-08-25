import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation  } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations'
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import FriendList from '../components/FriendList';


const Profile = () => {
  const { username: userParam } = useParams();
  
  const [addFriend, { error}] = useMutation(ADD_FRIEND);
  const {  data, loading, refetch  } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = data?.me || data?.user || {};
  const userId = user._id
  const userFriend = user.friends
  const [friendlist, setFriendList]= useState()
  const [filteredName, setFilteredName]= useState()
  const profileName= Auth.getProfile().data.username

  useEffect(() => {
    handleFriendlist();
    refetch()
  },[data])

  useEffect(() => {
    handleFilter();
  },[data])
 
  const handleFriendlist =() =>{
    setFriendList(userFriend)
  }
  
  const profileFriend= user.friends || []

  const filterName= Auth.getProfile().data.username

  console.log(profileFriend)
  console.log(filterName)


  
  const handleFilter = () => {
  
    const filtered = profileFriend.filter(profileFriends => {
        return profileFriends.username === filterName
      })
      if(filtered.length ===0){
        setFilteredName("")
      }else{
        setFilteredName(filtered);
      }
      console.log(filteredName)
    }


  const handleAddFriend = async () => {
    if (!token) {
      return false;
    }
    try {
      const { data } = await addFriend({
        variables: {userId}
      });
      refetch()
      // user.friends.push(data)
    } catch (e) {
      console.error(e);
    }
  }
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
    
  }
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <div>
          <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
            {`${user.username}'s`} profile.
          </h2>
      </div>
      {Auth.getProfile().data.username !== user.username && (
      <div>

        <div>

        {filteredName.length===0 ? 
         <div>
            <button className="btn btn-lg btn-light m-2" onClick={()=>{handleAddFriend();handleFilter()}}>
                Connect User
            </button>
        </div>
        :
        <div> 
            <button className="btn btn-lg btn-light m-2">
                    Connected
            </button>
        </div>  
        
        }
        
        </div>
        
        
       
      </div>
      )}
      
      <div>
        <FriendList users={friendlist} />
      </div>
      
      <div>
        Contact Email: {user.email}
      </div>
      {Auth.getProfile().data.username === user.username && (
        <div>
          <PostForm />
        </div>
        )}

      <div className="col-12 col-md-10 mb-5">
        <PostList
          posts={user.posts}
          title={`${user.username}'s posts...`}
          username={user.username}
          showTitle={false}
          showUsername={false}
        />
      </div>
    </>
  );
};

export default Profile;
