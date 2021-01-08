import React, { useState } from "react";
import "./signUpEmail.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import { verifyAndGetCollege } from "../../Services/userService";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  const [email, setEmail] = useState(props.signUpData.email);
  const [open, setOpen] = useState(false);
  const [college, setCollege] = useState("");
  const [loading, setLoading] = useState(false);

  function acceptCollege() {
    setOpen(false);
    setLoading(false);
    submitHandler(college);
  }

  function getCollegeName() {
    setLoading(true);
    if (email.length < 6 || !email.includes("@")) {
      setError(true);
      alert("Enter valid email");
      setLoading(false);
      return;
    }
    !props.college ? verifyAndGetCollege(email)
      .then((collegeName) => {
        setCollege(collegeName);
        setOpen(true);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        if (error.response && error.response.status === 404) {
          alert(
            "No college with this email found with us.\nRequest your college representative to get started on our platform."
          );
        }
        setError(true);
      }) : acceptCollege();
  }

  function submitHandler(collegeName) {
    // Validate
    if (email.length < 6) setError(true);
    else {
      console.log("HELLO");
      props.setSignUpData({
        ...props.signUpData,
        collegeName,
        email,
      });
      if (props.college) props.history.push("/signUp/college/2");
      else if (props.committee) props.history.push("/signUp/committee/2");
      else props.history.push("/signUp/2");
    }
  }
  props.setPageNo(1);

  return (
    <div className="signUpEmail">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          College Name Verification
        </DialogTitle>
        <DialogContentText id="alert-dialog-slide-description">
          Is your college name {college}? Please be sure to verify since you
          cannot change it after you sign up.
        </DialogContentText>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              setLoading(false);
            }}
            color="primary"
          >
            Disagree
          </Button>
          <Button onClick={acceptCollege} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
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
        className={classes.root + " email__form"}
        onSubmit={(event) => {
          event.preventDefault();
          // submitHandler();
          getCollegeName();
        }}
      >
        <TextField
          id="standard-basic"
          label="someone@domain.edu"
          value={email}
          // defaultValue="someone@domain.com"
          variant="outlined"
          type="email"
          error={isError}
          helperText={isError ? "Enter a valid email address" : null}
          onChange={(event) => {
            setEmail(event.target.value);
            // props.setSignUpData({
            //   ...props.signUpData,
            //   email: event.target.value,
            // })
          }}
        />
        {loading && <CircularProgress />}
      </form>
      <Button variant="primary" onClick={getCollegeName}>
        Next
      </Button>
      <h6>
        Already have an account,{" "}
        <Link className="link" to={props.committee ? "/login/committee" : "/login"}>
          Sign In Here
        </Link>
      </h6>
    </div>
  );
}
