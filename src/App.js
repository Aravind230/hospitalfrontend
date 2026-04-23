import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home.jsx";
import Triage from "./Pages/triage.jsx";
import Queue from "./Pages/queue.jsx";
import Navbar from "./Components/navbar.jsx";
import Login from "./Components/login.jsx";
import Register from "./Components/register.jsx";
import Footer from "./Components/footer.jsx";
import './App.css'; 

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/triage" element={<Triage />} />
                <Route path="/queue" element={<Queue />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
