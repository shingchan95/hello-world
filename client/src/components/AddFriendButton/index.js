
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation  } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';

const AddFriendButton = () => {
    const { username: userParam } = useParams();
    const [addFriend, { error}] = useMutation(ADD_FRIEND);
    const { loading, dataUser} = useQuery(QUERY_USER, 
        {
        variables: { username: userParam },
        });
        const user = dataUser?.user || {};
        const userId = user._id
  
        console.log(user)

    const handleAddFriend = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
      
          if (!token) {
            return false;
          }
        
          try {
            const { data } = await addFriend({
              variables: {userId}
            });
            // user.friends.push(data)
          } catch (e) {
            console.error(e);
          }
        }
        // navigate to personal profile page if username is yours
 

    return (
        <div>
            {Auth.getProfile().data.username !== user.username && (
            <div>
                <button className="btn btn-lg btn-light m-2" onClick={handleAddFriend}>
                    Connect User
                </button>
            </div>
            )}
        </div>
    )
}

export default AddFriendButton