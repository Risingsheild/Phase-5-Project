import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'


function Login({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState([]);
  const [errors, setErrors] = useState([]);
  const [cPassword, setcPassword] = useState("");
  const [docLogin, setDocLogin] = useState(true);
  const [patLogin, setPatLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log(cPassword);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    age: "",
    doc: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((loginData) => ({ ...loginData, [name]: value }));
  }

  function handleSignupChange(e) {
    const { name, value } = e.target;
    setSignupData((signupData) => ({ ...signupData, [name]: value }));
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch(docLogin ? "/doclogin" : "/patientlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginData),
    }).then((r) => {
      if (r.ok) {
        r.json()
          .then((user) => {
            setUser(user);
          })
          .then(() => navigate("/"));
      } else {
        r.json().then((j) => setErrors(j.errors));
      }
    });
  }

  function handleDocClick() {
    setDocLogin(true);
    setPatLogin(false);
    setLoginData({ email: "", password: "" });
    setError([]);
  }

  function handlePatClick() {
    setDocLogin(false);
    setPatLogin(true);
    setLoginData({ email: "", password: "" });
    setError([]);
  }

  function handleSignupClick() {
    setDocLogin(false);
    setPatLogin(false);
    setLoginData({ name: "", email: "", password: "", birthdate: "" });
    setErrors([]);
  }

  return (
    <div className="login">
      <figure className="login-form">
        <div className="selector">
          <button
            className={docLogin ? "active" : null}
            onClick={handleDocClick}
          >
            Doctor
          </button>
          <button
            className={patLogin ? "active" : null}
            onClick={handlePatClick}
          >
            Patient
          </button>
          <button
            className={docLogin || patLogin ? null : "active"}
            onClick={handleSignupClick}
          >
            SignUp Here
          </button>
        </div>
        {docLogin || patLogin ? (
          <form className="group" onSubmit={handleLoginSubmit}>
            <label className="label">
              {docLogin ? "Employee" : "Patient" } Email:
            </label>
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={loginData.email}
            ></input>
            <br></br>
            <br></br>
            <br></br>
            <label className="label">Password:</label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={loginData.password}
            ></input>
            <br></br>
            {error ? <p className="error">{error}</p> : null}
            <br></br>
            <br></br>
            <button
              className="button"
              onClick={handleLoginSubmit}
              value="login"
            >
              Login
            </button>
            <br></br>
            <br></br>
          </form>
        ) : (
          <form className="group">
            <label className="label">Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              onChange={handleSignupChange}
              value={signupData.name}
            ></input>
            <br></br>
            <br></br>
            <label className="label">Email:</label>
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              onChange={handleSignupChange}
              value={signupData.email}
            ></input>
            <br></br>
            <br></br>
            <label className="label">Age:</label>
            <input
              className="input"
              type="text"
              name="age"
              id="age"
              onChange={handleSignupChange}
              value={signupData.age}
            ></input>
            <br></br><br></br>
            <label className="label">Birthdate:</label>
            <input
              className="input"
              type="text"
              placeholder="mm/dd/yyyy"
              name="birthdate"
              id="birthdate"
              onChange={handleSignupChange}
              value={signupData.birthdate}
            ></input>
            <br></br><br></br>
            <label className="label">Password:</label>
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              onChange={handleSignupChange}
              value={signupData.password}
            ></input>
            <br></br><br></br>
            <label className="label">Confirm Password:</label>
            <input
              className="input"
              type="password"
              onChange={(e) => setcPassword(e.target.value)}
            ></input>
            {errors ? errors.map((e) => <p className="error">{e}</p>) : null}
            <br></br>
            <br></br>
            <br></br>
            <button className="button" onClick={handleSignupClick}>SignUp</button>
          </form>
        )}
      </figure>
    </div>
  );
}

export default Login;
