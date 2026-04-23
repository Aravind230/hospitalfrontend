import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Queue() {
    const [queue, setQueue] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            navigate("/login");
            return;
        }
        fetchQueue();
    }, [navigate]);

    const fetchQueue = async () => {
        try {
            const response = await fetch("https://hospitalqueuemanagement-zrja.onrender.com/api/patients/queue/");
            if (!response.ok) throw new Error("Failed to fetch queue data");
            const data = await response.json();
            setQueue(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getPriorityColor = (score) => {
        if (score >= 15) return "#ff4d4d"; // Red for Critical
        if (score >= 8) return "#ffa64d";  // Orange for High
        return "#4dff88"; // Green for Moderate
    };

    if (loading) return <div className="auth-container"><h2 className="text-gradient">Loading Queue...</h2></div>;
    if (error) return <div className="auth-container"><h2 style={{ color: '#ff4d4d' }}>{error}</h2></div>;

    return (
        <div className="auth-container" style={{ minHeight: '100vh', padding: '50px 20px', alignItems: 'flex-start' }}>
            <div className="bg-glow"></div>
            <div className="glass" style={{ width: '100%', maxWidth: '900px', padding: '30px', margin: '0 auto' }}>
                <h2 className="auth-title" style={{ textAlign: 'center', marginBottom: '10px' }}>Live Patient Queue</h2>
                <p className="auth-subtitle" style={{ textAlign: 'center', marginBottom: '30px' }}>
                    Patients automatically sorted by triage priority score
                </p>

                <div className="queue-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {queue.length === 0 ? (
                        <p style={{ textAlign: 'center', color: '#aaa' }}>No patients currently in the queue.</p>
                    ) : (
                        queue.map((patient, index) => (
                            <div
                                key={patient.id}
                                className="queue-card"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    borderLeft: `5px solid ${getPriorityColor(patient.priority_score)}`,
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.2s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="patient-info" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div className="patient-rank" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.3)' }}>
                                        #{index + 1}
                                    </div>
                                    <div>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#fff' }}>{patient.name} <span style={{ fontSize: '0.9rem', color: '#aaa' }}>({patient.age}y, {patient.gender})</span></h3>
                                        <p style={{ margin: 0, color: '#ddd', fontSize: '0.9rem' }}>
                                            <strong>Symptoms:</strong> {patient.symptoms}
                                        </p>
                                    </div>
                                </div>
                                <div className="patient-score" style={{ textAlign: 'right' }}>
                                    <div style={{
                                        background: `rgba(${parseInt(getPriorityColor(patient.priority_score).slice(1, 3), 16)}, ${parseInt(getPriorityColor(patient.priority_score).slice(3, 5), 16)}, ${parseInt(getPriorityColor(patient.priority_score).slice(5, 7), 16)}, 0.2)`,
                                        color: getPriorityColor(patient.priority_score),
                                        padding: '5px 15px',
                                        borderRadius: '20px',
                                        fontWeight: 'bold',
                                        display: 'inline-block',
                                        fontSize: '1.1rem'
                                    }}>
                                        Score: {patient.priority_score}
                                    </div>
                                    <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', color: '#aaa' }}>
                                        Pain Level: {patient.pain_level}/10
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
export default Queue;