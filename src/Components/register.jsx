import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("Patient");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("https://hospitalqueuemanagement-zrja.onrender.com/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    role
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful! Please login.");
                navigate("/login");
            } else {
                // Formatting backend errors
                let errorMsg = "Registration failed";
                if (data.username) errorMsg = `Username: ${data.username[0]}`;
                else if (data.email) errorMsg = `Email: ${data.email[0]}`;
                else if (data.password) errorMsg = `Password: ${data.password[0]}`;

                alert(errorMsg);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Network or Server error: " + error.message);
        } finally {
            setPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <div className="auth-container">
            <div className="bg-glow"></div>
            <div className="auth-card glass">
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Register to join the MediQueue network</p>

                <form className="auth-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)" }} value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="Patient" style={{ color: "#000" }}>Patient</option>
                            <option value="Doctor" style={{ color: "#000" }}>Doctor</option>
                            <option value="Admin" style={{ color: "#000" }}>Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-primary w-100 mt-3">Register</button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link to="/login" className="text-gradient">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
