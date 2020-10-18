import React from 'react';
import './signUpCollegeDetails.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import defaultProfileImage from "../../Assets/Images/default-profile-image.jpeg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '20ch',
        textAlign: "center" 
      },
    },
  }));

export default function SignUpCollegeDetails(props) {
    const classes = useStyles();
    return (
        <div className="signUpCollegeDetails">
            <h2>College Details</h2>

            <form className={classes.root}>
                <img src={defaultProfileImage} alt="xyz" />

                <TextField id="select" label="Year" select>
                    <MenuItem value="1">First Year</MenuItem>
                    <MenuItem value="2">Second Year</MenuItem>
                    <MenuItem value="3">Third Year</MenuItem>
                    <MenuItem value="4">Final Year</MenuItem>
                    <MenuItem value="5">Year Down Bonus Year</MenuItem>
                    <MenuItem value="6">Summer Term</MenuItem>
                </TextField>

                <TextField id="select" label="Branch" select>
                    <MenuItem value="1">Computer Engineering</MenuItem>
                    <MenuItem value="2">Mechanical Engineering</MenuItem>
                    <MenuItem value="3">EnTc Engineering</MenuItem>
                    <MenuItem value="4">Civil Engineering</MenuItem>
                    <MenuItem value="5">IT</MenuItem>
                    <MenuItem value="6">DESH</MenuItem>
                </TextField>

            </form>
            
            
            <Button variant="primary" onClick={()=> {
                props.setPageNo(3)
            }}>Let's Go</Button>
            <h6>Already have an account, <Link to="/login">Sign In Here</Link></h6>
            
        </div>
    )
}
