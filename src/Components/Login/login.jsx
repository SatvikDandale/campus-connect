import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login() {
  return (
    <div className="login__component">
      <h2>Sign in to your account</h2>
      <h4>Enter your email-ID and password</h4>
      <input type="email" placeholder="someone@domain.com"></input>
      <input type="password" placeholder="*****"></input>
      <Button variant="primary" size="sm">
        Sign In!
      </Button>
      <h4>
        Don't have an account yet? <Link>Create one!</Link>
      </h4>
    </div>
  );
}
