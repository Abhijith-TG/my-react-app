import React, { useState, useContext } from 'react';
import '../styles/signup_up.css';
import { useNavigate } from 'react-router-dom';
import { EcommerceContext } from '../services/ApiFetchContext';

const RegistrationForm = () => {
  const { setUser, user } = useContext(EcommerceContext);

  console.log(user);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(''); // Error for duplicate users
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existingUser = user.find(
        (u) => u.name === formData.name || u.email === formData.email
      );

      if (existingUser) {
        setErrorMessage(
          'Username or email already exists. Please choose a different one.'
        );
        setSuccessMessage('');
        return;
      }

      // Add new user to the context
      setUser([...user, formData]);
      setSuccessMessage('Signup successful! Redirecting to the login page...');
      setErrorMessage('');

      // Redirect to login page after a brief delay
      setTimeout(() => {
        navigate('/', { state: { formData } });
      }, 2000);

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      });
      setErrors({});
    }
  };

  return (
    <div className="background">
      <div className="registration-container">
        <h2 className="heading">Sign Up Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <br />
            <input
              className="inputs"
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <br />
            <input
              className="inputs"
              type="email"
              id="email"
              name="email"
              placeholder="user@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              className="inputs"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <br />
            <input
              className="inputs"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <br />
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
