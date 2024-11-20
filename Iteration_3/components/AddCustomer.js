import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling/addCustomer.css'; // You'll need to create this CSS file
import Footer from './Footer';

const AddCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:4000/customers');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);
  const handlePrintAddress = (address) => {
    navigate('/print-address', { state: { address } });
  }

  const handleEditDetails = (customerId) => {
    navigate(`/edit-customer/${customerId}`);
  };
  return (
    <>
    <div className="customer-page">
      <h1>Customer Details</h1>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>
              <td>{customer.name}</td>
              <td>{customer.phoneNumber}</td>
              <td>
                {`${customer.addressLine1}, ${customer.addressLine2}, ${customer.city}, ${customer.pincode}`}
              </td>
              <td>
                <button onClick={() => handlePrintAddress(`${customer.addressLine1}, ${customer.addressLine2}, ${customer.city}, ${customer.pincode}`)}>
                  Print Address
                </button>
                <button onClick={() => handleEditDetails(customer.customerId)}>
                  Edit Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <Footer />
    </>
  );
};

export default AddCustomer;
