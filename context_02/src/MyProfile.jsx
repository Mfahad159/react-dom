import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContextProvider';



function MyProfile() {

    const value= useContext(UserContext);

  if(!value)
  {
    return <div>Please login to view your profile.</div>;
  }
  else
  {
    return (
      <div className='profile'>
        <h2>My Profile</h2>
        <p>Username: {value.username}</p>
        <p>Password: {value.password}</p>
      </div>
    );  
  }
 }

 export default MyProfile;