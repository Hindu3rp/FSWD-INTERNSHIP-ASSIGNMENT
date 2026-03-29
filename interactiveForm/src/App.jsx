import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    setSuccess("");

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    // Password validation
    if (form.password.length < 6) {
      newErrors.password = "Password must be 6+ characters";
    }

    setErrors(newErrors);

    // Success
    if (Object.keys(newErrors).length === 0) {
      setSuccess("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        
        <h2>Interactive Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />
        <p className="error">{errors.name}</p>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <button type="submit">Submit</button>

        <p className="success">{success}</p>

      </form>
    </div>
  );
}

export default App;