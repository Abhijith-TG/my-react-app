import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddressList from "./components/AddressLists";
import AddAddressForm from "./components/AddAddress";


const App = () => {
  // Shared state for managing addresses
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "R Arjun",
      details: "VLP Building, Mullanalloor, Navaikulam, Thiruvananthapuram,691001",
      phone: "1234567890",
      isDefault: true,
    },
    {
      id: 2,
      name: "Sreelekshmi BS",
      details: "Sreenilayam, Kadampattukonam, Parippally, Kollam, Kerala 691574",
      phone: "0123456789",
      isDefault: false,
    },
  ]);

  // Function to add a new address
  const addAddress = (newAddress) => {
    setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
  };

  return (
    <Router>
      <Routes>
        {/* Pass addresses and the set function to AddressList */}
        <Route
          path="/"
          element={<AddressList addresses={addresses} setAddresses={setAddresses} />}
        />

        {/* Pass addAddress function to AddAddressForm */}
        <Route
          path="/add-address"
          element={<AddAddressForm addAddress={addAddress} setAddresses={setAddresses} addresses={addresses}/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
