import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function signUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }


  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    // <div className="container">
    
    <div className="container">
      <div>
        <h2>Login</h2>
        <div>
          <input className="login-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
        </div>
        <div>
          <input className="login-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        </div>  
        <div className="login-controls">
          <button className="secondary" onClick={signUp}>Create Account</button>
          <button onClick={login}>Sign In</button>
        </div>
        <p>{error}</p>
      </div>
    </div>
    
  )
}