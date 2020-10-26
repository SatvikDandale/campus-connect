import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultProfileImage from "../../Assets/Images/default-profile-image.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SchoolIcon from "@material-ui/icons/School";
import "./signUpCollegeDetails.css";
import { FormControl, InputLabel, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
      textAlign: "center",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "25ch",
  },
}));

export default function SignUpCollegeDetails(props) {
  if (
    props.signUpData.userName.length === 0 ||
    props.signUpData.password.length === 0
  )
    props.history.push("/signUp/2");

  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const [branch, setBranch] = React.useState("");

  function submitHandler() {
    let collegeDetails = {
      collegeName: props.signUpData.collegeDetails.collegeName,
      year,
      branch,
    };
    props.onSubmit(collegeDetails);
  }
  props.setPageNo(3);

  return (
    <div className="signUpCollegeDetails">
      <div className="progress__bar">
        <div className="email__icon current">
          <MailIcon
            onClick={() => {
              props.setPageNo(1);
              props.history.push("/signUp/1");
            }}
          />
        </div>
        <div className="horizontal__line current"></div>
        <div className="profile__icon current">
          <AccountCircleIcon
            onClick={() => {
              props.setPageNo(2);
              props.history.push("/signUp/2");
            }}
          />
        </div>
        <div className="horizontal__line current"></div>
        <div className="platform__icon current">
          <SchoolIcon />
        </div>
      </div>
      <h2>College Details</h2>

      <form
        className={classes.root}
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        <img src={defaultProfileImage} alt="profile" />

        <FormControl className={classes.formControl}>
          <InputLabel id="year-select">Year</InputLabel>
          <Select
            labelId="year-select-menu"
            id="year-select-dropdown"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <MenuItem value="First Year">First Year</MenuItem>
            <MenuItem value="Second Year">Second Year</MenuItem>
            <MenuItem value="Third Year">Third Year</MenuItem>
            <MenuItem value="Final Year">Final Year</MenuItem>
            <MenuItem value="Year Down Bonus Year">
              Year Down Bonus Year
            </MenuItem>
            <MenuItem value="Summer Term">Summer Term</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="branch-select">Branch</InputLabel>
          <Select
            labelId="branch-select-menu"
            id="branch-select-dropdown"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
          >
            <MenuItem value="Computer Engineering">
              Computer Engineering
            </MenuItem>
            <MenuItem value="Mechanical Engineering">
              Mechanical Engineering
            </MenuItem>
            <MenuItem value="EnTc Engineering">EnTc Engineering</MenuItem>
            <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
          </Select>
        </FormControl>
      </form>

      <Button
        variant="primary"
        onClick={() => {
          submitHandler();
        }}
      >
        Let's Go
      </Button>
      <h6>
        Already have an account, <Link to="/login">Sign In Here</Link>
      </h6>
    </div>
  );
}
