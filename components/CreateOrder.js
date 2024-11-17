// src/components/CreateOrder.js
import React , { useState }from 'react';
import './Styling/CreateOrder.css'; 
import Footer from './Footer';

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    pincode: '',
    city: '',
    description: '',
    filamentType: 'PLA',
    quantity: '',
    size: '',
    email: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = () => {
    const { customerName, phoneNumber, addressLine1, pincode, city, description, quantity, size } = formData;
    const isValid = customerName && phoneNumber && addressLine1 && pincode && city && description && quantity && size;
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Order submitted:', formData);
  };

  return (
    <>
      <div className="create-order-container">
        <h2>Create Order</h2>
        <form className="order-form"onSubmit={handleSubmit}>
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
              <label htmlFor="filamentType">Filament Type</label>
              <select
                id="filamentType"
                name="filamentType"
                value={formData.filamentType}
                onChange={handleChange}
              >
                <option value="PLA">PLA</option>
                <option value="ABS">ABS</option>
                <option value="Resin">Resin</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
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
          </div>
          <button className='submit-button' type="submit" disabled={!isFormValid}>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateOrder;