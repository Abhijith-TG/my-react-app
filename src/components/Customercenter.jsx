import React, { useState } from "react";
import "../styles/customercenter.css";

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

    if (!formData.name.trim()) {
      setModalMessage("Please enter your name!");
      setModalVisible(true);
      return;
    }

    setModalMessage(
      `${formData.name}, your message is precious or important. We will update as soon as possible.`
    );
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
    }, 3000);

    setFormData({ name: "", phone: "", email: "", comments: "" });
  };

  return (
    <div className="customer-center">
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