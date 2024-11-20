// src/components/CreateOrder.js
import React, { useState } from 'react';
import './Styling/CreateOrder.css';
import Footer from './Footer';


const generateOrderId = async () => {
  try {
    const response = await fetch('http://localhost:4000/orders');
    const orders = await response.json();
    const lastOrder = orders[orders.length - 1];
    
    if (!lastOrder || !lastOrder.id) {
      return { id: '01', orderId: '00010' }; // Starting IDs
    }
    
    const lastId = parseInt(lastOrder.id, 10);
    const newId = (lastId + 1).toString().padStart(2, '0');
    
    const lastOrderId = parseInt(lastOrder.orderId, 10);
    const newOrderId = (lastOrderId + 1).toString().padStart(5, '0');
    
    return { id: newId, orderId: newOrderId };
  } catch (error) {
    console.error('Error generating order ID:', error);
    return null;
  }
};
const generateCustomerId = async () => {
  try {
    const response = await fetch('http://localhost:4000/customers');
    const customers = await response.json();
    const lastCustomer = customers[customers.length - 1];
    
    if (!lastCustomer || !lastCustomer.id) {
      return { id: '01', customerId: '00100' }; // Starting IDs
    }
    
    const lastId = parseInt(lastCustomer.id, 10);
    const newId = (lastId + 1).toString().padStart(2, '0');
    
    const lastCustomerId = parseInt(lastCustomer.customerId, 10);
    const newCustomerId = (lastCustomerId + 1).toString().padStart(5, '0');
    
    return { id: newId, customerId: newCustomerId };
  } catch (error) {
    console.error('Error generating customer ID:', error);
    return null;
  }
};

const CreateOrder = () => {
  const [customerType, setCustomerType] = useState('new'); // 'new' or 'old'
  const [searchInput, setSearchInput] = useState('');
  
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: '',
    description: '',
    manufacturingType: 'fdm',
    rawMaterialType: '',
    quantity:'',
    size:'',
    email: '',
    cost: '',
    lastDate: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleManufacturingTypeChange = (e) => {
    setFormData({
      ...formData,
      manufacturingType: e.target.value,
      rawMaterialType: '',
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleBlur = () => {
    const { customerName, phoneNumber, addressLine1, addressLine2, pincode, city, description, manufacturingType, rawMaterialType, quantity, size, cost, lastDate } = formData;
    const isValid = customerName && phoneNumber && addressLine1 && addressLine2 && pincode && city && description && manufacturingType && rawMaterialType && quantity && cost && lastDate;
    setIsFormValid(isValid);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // First, check if customer already exists
        const customerResponse = await fetch(`http://localhost:4000/customers?phoneNumber=${formData.phoneNumber}`);
        const existingCustomers = await customerResponse.json();
        
        let customerId, customerRecordId;
        
        if (existingCustomers.length === 0) {
          // Create new customer if doesn't exist
          const customerIds = await generateCustomerId();
          customerId = customerIds.customerId;
          customerRecordId = customerIds.id;
          const newCustomer = {
            id: customerRecordId,
            customerId: customerId,
            name: formData.customerName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            pincode: formData.pincode,
            city: formData.city
          };
          
          await fetch('http://localhost:4000/customers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCustomer)
          });
        } else {
          customerId = existingCustomers[0].customerId;
          customerRecordId = existingCustomers[0].id;
        }
        
        // Generate new order ID
        const orderIds = await generateOrderId();
        const orderId = orderIds.orderId;
        const orderRecordId = orderIds.id;
        
        // Create new order
        const newOrder = {
          id: orderRecordId,
          orderId: orderId,
          customerId: customerId,
          orderDate: new Date().toISOString(),
          quantity: formData.quantity,
          size: formData.size,
          price: formData.cost,
          lastDate: formData.lastDate,
          status: 'new_order',
          // Add any other order fields you need
        };
        
        // Save order to database
        const orderResponse = await fetch('http://localhost:4000/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrder)
        });
        
        if (orderResponse.ok) {
          // Handle success (e.g., show success message, reset form)
          alert('Order created successfully!');
          resetForm();
        } else {
          throw new Error('Failed to create order');
        }
        
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error creating order. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors);
    }
  };
  const validateForm = () => {
    const errors = {};
    
    if (!formData.customerName) errors.customerName = 'Name is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone is required';
    if (!formData.quantity || formData.quantity < 1) errors.quantity = 'Valid quantity is required';
    if (!formData.size) errors.size = 'Size is required';
    
    return errors;
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: '',
      pincode: '',
      city: '',
      description: '',
      manufacturingType: 'fdm',
      rawMaterialType: '',
      quantity:'',
      size:'',
      email: '',
      cost: '',
      lastDate: ''
    });
    setErrors({});
    setIsFormValid(false);
  };

  const handleCustomerTypeChange = (type) => {
    setCustomerType(type);
    resetForm();
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:4000/customers?phoneNumber=${searchInput}`);
      const customer = await response.json();
      if (customer.length) {
        const foundCustomer = customer[0];
        setFormData({
          customerName: foundCustomer.name,
          phoneNumber: foundCustomer.phoneNumber,
          addressLine1: foundCustomer.addressLine1,
          addressLine2: foundCustomer.addressLine2,
          pincode: foundCustomer.pincode,
          city: foundCustomer.city,
          email: foundCustomer.email,
          description: '',
          manufacturingType: 'fdm',
          rawMaterialType: '',
          quantity: '',
          size: '',
          cost: '',
          lastDate: ''
        });
      } else {
        alert('Customer not found');
      }
    } catch (error) {
      console.error('Error searching for customer:', error);
      alert('Error searching for customer. Please try again.');
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setFormData({
      ...formData,
      quantity: value
    });
  };


  return (
    <>
      <div className="create-order-container">
        {/* <h2>Create Order</h2> */}
        <div className="customer-type-toggle">
          <button className={customerType === 'new' ? 'active' : ''} onClick={() => handleCustomerTypeChange('new')}>New Customer</button>
          <button className={customerType === 'old' ? 'active' : ''} onClick={() => handleCustomerTypeChange('old')}>Old Customer</button>
        </div>
        {customerType === 'old' && (
          <div className="search-customer">
            <label htmlFor="searchInput">Enter Phone Number or Customer ID</label>
            <input
              type="text"
              id="searchInput"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        )}
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="create-order-card">
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine1">Address Line 1</label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine2">Address Line 2</label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="create-order-card">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Manufacturing Type</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="manufacturingType"
                    value="fdm"
                    checked={formData.manufacturingType === 'fdm'}
                    onChange={handleManufacturingTypeChange}
                  /> FDM
                </label>
                <label>
                  <input
                    type="radio"
                    name="manufacturingType"
                    value="resin"
                    checked={formData.manufacturingType === 'resin'}
                    onChange={handleManufacturingTypeChange}
                  /> Resin
                </label>
                <label>
                  <input
                    type="radio"
                    name="manufacturingType"
                    value="hybrid"
                    checked={formData.manufacturingType === 'hybrid'}
                    onChange={handleManufacturingTypeChange}
                  /> Hybrid
                </label>
              </div>
            </div>
            {formData.manufacturingType && (
              <div className="form-group">
                <label htmlFor="rawMaterialType">Raw Material Type</label>
                {formData.manufacturingType === 'fdm' && (
                  <select
                    id="rawMaterialType"
                    name="rawMaterialType"
                    value={formData.rawMaterialType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="pla">PLA</option>
                    <option value="ABS">ABS</option>
                    <option value="petg">PETG</option>
                    <option value="tpu">TPU</option>
                  </select>
                )}
                {formData.manufacturingType === 'resin' && (
                  <select
                    id="rawMaterialType"
                    name="rawMaterialType"
                    value={formData.rawMaterialType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="clear">Clear</option>
                    <option value="normal">Normal</option>
                    <option value="nylon">Nylon</option>
                    <option value="abs">ABS</option>
                  </select>
                )}
                {formData.manufacturingType === 'hybrid' && (
                  <select
                    id="rawMaterialType"
                    name="rawMaterialType"
                    value={formData.rawMaterialType}
                    onChange={handleChange}

                  >
                    <option value="">Select</option>
                    <option value="hybrid1">PLA + Normal_Resin</option>
                    <option value="hybrid2">PLA + Clear_Resin</option>
                    <option value="hybrid3">PLA + ABS_Resin</option>
                  </select>
                )}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleQuantityChange}
                onBlur={handleBlur}
                
              />
            </div>
 
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cost">Cost</label>
              <input
                type="text"
                id="cost"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastDate">Last Date</label>
              <input
                type="date"
                id="lastDate"
                name="lastDate"
                value={formData.lastDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <button className='submit-button' type="submit" disabled={!isFormValid}>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateOrder;