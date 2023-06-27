import React from "react";

import googleAuthService from "../../services/google-auth";
import { GoogleLogin } from "@react-oauth/google";

const GoogleSignInButton = () => {
  const handleGoogleSignin = (credentials) => {
    googleAuthService(credentials.credential);
  };

  const handleError = ()=>{
    console.log('Login Failed');
  }
  return (
    <GoogleLogin
      onSuccess={handleGoogleSignin}
      onError={handleError}
      useOneTap
    />
  );
};

export default GoogleSignInButton;
