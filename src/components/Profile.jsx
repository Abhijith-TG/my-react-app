import React from "react";

const UserProfile = () => {
  const handleLogout = () => {
    alert("Logged out successfully!");
    // Add your logout logic here
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px auto",
        maxWidth: "400px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Profile Section */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          style={{ borderRadius: "50%", marginBottom: "10px" }}
        />
        <h2 style={{ margin: "10px 0", fontSize: "1.5rem" }}>
          Ecommerce
        </h2>
        <p style={{ margin: "5px 0", color: "#555" }}>Email: commerce@example.com</p>
        <p style={{ margin: "5px 0", color: "#555" }}>Address: italy</p>
      </div>

      {/* Settings Sections */}
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          Profile Settings
        </button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          Address Settings
        </button>
      </div>

      {/* Logout Section */}
      <div>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;