import React, { useState, useEffect } from 'react';
// import './Styling/ThemeToogle.css';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        // On component mount, set the theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
    );
};

export default ThemeToggle;


// useEffect(() => {
//     // Check system preference on initial load
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
//     setIsDarkMode(savedTheme === 'dark');
//     document.documentElement.setAttribute('data-theme', savedTheme);
// }, []);

{/* <button 
    className="theme-toggle"
    onClick={toggleTheme}
    aria-label="Toggle dark mode"
    title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
>
    {isDarkMode ? '🌞' : '🌙'}
</button> */}

// :root {
//     /* Add these to your existing theme.css */
//     --hover-color: #4fafdf;
//     --shadow-color: rgba(0, 0, 0, 0.2);
//     --success-color: #4CAF50;
//     --error-color: #f44336;
//   }
  
//   [data-theme="dark"] {
//     /* Dark theme equivalents */
//     --hover-color: #2d8cb7;
//     --shadow-color: rgba(0, 0, 0, 0.4);
//     --success-color: #45a049;
//     --error-color: #d32f2f;
//   }
  
