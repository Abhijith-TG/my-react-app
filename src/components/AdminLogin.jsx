import React, { useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button, Modal } from 'react-bootstrap';

function AdminLogin() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginStatus, setLoginStatus] = useState(""); 
    const navigate = useNavigate();

    const adminDetails = {
        email: "admin@admin.com",
        password: "admin123"
    };

    const handleCloseLoginModal = () => setShowLoginModal(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if entered email and password match hardcoded admin details
        if (loginEmail === adminDetails.email && loginPassword === adminDetails.password) {
            setShowLoginModal(true); // Show login success modal
        } else {
            setLoginStatus("Invalid email or password");
        }
    };

    const handleNavigate = () => {
        // Redirect to the home page after successful login
        navigate("/", { state: { loggedIn: true, name: loginEmail } });
    };

    return (
        <div style={{ backgroundImage:`url('/images/image.jpg')`, backgroundSize: "cover", margin: '0', height: '100vh', backgroundPosition: 'center' }}>
            <div> 
                <img src='/images/zippycart.png' style={{width:'100px',marginTop:'25px',marginLeft:'1350px',marginBottom:'-1%'}}/>
                <p style={{fontWeight:'bolder',marginLeft:'1350px',fontSize:'12px',marginTop:'5px'}}>Shop the future today!</p>
            </div>
            <div className="container">
                <Card className="card">
                    <Form onSubmit={handleLogin}>
                        <h2 className="heading">Admin Login</h2>

                        <Form.Control
                            type="text"
                            style={{
                                marginBottom: "15px", marginTop: "30px", height: "45px",
                                width: "100%", padding: "10px 40px 10px 10px",
                                border: "1px solid #ddd", borderRadius: "4px",
                                background: "rgba(255, 255, 255, 0.8)", color: "#333"
                            }}
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)} 
                            placeholder="Email ID"/>
                     

                        <Form.Control
                            type="password"
                            style={{
                                marginBottom: "15px", marginTop: "15px", height: "45px",
                                width: "100%", padding: "10px 40px 10px 10px",
                                border: "1px solid #ddd", borderRadius: "4px",
                                background: "rgba(255, 255, 255, 0.8)", color: "#333"
                            }}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="Password"
                        />

                        {loginStatus && <p style={{ color: 'red' }}>{loginStatus}</p>} 

                        <div className="d-flex">
                            <Button type="submit" className="login-button">Login</Button>
                            <a href='/forgotpassword' className="links">Forgot Password?</a>
                        </div>
                    </Form>
                </Card>

                <div className="welcome-text">
                    <h1>Welcome!</h1>
                    <p>Your business, your control. Log in to make it happen.</p>
                </div>
            </div>
            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>  
                <Modal.Body>
                    <b>You are successfully logged in!</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleNavigate}>
                        OK
                    </Button>
                    <Button variant="secondary" onClick={handleCloseLoginModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdminLogin;
