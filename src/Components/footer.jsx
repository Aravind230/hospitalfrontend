import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer glass">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link to="/" className="nav-brand">
                        <span className="text-gradient">Medi</span>Queue
                    </Link>
                    <p className="footer-desc">
                        Revolutionizing healthcare management with intelligent triage algorithms and dynamic patient prioritization.
                    </p>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">Platform</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Triage Engine</Link></li>
                        <li><Link to="/">Live Queue</Link></li>
                        <li><Link to="/">Dashboards</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">Legal</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Terms of Service</Link></li>
                        <li><Link to="/">HIPAA Compliance</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4 className="footer-title">Connect</h4>
                    <div className="social-links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 MediQueue. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
