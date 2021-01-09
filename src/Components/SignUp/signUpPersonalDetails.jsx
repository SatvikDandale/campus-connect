import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import "./signUpPersonalDetails.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "15ch",
      textAlign: "center",
    },
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "33ch",
      display: "flex",
      textAlign: "center",
    },
  },
}));

export default function SignUpPersonalDetails(props) {
  if (props.signUpData.email.length === 0){
    props.college ? props.history.push("/signUp/college/1") : props.committee ? props.history.push("/signUp/committee/1") : props.history.push("/signUp/1")
  }

  const classes = useStyles();
  const classes2 = useStyles2();
  const [errors, setErrors] = useState({
    userName: null,
    password: null,
    firstName: null,
    lastName: null,
  });
  const [values, setValues] = useState({
    userName: props.signUpData.userName,
    password: props.signUpData.password,
    firstName: props.signUpData.firstName,
    lastName: props.signUpData.lastName,
  });

  function validate() {
    let isError = false;
    let tempErrors = {
      firstName: null,
      lastName: null,
      userName: null,
      password: null,
    };

    if (values.firstName.length < 3) {
      isError = true;
      tempErrors.firstName = "Please check";
    }
    if (values.lastName.length < 3 && !props.committee) {
      isError = true;
      tempErrors.lastName = "Please check";
    }
    if (values.userName.length < 6) {
      isError = true;
      tempErrors.userName = "Must be at least 6 characters";
    }
    if (values.password.length < 6) {
      isError = true;
      tempErrors.password = "Must be at least 6 characters";
    }
    setErrors(tempErrors);

    return !isError;
  }

  function submitHandler() {
    if (!validate()) {
      console.log("Validation Error");
      return;
    }

    props.setSignUpData({
      ...props.signUpData,
      ...values,
    });
    if (props.college) props.history.push("/signUp/college/3")
    else if (props.committee) props.history.push("/signUp/committee/3");
    else props.history.push("/signUp/3");
  }
  props.setPageNo(2);

  return (
    <div className="signUpPersonalDetails">
      <div className="progress__bar">
        <div className="email__icon current">
          <MailIcon
            onClick={() => {
              props.setPageNo(1);
              props.college ? props.history.push("/signUp/college/1") : props.committee ? props.history.push("/signUp/committee/1") : props.history.push("/signUp/1")
            }}
          />
        </div>
        <div className="horizontal__line current"></div>
        <div className="profile__icon current">
          <AccountCircleIcon />
        </div>
        <div className="horizontal__line"></div>
        <div className="platform__icon">
          <SchoolIcon />
        </div>
      </div>
      <h2>Your Personal Details</h2>
      <form
        className={classes.root}
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        {props.committee ? (
          <div className={classes2.root}>
            <TextField
              label={`${props.college ? "College Name" : "Committee Name"}`}
              variant="outlined"
              value={values.firstName}
              onChange={(event) =>
                setValues({
                  ...values,
                  firstName: event.target.value,
                })
              }
              error={errors.firstName !== null}
              helperText={errors.firstName ?? ""}
            />
          </div>
        ) : (
          <div>
            <TextField
              label="First Name"
              variant="outlined"
              value={values.firstName}
              onChange={(event) =>
                setValues({
                  ...values,
                  firstName: event.target.value,
                })
              }
              error={errors.firstName !== null}
              helperText={errors.firstName ?? ""}
            />

            <TextField
              label="Last Name"
              variant="outlined"
              value={values.lastName}
              onChange={(event) =>
                setValues({
                  ...values,
                  lastName: event.target.value,
                })
              }
              error={errors.lastName !== null}
              helperText={errors.lastName ?? ""}
            />
          </div>
        )}

        <div className={classes2.root}>
          <TextField
            label={`${props.committee ? "Committee Username" : "Personal Username"}`}
            variant="outlined"
            value={values.userName}
            type="text"
            onChange={(event) =>
              setValues({
                ...values,
                userName: event.target.value,
              })
            }
            error={errors.userName !== null}
            helperText={errors.userName ?? ""}
          />
        </div>

        <div className={classes2.root}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={(event) =>
              setValues({
                ...values,
                password: event.target.value,
              })
            }
            error={errors.password !== null}
            helperText={errors.password ?? ""}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                props.setSignUpData({
                  ...props.signUpData,
                  ...values,
                });

                submitHandler();
              }
            }}
          />
        </div>
        <Button
          variant="primary"
          onClick={() => {
            submitHandler();
          }}
        >
          Next
        </Button>
      </form>
      <h6>
        Already have an account?
        <Link
          className="link"
          to={props.committee ? "/login/committee" : "/login"}
        >
          {" "}
          Sign In Here
        </Link>
      </h6>
    </div>
  );
}
