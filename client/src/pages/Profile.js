import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation  } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations'
import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};
  const userId = user._id

  
  const [addFriend, { error}] = useMutation(ADD_FRIEND);

  const handleAddFriend = async () => {
    
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    
    try {
      const { data } = await addFriend({
        variables: { userId}
      });
      console.log(data)
    } catch (e) {
      console.error(e);
    }
  }

  console.log(userId)

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
      <div>
        <h3>Friend List</h3>
        {user.friends.map((value, key)=> {
          return <p> {value.username}</p>
        })
        }  
      </div>
      <div>
        Email: {user.email}
      </div>

      {Auth.getProfile().data.username !== user.username && (
        <div>
          <button className="btn btn-lg btn-light m-2" onClick={handleAddFriend}>
          Add User
          </button>
        </div>
      )}
    </>
        
  );
};

export default Profile;
