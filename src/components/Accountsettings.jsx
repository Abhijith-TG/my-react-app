import React, { useState } from "react";

const AccountSettings = () => {
  // State for managing form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    profilePicture: null, // New state for profile picture
  });

  // State to display the uploaded profile picture
  const [previewImage, setPreviewImage] = useState(null);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setPreviewImage(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Example of accessing the profile picture file
    if (formData.profilePicture) {
      console.log("Uploaded Profile Picture:", formData.profilePicture);
    }

    alert("Account settings updated!");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Profile Picture:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.input}
          />
        </label>
        {previewImage && (
          <div style={styles.imagePreviewContainer}>
            <img
              src={previewImage}
              alt="Profile Preview"
              style={styles.imagePreview}
            />
          </div>
        )}
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Update Settings
        </button>
      </form>
    </div>
  );
};

// Simple inline styling
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundImage: "url('C:\Users\devus\OneDrive\Desktop\Kompetenzen\html\file-Su63YUn1kr4voiZWDnXPS7EL.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "15px",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  imagePreviewContainer: {
    marginBottom: "15px",
    textAlign: "center",
  },
  imagePreview: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AccountSettings;
