import { useState } from "react";
import "../styles/Login.css";

function Login({ setPortal }) {

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {

    e.preventDefault();

    if (
      role === "hr" &&
      email === "hr@company.com" &&
      password === "hr123"
    ) {
      setPortal("hr");
    }

    else if (
      role === "applicant" &&
      email === "applicant@gmail.com" &&
      password === "app123"
    ) {
      setPortal("applicant");
    }

    else {
      alert("Invalid Role or Credentials");
    }

  };

  return (

    <div className="login-container">

      <h1>Smart Job Portal & ATS</h1>

      <form onSubmit={login}>

        <h2>Login</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >

          <option value="">Select Role</option>

          <option value="hr">HR</option>

          <option value="applicant">Applicant</option>

        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">

          Login

        </button>

      </form>

    </div>

  );

}

export default Login;