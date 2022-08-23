import React from 'react';

const FriendList = ({ users }) =>{

    if (!users.length) {
        return <h3>No Friends Yet</h3>;
      }
      return (
        <div>
               <h3>Friend List</h3>
          <div className="justify-space-between my-4">

            {users &&
              users.map((user, key) =>(                
                  <p> {user.username}</p>
                  ))}
            
          </div>
        </div>
      );


}

export default FriendList;