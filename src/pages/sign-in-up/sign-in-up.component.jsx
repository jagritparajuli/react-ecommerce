import React, { Component } from "react";
import "./sign-in-up.styles.scss";
import SignIn from "./../../components/sign-in/sign-in.component";

export const SignInAndSignUpPage = (props) => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};
