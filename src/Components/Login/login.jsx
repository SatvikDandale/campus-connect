import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function Login(props) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [userName, setUserName] = React.useState("");
  const [userNameError, setUserNameError] = React.useState("");
  const [userPasswordError, setUserPasswordError] = React.useState("");

  const handleChange = (prop) => (event) => {
    // validate();
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    setUserNameError("");
    setUserPasswordError("");
    // console.log(userName.length);
    if (userName.length === 0) {
      setUserNameError("Username cannot be blank");
      return false;
    }
    if (userName.length < 6) {
      setUserNameError("Username must be of at least 6 characters");
      return false;
    }
    if (values.password.length < 6) {
      // console.log("PASSWORD ERROR");
      setUserPasswordError("Password must be of at least 6 characters");
      return false;
    }
    setUserNameError("");
    setUserPasswordError("");
    return true;
  };

  return (
    <div className="login__component">
      <h2>Sign in to your account</h2>
      <h4>Enter your email-ID and password</h4>
      <form className="login__form">
        <TextField
          id="standard-basic"
          label="Unique Username"
          variant="outlined"
          value={userName}
          onChange={(event) => {
            // validate();
            setUserName(event.target.value);
          }}
          error={userNameError === "" ? false : true}
          helperText={userNameError}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            // helperText={"Some error"}
            error={userPasswordError === "" ? false : true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <div className="login__button">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              // console.log(userName);
              // console.log(values.password);
              if (validate()) {
                props.login(userName, values.password);
              }
            }}
          >
            Sign In!
          </Button>
        </div>
      </form>
      <h6 className="signUp__prompt">
        Don't have an account yet? <Link to="/signUp">Create one!</Link>
      </h6>
    </div>
  );
}
