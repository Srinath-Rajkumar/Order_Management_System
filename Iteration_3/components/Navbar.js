import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import './Styling/Navbar.css';
import ThemeToggle from './ThemeToogle';

const Navbar = ({ onLogout, role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('lastPath');
    onLogout();
    navigate('/');
  };
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      {role === 'admin' && <NavLink to="/create-order">Create Order</NavLink>}
      <NavLink to="/view-orders">View Orders</NavLink>
      {role === 'admin' && <NavLink to="/manage-customer">Manage Customer</NavLink>}
      
      {/* {role === 'admin' && <NavLink to="/manage-employees">Manage Employees</NavLink>} */}
      {/* {role === 'employee' && <NavLink to="/apply-leave">Apply Leave</NavLink>} */}
      <ThemeToggle />
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
