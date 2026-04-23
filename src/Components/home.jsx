import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <main className="hero">
            <div className="bg-glow"></div>

            <h1 className="hero-title">
                Smart <span className="text-gradient">Triage</span> Engine
            </h1>
            <p className="hero-subtitle">
                Dynamically prioritizing patient care based on real-time multi-factor algorithm analysis.
            </p>
            <div className="hero-buttons" style={{ marginTop: "20px", marginBottom: "40px" }}>
                <button className="btn-primary" onClick={() => {
                    alert("Please login to get started");
                    navigate("/login")
                }}>Get Started</button>
            </div>
            <div className="triage-grid ">
                <div className="triage-card glass">
                    <div className="card-icon">🤕</div>
                    <h3 className="card-title">Pain Level</h3>
                    <p className="card-desc">Evaluates subjective and objective pain indicators on a 1-10 scale to adjust patient's immediate and crucial needs.</p>
                </div>

                <div className="triage-card glass">
                    <div className="card-icon">⚡</div>
                    <h3 className="card-title">Medical Severity</h3>
                    <p className="card-desc">Analyzes vital signs and symptom keywords to intuitively classify emergency levels critical for survival.</p>
                </div>

                <div className="triage-card glass">
                    <div className="card-icon">⏳</div>
                    <h3 className="card-title">Age Factor</h3>
                    <p className="card-desc">Automatically elevates priority metrics for highly vulnerable demographics, including infants and the elderly.</p>
                </div>
            </div>

            <div className="live-demo-section glass">
                <div className="demo-header">
                    <h3>Algorithm Mock: Patient #1042</h3>
                    <span className="priority-badge pulse">Priority: HIGH</span>
                </div>
                <div className="demo-stats">
                    <div className="stat-item">
                        <span className="stat-value text-gradient">8/10</span>
                        <span className="stat-label">Pain Level</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value text-gradient">Lvl 3</span>
                        <span className="stat-label">Severity</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value text-gradient">74</span>
                        <span className="stat-label">Age</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;