import React, { useEffect, useState } from 'react';
import './Styling/vieworders.css'; // You'll need to create this CSS file
import Footer from './Footer';

// const ViewOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [statusFilter, setStatusFilter] = useState('new_order');

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   useEffect(() => {
//     filterOrdersByStatus();
//   }, [orders, statusFilter, currentPage]);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/orders');
//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const filterOrdersByStatus = () => {
//     const filtered = orders.filter(order => order.status === statusFilter);
//     setFilteredOrders(filtered);
//   };

//   const handleStatusFilterChange = (status) => {
//     setStatusFilter(status);
//     setCurrentPage(1); // Reset to first page on filter change
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleUpdateProgress = async (orderId, newStatus) => {
//     try {
//       const updatedOrders = orders.map(order =>
//         order.orderId === orderId ? { ...order, status: newStatus } : order
//       );
//       setOrders(updatedOrders);

//       // Update the order in the JSON database
//       const orderToUpdate = updatedOrders.find(order => order.orderId === orderId);
//       await fetch(`http://localhost:4000/orders/${orderToUpdate.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(orderToUpdate),
//       });
//     } catch (error) {
//       console.error('Error updating order progress:', error);
//     }
//   };

//   // Pagination logic
//   const ordersPerPage = 10;
//   const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
//   const startIndex = (currentPage - 1) * ordersPerPage;
//   const displayedOrders = filteredOrders.slice(startIndex, startIndex + ordersPerPage);

//   return (
//     <div className="view-orders-container">
//       <h2>View Orders</h2>
//       <div className="status-toggle-buttons">
//         <button onClick={() => handleStatusFilterChange('new_order')} className={statusFilter === 'new_order' ? 'active' : ''}>New Orders</button>
//         <button onClick={() => handleStatusFilterChange('inprogress')} className={statusFilter === 'inprogress' ? 'active' : ''}>In Progress</button>
//         <button onClick={() => handleStatusFilterChange('completed')} className={statusFilter === 'completed' ? 'active' : ''}>Completed</button>
//       </div>
//       <div className="orders-list">
//         {displayedOrders.map(order => (
//           <div key={order.orderId} className="order-card">
//             <p>Order ID: {order.orderId}</p>
//             <p>Customer ID: {order.customerId}</p>
//             <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
//             <p>Quantity: {order.quantity}</p>
//             <p>Size: {order.size}</p>
//             <p>Price: {order.price}</p>
//             <p>Last Date: {new Date(order.lastDate).toLocaleDateString()}</p>
//             <p>Status: {order.status}</p>
//             <div className="update-progress-buttons">
//               {order.status !== 'new_order' && <button onClick={() => handleUpdateProgress(order.orderId, 'new_order')}>Set to New Order</button>}
//               {order.status !== 'inprogress' && <button onClick={() => handleUpdateProgress(order.orderId, 'inprogress')}>Set to In Progress</button>}
//               {order.status !== 'completed' && <button onClick={() => handleUpdateProgress(order.orderId, 'completed')}>Set to Completed</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default ViewOrders;

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('new_order');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:4000/orders');
        const data = await response.json();
        setOrders(data);
        filterOrders(data, statusFilter);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const filterOrders = (orders, status) => {
    const filtered = orders.filter(order => order.status === status);
    setFilteredOrders(filtered);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    filterOrders(orders, status);
  };

  const ordersPerPage = 10;
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="view-orders-container">
      <div className="toggle-buttons">
        <button
          className={statusFilter === 'new_order' ? 'active' : ''}
          onClick={() => handleStatusChange('new_order')}
        >
          New Orders
        </button>
        <button
          className={statusFilter === 'inprogress' ? 'active' : ''}
          onClick={() => handleStatusChange('inprogress')}
        >
          In Progress
        </button>
        <button
          className={statusFilter === 'completed' ? 'active' : ''}
          onClick={() => handleStatusChange('completed')}
        >
          Completed
        </button>
      </div>

      <div className="order-list">
        {currentOrders.map(order => (
          <div className="order-card" key={order.id}>
            <h3>Order ID: {order.orderId}</h3>
            <p>Customer ID: {order.customerId}</p>
            <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Size: {order.size}</p>
            <p>Price: {order.price}</p>
            <p>Last Date: {new Date(order.lastDate).toLocaleDateString()}</p>
            <p>Status: {order.status}</p>
            <div className="order-actions">
              <button onClick={() => updateOrderStatus(order.id, 'inprogress')}>In Progress</button>
              <button onClick={() => updateOrderStatus(order.id, 'completed')}>Completed</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredOrders.length / ordersPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

const updateOrderStatus = async (id, status) => {
  try {
    await fetch(`http://localhost:4000/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    window.location.reload(); // Refresh page to reflect changes
  } catch (error) {
    console.error('Error updating order status:', error);
  }
};

export default ViewOrders;