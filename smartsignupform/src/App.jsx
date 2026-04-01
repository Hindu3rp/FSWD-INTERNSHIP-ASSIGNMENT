import { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const passwordStrength = () => {
    let score = 0;
    if (form.password.length > 5) score++;
    if (/[A-Z]/.test(form.password)) score++;
    if (/[0-9]/.test(form.password)) score++;
    if (/[^A-Za-z0-9]/.test(form.password)) score++;

    return score;
  };

  const validate = () => {
    let newErrors = {};

    if (form.name.length < 3)
      newErrors.name = "Enter valid name";

    if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (form.password.length < 6)
      newErrors.password = "Weak password";

    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords not matching";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSuccess(true);
  };

  const strength = passwordStrength();

  return (
    <div className="bg">
      <div className="card">
        {success ? (
          <div className="success">
            <h2>🎉 Welcome!</h2>
            <p>Your account created successfully</p>
          </div>
        ) : (
          <>
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <input
                  name="name"
                  onChange={handleChange}
                  required
                />
                <label>Name</label>
                <span>{errors.name}</span>
              </div>

              <div className="field">
                <input
                  name="email"
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
                <span>{errors.email}</span>
              </div>

              <div className="field">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  required
                />
                <label>Password</label>
                <button
                  type="button"
                  className="show"
                  onClick={() => setShow(!show)}
                >
                  👁️
                </button>

                <div className="strength">
                  <div className={`bar s${strength}`}></div>
                </div>

                <span>{errors.password}</span>
              </div>

              <div className="field">
                <input
                  type="password"
                  name="confirm"
                  onChange={handleChange}
                  required
                />
                <label>Confirm Password</label>
                <span>{errors.confirm}</span>
              </div>

              <button className="signup">
                Sign Up 🚀
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}