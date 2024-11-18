import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import './Styling/Login.css';
import logo from './Assets/pb.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   // Add logic to handle login (e.g., authentication with backend)
  //   if (email === 'admin@pb.com' && password === 'Test@123') { // Example authentication
  //     onLogin(true);
  //     const from = location.state?.from?.pathname || "/home";
  //     navigate(from, { replace: true }); 
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // };
  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic to handle login (e.g., authentication with backend)
    if (email === 'admin@pb.com' && password === 'Test@123') { // Example authentication
      onLogin(true, 'admin');
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } else if (email === 'employee@pb.com' && password === 'Test@123') { // Example employee authentication
      onLogin(true, 'employee');
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } else {
      alert('Invalid credentials');
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




