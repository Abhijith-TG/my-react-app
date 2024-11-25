import React, { useState } from "react";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Password reset link has been sent to your email.");
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          Forget Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "5px",
                color: "#333",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              height:"50px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Send Reset Link
          </button>
        </form>

        {message && (
          <div
            className="mt-3"
            style={{
              marginTop: "15px",
              color: message.includes("sent") ? "green" : "red",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgetpassword;
