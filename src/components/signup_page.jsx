import React, { useState } from 'react';
import './signup_up.css';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });
const navigate=useNavigate();

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
     
      // console.log('Form data submitted:', formData);
      navigate('/',{state:{formData}})
    
     
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="background">
    <div className="registration-container">
      <h2 className='heading'>Sign Up Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label><br></br>
          <input
          className='inputs'
            type="text"
            id="name"
            name="name"
            placeholder='Full Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          
        </div>

        <div className="form-group">
          <label >Email</label><br></br>
          <input
           className='inputs'
            type="email"
            id="email"
            name="email"
            placeholder='user@gmail.com'
            value={formData.email}
            onChange={handleChange}
            required
          />
          
        </div>

        <div className="form-group">
          <label >Password</label><br></br>
          <input
          className='inputs'
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label >Confirm Password</label><br></br>
          <input
          className='inputs'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <br></br><button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
    
    </div>
  );
};

export default RegistrationForm;
