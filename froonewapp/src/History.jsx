// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function History({ token }) {
//   const [history, setHistory] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const fetchHistory = async () => {
//     setError('');
//     try {
//       const res = await axios.get('http://localhost:8080/api/history', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setHistory(res.data);
//     } catch (err) {
//       setError('Failed to fetch history');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 800, margin: 'auto', marginTop: 20 }}>
//       <h2>Your History</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {history.length === 0 && !error && <p>No history found.</p>}

//       {history.map((article, idx) => (
//         <div key={idx} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
//           <h3>{article.title}</h3>
//           {article.imageUrl && <img src={article.imageUrl} alt={article.title} style={{ maxWidth: '100%' }} />}
//           <p>{article.description}</p>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function History({ token }) {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setError('');
    try {
      const res = await axios.get('https://newstrack-backend-2.onrender.com/api/history', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setHistory(res.data);
    } catch (err) {
      setError('Failed to fetch history');
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', marginTop: 20 }}>
      <h2>Your History</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {history.length === 0 && !error && <p>No history found.</p>}

      {history.map((article, idx) => (
        <div key={idx} className="article-card">
          <h3>{article.title}</h3>
          {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
        </div>
      ))}
    </div>
  );
}
