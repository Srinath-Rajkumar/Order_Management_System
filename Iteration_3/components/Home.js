// src/components/CreateOrder.js
import React from 'react';
import './Styling/theme.css';
import './Styling/global.css';
import './Styling/home.css'; 
import Footer from './Footer';


const Home = ({ userName }) => {
  return (
    <>
    <div className="home">
      <header>
        <h1>Welcome, {userName}!</h1>
      </header>
      <main className="home-container">
        <h2>we are working on this page.</h2>
      </main>
     
    </div>
    <Footer/>
    </>
  );
};

export default Home;