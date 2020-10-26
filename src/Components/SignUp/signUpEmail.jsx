import React, { useState } from "react";
import "./signUpEmail.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
      textAlign: "center",
    },
  },
}));

export default function SignUpEmail(props) {
  const classes = useStyles();
  const [isError, setError] = useState(false);

  function submitHandler() {
    // Validate
    if (props.signUpData.email.length < 6) setError(true);
    else {
      props.history.push("/signUp/2");
    }
  }
  props.setPageNo(1);

  return (
    <div className="signUpEmail">
      <div className="progress__bar">
        <div className="email__icon current">
          <MailIcon />
        </div>
        <div className="horizontal__line"></div>
        <div className="profile__icon">
          <AccountCircleIcon onClick={submitHandler} />
        </div>
        <div className="horizontal__line"></div>
        <div className="platform__icon">
          <SchoolIcon onClick={submitHandler} />
        </div>
      </div>
      <h2>Your Email Address</h2>
      <form
        className={classes.root}
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        <TextField
          id="standard-basic"
          label="someone@domaim.edu"
          value={props.signUpData.email}
          // defaultValue="someone@domain.com"
          variant="outlined"
          type="email"
          error={isError}
          helperText={isError ? "Enter a valid email address" : null}
          onChange={(event) =>
            props.setSignUpData({
              ...props.signUpData,
              email: event.target.value,
            })
          }
        />
      </form>
      <Button variant="primary" onClick={submitHandler}>
        Next
      </Button>
      <h6>
        Already have an account, <Link to="/login">Sign In Here</Link>
      </h6>
    </div>
  );
}
