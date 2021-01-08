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
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import ImageUploadForm from "../ImageUploadForm/imageUploadForm";

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
export default function SignUpCollegeDetails(props) {
  if (
    props.signUpData.userName.length === 0 ||
    props.signUpData.password.length === 0
  )
    props.college ? props.history.push("/signUp/college/2") : props.committee
      ? props.history.push("/signUp/committee/2")
      : props.history.push("/signUp/2");

  const classes = useStyles();
  
  const classes2 = useStyles2();
  const [year, setYear] = React.useState(props.signUpData.year);
  const [branch, setBranch] = React.useState(props.signUpData.branch);
  const [image, setImage] = React.useState(null);
  const [form, setForm] = React.useState(false);
  const [email, setEmail] = React.useState("")

  const handleFormClose = () => {
    setForm(false);
  };

  const onImageSubmit = (img) => {
    setImage(img);
    setForm(false);
    console.log(img);
  };

  function validate() {
    if (!props.committee && year === "") return false;
    if (!props.committee && branch === "") return false;
    if (image === null) return false;
    if (props.college && email === "") return false;
    return true;
  }

  function submitHandler() {
    if (!validate()) {
      alert("Incomplete information. Try again.");
      return;
    }
    let collegeDetails;
    if (props.college) {
      collegeDetails = {
        image,
        domainName: email
      }
    }
    else if (!props.committee) {
      collegeDetails = {
        year,
        branch,
        image,
      };
    } else {
      collegeDetails = {
        image,
      };
    }
    props.onSubmit(collegeDetails, props.committee, props.college);
  }
  props.setPageNo(3);

  return (
    <div className="signUpCollegeDetails">
      <div className="progress__bar">
        <div className="email__icon current">
          <MailIcon
            onClick={() => {
              props.setPageNo(1);
              props.college ? props.history.push("/signUp/college/1") : props.committee
                ? props.history.push("/signUp/committee/1")
                : props.history.push("/signUp/1");
            }}
          />
        </div>
        <div className="horizontal__line current"></div>
        <div className="profile__icon current">
          <AccountCircleIcon
            onClick={() => {
              props.setPageNo(2);
              props.college ? props.history.push("/signUp/college/2") : props.committee
                ? props.history.push("/signUp/committee/2")
                : props.history.push("/signUp/2");
            }}
          />
        </div>
        <div className="horizontal__line current"></div>
        <div className="platform__icon current">
          <SchoolIcon />
        </div>
      </div>
      <h2>
        {props.college
          ? "College Logo"
          : props.committee
          ? "Committee Logo"
          : "College Details"}
      </h2>

      <form
        className={classes.root + " formCollege"}
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        <div className="image__upload">
          <img
            src={image ? URL.createObjectURL(image) : defaultProfileImage}
            alt="profile"
          />
          <ImageUploadForm
            show={form}
            handleClose={handleFormClose}
            onImageSubmit={onImageSubmit}
          />
          <Edit
            onClick={() => {
              setForm(true);
            }}
          />
        </div>

        {props.college && (
          <div className={classes2.root + " inputCollege"}>
            <p>Add the email ID format the students of your college use for them to sign up securely.</p>
            <TextField
              label="Example: @vit.edu"
              variant="outlined"
              value={email}
              type="text"
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>
        )}

        {!props.committee && (
          <>
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
          </>
        )}
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
