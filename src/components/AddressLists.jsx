import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddressStyle.css"
const AddressList = ({ addresses, setAddresses }) => {
  const navigate = useNavigate();

  const handleRemove = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((address) =>
        address.id === id
          ? { ...address, isDefault: true }
          : { ...address, isDefault: false }
      )
    );
  };

  const handleEdit = (address) => {
    // Navigate to the AddAddress form and pass the address data for editing
    navigate("/add-address", { state: { address } });
  };

  return (
    <div className="address-list">
      <h1>Your Addresses</h1>
      <button onClick={() => navigate("/add-address")}>Add a New Address</button>

      {addresses.map((address) => (
        <div key={address.id} className="address-card">
          {address.isDefault && <span className="default-badge">Default</span>}
          <p><strong>{address.name}</strong></p>
          <p>{address.details}</p>
          <p>Phone number: {address.phone}</p>
          <div className="actions">
            <button onClick={() => handleSetDefault(address.id)}>Set as Default</button>
            <button onClick={() => handleEdit(address)}>Edit</button>
            <button onClick={() => handleRemove(address.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
