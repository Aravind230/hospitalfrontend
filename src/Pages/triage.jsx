import React, { useState } from "react";
function Triage() {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [mobile, setmobile] = useState("");
    const [symptoms, setsymptoms] = useState("");
    const [painlevel, setpainlevel] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const patientData = {
            name: name,
            age: age ? parseInt(age) : 0,
            gender: gender,
            phone: mobile,
            symptoms: symptoms,
            pain_level: painlevel ? parseInt(painlevel) : 0,
            address: address,
            email: email
        };

        try {
            const response = await fetch("https://hospitalqueuemanagement-zrja.onrender.com/api/patients/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(patientData)
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert("Patient saved ✅");
                setname("");
                setage("");
                setgender("");
                setmobile("");
                setsymptoms("");
                setpainlevel("");
                setaddress("");
                setemail("");
            } else {
                alert("Failed to save patient. Please check the inputs.\n" + JSON.stringify(data));
            }

        } catch (error) {
            console.error(error);
            alert("Network error: Make sure the Django backend is running!");
        }
    };
    return (
        <div className="auth-container">
            <div className="bg-glow"></div>
            <div className="auth-card glass">
                <h2 className="auth-title">Create Patient Record For Waiting List</h2>
                <p className="auth-subtitle">Register to join the MediQueue network</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" className="form-control" placeholder="Enter your age" value={age} onChange={(e) => setage(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" className="form-control" placeholder="Enter Gender" value={gender} onChange={(e) => setgender(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="text" className="form-control" placeholder="Enter Mobile Number" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Symptoms</label>
                        <input type="text" className="form-control" placeholder="Enter Symptoms" value={symptoms} onChange={(e) => setsymptoms(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Pain Level</label>
                        <input type="text" className="form-control" placeholder="Enter Pain Level" value={painlevel} onChange={(e) => setpainlevel(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter Address" value={address} onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn-primary w-100">Create Patient Record</button>
                </form>
            </div>
        </div>
    )
}
export default Triage;