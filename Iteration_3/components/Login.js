import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Styling/Login.css';
import logo from './Assets/pb.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/employees');
      const users = await response.json();
      const user = users.find((user) => user.email === email && user.number === password);
      
      if (user) {
        onLogin(true, user.role, user.name); // Pass the user's role and name
        const from = location.state?.from?.pathname || "/home";
        navigate(from, { replace: true });
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} alt="Printing Brothers Logo" className="logo" />
          <h1>ORDER MANAGEMENT SYSTEM</h1>
        </div>
      </header>
      <main className="main">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">User ID</label>
              <input 
              type="email" 
              placeholder="Email" 
              id="email"value={email} 
              name="email" 
              onChange={(e) => setEmail(e.target.value)}
              required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" 
              value={password}placeholder="PhoneNumber"
              id="password" 
              name="password" 
              onChange={(e) => setPassword(e.target.value)}
              required />
            </div>
            <div className="button-group">
              <button onClick={handleLogin}className="login-button">LOGIN</button>
              {/* <button type="submit" className="login-button">LOGIN</button> */}
              <button type="button" className="signup-button">SIGNUP</button>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </form>
        </div>
      </main>
      <footer>
        <p>© 2024 Printing Brothers, Inc. All rights reserved</p>
      </footer>
    </div>
  );


};

export default Login;




