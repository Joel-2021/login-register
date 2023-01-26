import React from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
      <h1 className="header">Register</h1>
      <form action="submit" className="register-form">
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="re-write password" />
        <div className="fullname">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <span>
          <input type="radio" id="male" name="male" />
          <label for="male">Male</label>
          <input type="radio" id="female" name="female" />
          <label for="female">Female</label>
        </span>

        <select name="country" id="country">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Argentina">Argentina</option>
          <option value="Canada">Canada</option>
        </select>
        <button>Register</button>
      </form>
      <p>
        Already a user. Click{" "}
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          here
        </span>
      </p>
    </div>
  );
};

export default Register;
