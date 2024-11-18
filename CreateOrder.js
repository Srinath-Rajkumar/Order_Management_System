// src/components/CreateOrder.js
import React , { useState }from 'react';
import './Styling/CreateOrder.css'; 
import Footer from './Footer';

// const CreateOrder = () => {
//   const [formData, setFormData] = useState({
//     customerName: '',
//     phoneNumber: '',
//     addressLine1: '',
//     addressLine2: '',
//     pincode: '',
//     city: '',
//     description: '',
//     filamentType: 'PLA',
//     quantity: '',
//     size: '',
//     email: '',
//   });

//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleBlur = () => {
//     const { customerName, phoneNumber, addressLine1, pincode, city, description, quantity, size } = formData;
//     const isValid = customerName && phoneNumber && addressLine1 && pincode && city && description && quantity && size;
//     setIsFormValid(isValid);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//     console.log('Order submitted:', formData);
//   };

//   return (
//     <>
//       <div className="create-order-container">
//         <h2>Create Order</h2>
//         <form className="order-form"onSubmit={handleSubmit}>
//           <div className="create-order-card">
//             <div className="form-group">
//               <label htmlFor="customerName">Customer Name</label>
//               <input
//                 type="text"
//                 id="customerName"
//                 name="customerName"
//                 value={formData.customerName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email (Optional)</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="addressLine1">Address Line 1</label>
//               <input
//                 type="text"
//                 id="addressLine1"
//                 name="addressLine1"
//                 value={formData.addressLine1}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="addressLine2">Address Line 2</label>
//               <input
//                 type="text"
//                 id="addressLine2"
//                 name="addressLine2"
//                 value={formData.addressLine2}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="pincode">Pincode</label>
//               <input
//                 type="text"
//                 id="pincode"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//           </div>

//           <div className="create-order-card">
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label htmlFor="filamentType">Filament Type</label>
//               <select
//                 id="filamentType"
//                 name="filamentType"
//                 value={formData.filamentType}
//                 onChange={handleChange}
//               >
//                 <option value="PLA">PLA</option>
//                 <option value="ABS">ABS</option>
//                 <option value="Resin">Resin</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="size">Size</label>
//               <input
//                 type="text"
//                 id="size"
//                 name="size"
//                 value={formData.size}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//           </div>
//           <button className='submit-button' type="submit" disabled={!isFormValid}>Submit</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CreateOrder;
// const mockDatabase = [
//   { id: 1, customerName: 'John Doe', phoneNumber: '1234567890', addressLine1: '123 Main St', addressLine2: '', pincode: '12345', city: 'Metropolis', email: 'john@example.com' },
//   // Add more mock customer data as needed
// ];

// const CreateOrder = () => {
//   const [customerType, setCustomerType] = useState('new'); // 'new' or 'old'
//   const [searchInput, setSearchInput] = useState('');
//   const [formData, setFormData] = useState({
//     customerName: '',
//     phoneNumber: '',
//     addressLine1: '',
//     addressLine2: '',
//     pincode: '',
//     city: '',
//     description: '',
//     filamentType: 'PLA',
//     quantity: '',
//     size: '',
//     email: '',
//   });

//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleBlur = () => {
//     const { customerName, phoneNumber, addressLine1, pincode, city, description, quantity, size } = formData;
//     const isValid = customerName && phoneNumber && addressLine1 && pincode && city && description && quantity && size;
//     setIsFormValid(isValid);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Order submitted:', formData);
//   };

//   const handleCustomerTypeChange = (type) => {
//     setCustomerType(type);
//     setFormData({
//       customerName: '',
//       phoneNumber: '',
//       addressLine1: '',
//       addressLine2: '',
//       pincode: '',
//       city: '',
//       description: '',
//       filamentType: 'PLA',
//       quantity: '',
//       size: '',
//       email: '',
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const handleSearch = () => {
//     const customer = mockDatabase.find((customer) => customer.phoneNumber === searchInput || customer.id.toString() === searchInput);
//     if (customer) {
//       setFormData({
//         customerName: customer.customerName,
//         phoneNumber: customer.phoneNumber,
//         addressLine1: customer.addressLine1,
//         addressLine2: customer.addressLine2,
//         pincode: customer.pincode,
//         city: customer.city,
//         email: customer.email,
//         description: '',
//         filamentType: 'PLA',
//         quantity: '',
//         size: '',
//       });
//     } else {
//       alert('Customer not found');
//     }
//   };

//   return (
//     <>
//       <div className="create-order-container">
//         <h2>Create Order</h2>
//         <div className="customer-type-toggle">
//           <button className={customerType === 'new' ? 'active' : ''} onClick={() => handleCustomerTypeChange('new')}>New Customer</button>
//           <button className={customerType === 'old' ? 'active' : ''} onClick={() => handleCustomerTypeChange('old')}>Old Customer</button>
//         </div>
//         {customerType === 'old' && (
//           <div className="search-customer">
//             <label htmlFor="searchInput">Enter Phone Number or Customer ID</label>
//             <input
//               type="text"
//               id="searchInput"
//               value={searchInput}
//               onChange={handleSearchChange}
//             />
//             <button onClick={handleSearch}>Search</button>
//           </div>
//         )}
//         <form className="order-form" onSubmit={handleSubmit}>
//           <div className="create-order-card">
//             <div className="form-group">
//               <label htmlFor="customerName">Customer Name</label>
//               <input
//                 type="text"
//                 id="customerName"
//                 name="customerName"
//                 value={formData.customerName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email (Optional)</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="addressLine1">Address Line 1</label>
//               <input
//                 type="text"
//                 id="addressLine1"
//                 name="addressLine1"
//                 value={formData.addressLine1}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="addressLine2">Address Line 2</label>
//               <input
//                 type="text"
//                 id="addressLine2"
//                 name="addressLine2"
//                 value={formData.addressLine2}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="pincode">Pincode</label>
//               <input
//                 type="text"
//                 id="pincode"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="city">City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//           </div>

//           <div className="create-order-card">
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label htmlFor="filamentType">Filament Type</label>
//               <select
//                 id="filamentType"
//                 name="filamentType"
//                 value={formData.filamentType}
//                 onChange={handleChange}
//               >
//                 <option value="PLA">PLA</option>
//                 <option value="ABS">ABS</option>
//                 <option value="Resin">Resin</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="size">Size</label>
//               <input
//                 type="text"
//                 id="size"
//                 name="size"
//                 value={formData.size}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//             </div>
//           </div>
//           <button className='submit-button' type="submit" disabled={!isFormValid}>Submit</button>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CreateOrder;
const mockDatabase = [
  { id: 1, customerName: 'John Doe', phoneNumber: '1234567890', addressLine1: '123 Main St', addressLine2: '', pincode: '12345', city: 'Metropolis', email: 'john@example.com' },
  // Add more mock customer data as needed
];

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
    quantity: '',
    sameSizeForAll: true,
    sizes: ['', '', '', '', ''],
    email: '',
    cost: '',
    lastDate: ''
  });
 
  const [isFormValid, setIsFormValid] = useState(false);

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
    const { customerName, phoneNumber, addressLine1, pincode, city, description, manufacturingType, rawMaterialType, quantity, sizes, cost, lastDate } = formData;
    const isValid = customerName && phoneNumber && addressLine1 && pincode && city && description && manufacturingType && rawMaterialType && quantity && (formData.sameSizeForAll || sizes.filter(size => size).length === quantity) && cost && lastDate;
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
  };

  const handleCustomerTypeChange = (type) => {
    setCustomerType(type);
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
      quantity: '',
      sameSizeForAll: true,
      sizes: ['', '', '', '', ''],
      email: '',
      cost: '',
      lastDate: ''
    });
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const customer = mockDatabase.find((customer) => customer.phoneNumber === searchInput || customer.id.toString() === searchInput);
    if (customer) {
      setFormData({
        customerName: customer.customerName,
        phoneNumber: customer.phoneNumber,
        addressLine1: customer.addressLine1,
        addressLine2: customer.addressLine2,
        pincode: customer.pincode,
        city: customer.city,
        email: customer.email,
        description: '',
        manufacturingType: 'fdm',
        rawMaterialType: '',
        quantity: '',
        sizes: [''],
        cost: '',
        lastDate: ''
      });
    } else {
      alert('Customer not found');
    }
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    setFormData({
      ...formData,
      quantity: quantity > 5 ? 5 : quantity,
    });
  };
  const handleSizeChange = (index, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index] = value;
    setFormData({
      ...formData,
      sizes: newSizes,
    });
  };

  // const renderSizeInputs = () => {
  //   const { quantity, sizes } = formData;
  //   const qty = parseInt(quantity, 10) || 0;
  //   return Array.from({ length: qty }).map((_, index) => (
  //     <div className="form-group" key={index}>
  //       <label htmlFor={`size${index}`}>Size {index + 1}</label>
  //       <input
  //         type="text"
  //         id={`size${index}`}
  //         name={`size${index}`}
  //         value={sizes[index]}
  //         onChange={(e) => handleSizeChange(index, e.target.value)}
  //         onBlur={handleBlur}
  //       />
  //     </div>
  //   ));
  // };

  return (
    <>
      <div className="create-order-container">
        <h2>Create Order</h2>
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
                min="1"
                max="5"
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="sameSizeForAll"
                  checked={formData.sameSizeForAll}
                  onChange={(e) => setFormData({ ...formData, sameSizeForAll: e.target.checked })}
                /> Same Size for All
              </label>
            </div>
            {!formData.sameSizeForAll && (
              <div className="form-group">
                {[...Array(formData.quantity)].map((_, index) => (
                  <div key={index}>
                    <label>Size for Quantity {index + 1}</label>
                    <input
                      type="text"
                      value={formData.sizes[index]}
                      onChange={(e) => handleSizeChange(index, e.target.value)}
                      onBlur={handleBlur}
                    />
                  </div>
                ))}
              </div>
            )}
            {/* {renderSizeInputs()} */}
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