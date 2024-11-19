import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button,icons} from "react-bootstrap";

import "./Loginpage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === password) {
      setMessage('Login successful!');
      setError('');
      
      
      if (rememberMe) {
        localStorage.setItem('rememberedUsername', username);
      }

      
      navigate("/a"); 
    } else {
      setError('Invalid username or password');
      setMessage('');
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here (e.g., navigate to a password reset page)
    console.log('Forgot Password clicked');
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
            <div className="mb-2">
              <label className="form-label">Username <i class="fa-solid fa-user"></i></label>
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

            <div className="mb-3">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
           

           

            <Button type="submit" variant="primary">Login</Button> </div>
          </form>

          <div className="signup-link mt-3">
            <span>Don't have an account? <a href="/signup">Sign Up</a></span>
          </div>
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
    </div>
  );
};

export default LoginPage;
