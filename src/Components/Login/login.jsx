import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./login.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login__component">
      <h2>Sign in to your account</h2>
      <h4>Enter your email-ID and password</h4>
      <form className="login__form">
        <TextField
          id="standard-basic"
          label="someone@domain.com"
          // defaultValue="someone@domain.com"
          variant="outlined"
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
          <Button variant="primary" size="sm">
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
