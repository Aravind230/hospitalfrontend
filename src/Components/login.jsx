import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                // ✅ Store tokens
                localStorage.setItem("access_token", data.access);
                localStorage.setItem("refresh_token", data.refresh);

                alert("Login successful");
                navigate("/queue");
            } else if (response.status === 401) {
                alert("User not found or invalid credentials. Please register.");
            } else {
                alert(data.detail || "Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Network or Server error: " + error.message);
        } finally {
            setUsername("");
            setPassword("");
        }
    };
    return (
        <div className="auth-container">
            <div className="bg-glow"></div>
            <div className="auth-card glass">
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtitle">Login to access the Triage Dashboard</p>

                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn-primary w-100">Login</button>
                </form>

                <p className="auth-footer">
                    Don't have an account? <Link to="/register" className="text-gradient" >Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;