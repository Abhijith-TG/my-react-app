import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Loginpage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault();
    const storedPassword = state.formData.password;
    const storedname = state.formData.name;
    console.log(state.formData);

    if (storedPassword && storedPassword === password) {
      setMessage("Login successful!");
      setError("");
      if (storedname && storedname === username) {
        setMessage("Login successful!");
        setError("");
        navigate("/dashboard");
      }

      if (rememberMe) {
        localStorage.setItem("rememberedUsername", username);
      }

      //   navigate("/a"); // Redirect to a different page after successful login
    } else {
      setError("Invalid username or password");
      setMessage("");
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here (e.g., navigate to a password reset page)
    console.log("Forgot Password clicked");
  };

  return (
    <div className="caa">
      <br />
      <br />

      <div className="container mt-5">
        <h2 className="text-centerr">Please Login Here</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        {/* Flex container to align forms side by side */}

        <div className="form-container-wrapper">
          <div className="form-container1">
            <br></br>
            <h2 className="text-center">Unlock Your Full Potential</h2>
            <img src="data:image/jpeg;base64,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" />
            {/* Add form or additional content here */}
          </div>
          <div className="form-container">
            <form onSubmit={handleLoginClick}>
              <div className="mb-2">
                <label htmlFor="username" className="form-label">
                  Username <i className="fa-solid fa-user"></i>
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Flexbox for Remember Me and Login button */}
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  Remember Me
                </label>

                {/* Aligning button with a space between */}

                <Button
                  type="submit"
                  variant="primary"
                  className="login-button"
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
              </div>
            </form>
            <br></br>
            <div className="signup-link mt-3">
              <span>
                Don't have an account? <a href="/r">Sign Up</a>
              </span>
            </div>
          </div>

          {/* You can add the second form container here if needed */}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LoginPage;
