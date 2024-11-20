import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Styling/PrintAddress.css';

const PrintAddress = () => {
  const location = useLocation();
  const { address } = location.state;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className="print-page">
      <h1>Print Address</h1>
      <p>{address}</p>
    </div>
  );
};

export default PrintAddress;