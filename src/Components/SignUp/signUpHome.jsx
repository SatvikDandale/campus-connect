import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signUpHome.css";

function SignUpHome(props) {
  return (
    <div className="signUpHome">
      <h2>Create a new Account</h2>
      <Button
        variant="primary"
        onClick={() => {
          props.history.push("/signUp/1");
        }}
      >
        Let's Go
      </Button>
      <h6>
        Already have an account, <Link className="link"  to="/login">Sign In Here</Link>
      </h6>
    </div>
  );
}

export default SignUpHome;
