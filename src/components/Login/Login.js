import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginPasskey = process.env.REACT_APP_LOGIN_PASSKEY;
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required');
      return;
    }


    try {
      const userPasskey = window.prompt('Enter Passkey');

      if (userPasskey === loginPasskey) {
        await axios.post('http://localhost:5000/auth/login', { email, password });
        navigate('/login9874Notes/dashboard');
      } else {
        setError('Invalid passkey');
        window.alert('Invalid Passkey');
        navigate('/login9874Notes');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container1">
      <div className="form-container1">
        <h2>Login</h2>
        
        <form onSubmit={handleLogin}>
          <div className="form-field1">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field1">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p style={{ color: 'crimson' }}>{error}</p>}
          <div className="form-field1">
            <button className='Login-submit' type="submit">Login</button>
          </div>
        </form>
        <p className="form-link1">Don't have an account? <a href="/signup9875">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
