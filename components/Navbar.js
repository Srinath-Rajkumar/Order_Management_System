import React from 'react';
import { Link,useNavigate ,NavLink  } from 'react-router-dom';
import './Styling/Navbar.css';
import ThemeToggle from './ThemeToogle';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('lastPath');
    onLogout();
    navigate('/');
  };
  return (
    <nav>
      
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/add-customer">Add Customer</NavLink>
      <NavLink to="/create-order">Create Order</NavLink>
      <NavLink to="/view-orders">View Orders</NavLink>
      <ThemeToggle/>
      <button onClick={handleLogout}>Logout</button>
      
    </nav>
  );
};

export default Navbar;
