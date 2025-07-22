import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContextProvider';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     const setUser= useContext(UserContext);

function HandleSubmit(event) {
  event.preventDefault();
  setUser({username, password});
}
  return (
    <div className='main'>
          <h2 className='title'>Login Page</h2>
          <input type="text" name="username" placeholder='Username'
          onChange={(e)=>{
            setUsername(e.target.value);
              }}
          />
          <input type="password" name="password" placeholder='Password'
           onChange={(e)=>{
            setPassword(e.target.value);
              }} />
        <button onClick={HandleSubmit} type="submit">Login</button>
    </div>
  );
}