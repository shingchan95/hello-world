import React from 'react';
import '../../styles/friendlist.css';
import { Link } from 'react-router-dom';

const FriendList = ({ users }) =>{
    if (!users) {
        return <h3>No Friends Yet</h3>;
      }
      return (
        <div className='friendlist'>
          <div className="justify-space-between my-4 pl-1">
            <div style={{borderBottom: "1px dotted"}} className="col-9" >
               <h3>Friend List</h3>
            </div>
            {users &&
              users.map((user, key) =>(     
                <div key={key} className="pt-2">
                <Link to={`/profiles/${user.username}`} >
                  <h5> {user.username}</h5>
                </Link> 
                </div>         
                ))}
            
          </div>
        </div>
      );


}

export default FriendList;