
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Loginpage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === password) {
      setMessage('Login successful!');
      setError('');
      // Navigate to the next page (e.g., dashboard) after successful login
      navigate("/a"); // Change this to your desired path
    } else {
      setError('Invalid username or password');
      setMessage('');
    }
  };

  return (
    <div className="caa">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container mt-5">
        <h2 className="text-center">Please Login Here</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        <div className="form-container">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" variant="primary">Login</Button>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default LoginPage;
