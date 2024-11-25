import React, { useState } from "react";
import "../styles/style.css";
import { Card, Form, Button } from "react-bootstrap";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (email === "admin@admin.com") {
      setInfo(`A recovery password has been sent to ${email}`);
      setEmail("");
    } else {
      setInfo("Please enter a valid email address.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://shorturl.at/nTncn')`,
        backgroundSize: "cover",
        margin: "0",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div>
        <img
          src="/images/zippycart.png" className="image"
         
        />
        <p
          style={{
            fontWeight: "bolder",
            marginLeft: "1350px",
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          Shop the future today!
        </p>
      </div>
      <div className="container">
        <Card className="card">
          <h2 style={{ color: "black" }}>Forgot Password</h2>
          <Form onSubmit={handleForgotPassword}>
            <Form.Control
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                marginBottom: "15px",
                marginTop: "30px",
                height: "45px",
                width: "100%",
                padding: "10px 40px 10px 10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.8)",
                color: "#333",
              }}
            />
            <Button
              type="submit"
              className="login-button"
              style={{ width: "100%", marginTop: "10px" }}
              variant="dark"
            >
              Send Reset Link
            </Button>
          </Form>
        </Card>
        {info && (
          <a className="message" href="/adminlogin">
            {info}
          </a>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
