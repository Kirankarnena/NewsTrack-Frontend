

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('https://newstrack-backend-2.onrender.com/api/auth/register', { username, password });
      const token = res.data.token;
      localStorage.setItem('token', token);
      setToken(token);
      navigate('/news');
    } catch (err) {
      setError(err.response?.data || 'Registration failed');
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
