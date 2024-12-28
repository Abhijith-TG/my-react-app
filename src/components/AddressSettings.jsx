import React, { useState } from "react";
import '../styles/AddressSettings.css';

const AddressSettings = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, address: "123 Main St, New York, NY" },
    { id: 2, address: "456 Elm St, Los Angeles, CA" },
  ]);

  const [editId, setEditId] = useState(null);
  const [editAddress, setEditAddress] = useState("");

  const handleSaveAddress = () => {
    const updatedAddresses = addresses.map((addr) =>
      addr.id === editId ? { ...addr, address: editAddress } : addr
    );
    setAddresses(updatedAddresses);
    setEditId(null);
    setEditAddress("");
  };

  return (
    <div className="address-container">
      <h2 className="address-title">Address Settings</h2>

      <ul className="address-list">
        {addresses.map((addr) => (
          <li key={addr.id} className="address-item">
            {editId === addr.id ? (
              <input
                type="text"
                value={editAddress}
                onChange={(e) => setEditAddress(e.target.value)}
                placeholder="Edit Address"
                className="address-input"
              />
            ) : (
              <span>{addr.address}</span>
            )}
            <button
              onClick={() => {
                if (editId === addr.id) {
                  handleSaveAddress();
                } else {
                  setEditId(addr.id);
                  setEditAddress(addr.address); 
                }
              }}
              className="address-button"
            >
              {editId === addr.id ? "Save" : "Edit"}
            </button>
          </li>
        ))}
      </ul>

      <AddAddressSection
        addresses={addresses}
        setAddresses={setAddresses}
      />
    </div>
  );
};

const AddAddressSection = ({ addresses, setAddresses }) => {
  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setAddresses([
        ...addresses,
        { id: addresses.length + 1, address: newAddress },
      ]);
      setNewAddress("");
    }
  };

  return (
    <div className="address-add-section">
      <input
        type="text"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        placeholder="Add new address"
        className="address-input"
      />
      <button onClick={handleAddAddress} className="address-add-button">
        Add
      </button>
    </div>
  );
};

export default AddressSettings;
