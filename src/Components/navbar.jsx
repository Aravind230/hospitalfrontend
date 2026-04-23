import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar glass">
            <Link className="nav-brand" to="/">
                <span className="text-gradient">Medi</span>Queue
            </Link>
            <ul className="nav-links">
                <li><Link className="nav-link" to="/triage">Triage Engine</Link></li>
                <li><Link className="nav-link" to="/queue" onClick={() => {
                    if (localStorage.getItem("access_token")) {
                        navigate("/queue");
                    } else {
                        alert("Please login to view the queue");
                        navigate("/login");
                    }
                }}>Live Queue</Link></li>
                <li><Link className="nav-link" to="/">Dashboard</Link></li>
            </ul>
            <div className="nav-actions">
                <Link to="/login" className="btn-secondary">Login</Link>
                <Link to="/register" className="btn-primary">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;