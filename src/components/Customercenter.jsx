import React, { useState } from "react";
import "./customercenter.css";

const Customercenter = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the name field is filled
    if (!formData.name.trim()) {
      setModalMessage("Please enter your name!");
      return;
    }

    // Success Message
    setModalMessage(
      `${formData.name}, your message is precious or important. We will update as soon as possible.`
    );
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 5000);

    // Close the modal after 2 minutes
    // setTimeout(() => {
    //   setModalVisible(false);
    // }, 1000);

    // Optionally reset the form
    setFormData({ name: "", phone: "", email: "", comments: "" });
  };

  return (
    <div className="app-container">
      <h1>Customer Center Services</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {/* Modal Box */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customercenter;