import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/AddressStyle.css"
  
const AddAddressForm = ({ addAddress, setAddresses, addresses }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    details: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    details: "",
    phone: "",
  });

  useEffect(() => {
    if (location.state?.address) {
      setForm(location.state.address); // Pre-fill the form if editing
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errorMessages = { name: "", details: "", phone: "" };

    // Validate Name (non-empty)
    if (!form.name) {
      valid = false;
      errorMessages.name = "Full Name is required.";
    }

    // Validate Address Details (non-empty)
    if (!form.details) {
      valid = false;
      errorMessages.details = "Address details are required.";
    }

    // Validate Phone Number (must be 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      valid = false;
      errorMessages.phone = "Phone number must be 10 digits.";
    }

    setErrors(errorMessages); // Set the error messages to display
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Stop submission if validation fails
    }

    if (location.state?.address) {
      // Update existing address
      setAddresses(
        addresses.map((address) =>
          address.id === form.id ? { ...address, ...form } : address
        )
      );
    } else {
      // Add new address
      const newAddress = { ...form, id: Date.now(), isDefault: false };
      addAddress(newAddress);
    }

    navigate("/"); // Go back to address list after saving
  };

  return (
    <div className="add-address-form">
      <h1>{location.state?.address ? "Edit Address" : "Add a New Address"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label><br/>
        <label>
          Address Details:
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            required
          ></textarea>
          {errors.details && <span className="error">{errors.details}</span>}
        </label><br/>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label><br/>
        <button type="submit">
          {location.state?.address ? "Update Address" : "Save Address"}
        </button>
      </form><br/>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default AddAddressForm;
