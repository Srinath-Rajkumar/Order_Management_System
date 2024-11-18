import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import AddCustomer from './components/AddCustomer';
import CreateOrder from './components/CreateOrder';
import ViewOrders from './components/ViewOrders';
import Employees from './components/Employees';

// const RequireAuth = ({ children }) => {
//   let location = useLocation();
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   if (!isLoggedIn) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   return children;
// };


// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
//     setIsLoggedIn(loggedInStatus);
//   }, []);

//   const handleLogin = (status) => {
//     setIsLoggedIn(status);
//     localStorage.setItem('isLoggedIn', 'true');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn');
//   };


//   return (
//     <Router>
//       {isLoggedIn && <Navbar onLogout={handleLogout} />}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
//           }
//         />
//         <Route
//           path="/home"
//           element={
//             <RequireAuth>
//               <Home />
//             </RequireAuth>
//           }
//         />
//         <Route
//           path="/manage-customer"
//           element={
//             <RequireAuth>
//               <AddCustomer />
//             </RequireAuth>
//           }
//         />
//         <Route
//           path="/create-order"
//           element={
//             <RequireAuth>
//               <CreateOrder />
//             </RequireAuth>
//           }
//         />
//         <Route
//           path="/view-orders"
//           element={
//             <RequireAuth>
//               <ViewOrders />
//             </RequireAuth>
//           }
//         />
//          <Route
//           path="/manage-employees"
//           element={
//             <RequireAuth>
//               <Employees/>
//             </RequireAuth>
//           }
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };


// export default App;
const RequireAuth = ({ children }) => {
  let location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('role');
    setIsLoggedIn(loggedInStatus);
    setRole(userRole);
  }, []);

  const handleLogin = (status, userRole) => {
    setIsLoggedIn(status);
    setRole(userRole);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', userRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
  };

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout} role={role} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/manage-customer"
          element={
            <RequireAuth>
              <AddCustomer />
            </RequireAuth>
          }
        />
        <Route
          path="/create-order"
          element={
            <RequireAuth>
              <CreateOrder />
            </RequireAuth>
          }
        />
        <Route
          path="/view-orders"
          element={
            <RequireAuth>
              <ViewOrders />
            </RequireAuth>
          }
        />
        <Route
          path="/manage-employees"
          element={
            <RequireAuth>
              <Employees />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;