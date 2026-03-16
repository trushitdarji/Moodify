import FormGroup from "../components/FormGroup";
import "../style/register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  }

  return (
    <div>
      <div className="register-page">
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}> 
            <FormGroup
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              lable="Username"
              placeholder="Enter your Username"
            />
            <FormGroup
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              lable="Email"
              placeholder="Enter your Email"
            />
            <FormGroup
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              lable="Pssword"
              placeholder="Enter password"
            />
            <button className="button" type="submit">
              Register
            </button>
          </form>
          <p>
            Already have an Account ? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
