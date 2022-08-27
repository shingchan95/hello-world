import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar'
import Auth from '../../utils/auth';
import logo from '../../images/hello-world logo.JPG'
import '../../styles/header.css'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="mb-4 flex-row align-center" style={{backgroundColor: "lightgrey"}}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <img src={logo} alt="Logo" style={{maxWidth: "300px"}}/>
            {/* <h1 className="m-0">Hello World</h1> */}
          </Link>
        </div>
        <div className='header-container'> 
          {Auth.loggedIn() ? (
            <>
            <div className='searchbar'>
            <SearchBar/>
            </div>
            
            <div>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <Link to="/" />
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </div>
            </>
          ) : (
            <>
            <div>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
