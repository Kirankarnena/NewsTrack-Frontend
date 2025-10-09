

// import React, { useState } from 'react';
// import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
// import Login from './Login';
// import Register from './Register';
// import News from './News';
// import History from './History';

// function App() {
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem('token');
//     setToken('');
//     navigate('/login');
//   };

//   return (
//     <div>
//       <nav>
//         {token ? (
//           <>
//             <Link to="/news" style={{ marginRight: 10 }}>News</Link>
//             <Link to="/history" style={{ marginRight: 10 }}>History</Link>
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//       </nav>

//       <Routes>
//         <Route path="/login" element={<Login setToken={setToken} />} />
//         <Route path="/register" element={<Register setToken={setToken} />} />
//         <Route path="/news" element={token ? <News token={token} /> : <Navigate to="/login" />} />
//         <Route path="/history" element={token ? <History token={token} /> : <Navigate to="/login" />} />
//         {/* Fallback: always go to login */}
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import News from './News';
import History from './History';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const navigate = useNavigate();

  // Apply dark mode class to body on load and theme change
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login');
  };

  return (
    <div>
      <nav>
        {token ? (
          <>
            <Link to="/news" style={{ marginRight: 10 }}>News</Link>
            <Link to="/history" style={{ marginRight: 10 }}>History</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{ marginRight: 15 }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
            <Link to="/register">Register</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{ marginLeft: 20 }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/news" element={token ? <News token={token} /> : <Navigate to="/login" />} />
        <Route path="/history" element={token ? <History token={token} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
