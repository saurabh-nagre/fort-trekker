import React, { useState } from "react";
// import Typography from '../../components/typography';
import "./styles.css";
import Logo from "../../assets/fort_trekker.png";
import LoginForm from "./login.form";
import {
  SIGNUP_HEAD,
  LOGIN_HEAD,
  LOGIN_DESC,
  SIGNUP_DESC,
  SIGNUP_TEXT,
  LOGIN_TEXT,
} from "../../constants/text";
import SignupForm from "./signup.form";
import GoogleSignInButton from "../../components/buttons/googleSignin";
const Login = () => {
  const [shouldShowLogin, setShouldShowLogin] = useState(true);

  const handleChange = () => {
    setShouldShowLogin((v) => !v);
  };

  return (
    <div className="row vh-100">
      <div className="left-half d-flex flex-column justify-content-center align-items-center">
        <img
          src={Logo}
          alt="Logo"
          className="logo position-absolute top-0 start-0 mb-5"
        />

        <h1>{shouldShowLogin ? LOGIN_TEXT : SIGNUP_TEXT}</h1>

        <GoogleSignInButton />

        <p>or</p>
        {shouldShowLogin ? <LoginForm /> : <SignupForm />}

      </div>
      <div className="right-half d-flex flex-column justify-content-center align-items-center">

        <h1 className="text-light">
          {shouldShowLogin ? SIGNUP_HEAD : LOGIN_HEAD}
        </h1>
        <p className="text-light">
          {shouldShowLogin ? SIGNUP_DESC : LOGIN_DESC}
        </p>

        <button
          onClick={handleChange}
          className="bg-light rounded-pill p-1 col-4 border border-light m-4"
        >
          {shouldShowLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
