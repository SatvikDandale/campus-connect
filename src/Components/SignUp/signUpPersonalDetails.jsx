import React from 'react';
import TextField from "@material-ui/core/TextField";
import { Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './signUpPersonalDetails.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '15ch',
        textAlign: "center" 
      },
    },
  }));

  const useStyles2 = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '33ch',
        display: 'flex',
        textAlign: "center" 
      },
    },
  }));


export default function SignUpPersonalDetails(props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    return (
        <div className="signUpPersonalDetails">
            <h2>Your Personal Details</h2>
            <form className={classes.root}>
                <div>
                    <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="outlined"
                    />

                    <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="outlined"
                />
                </div>
                
                <div className={classes2.root}>
                    <TextField
                    id="standard-basic"
                    label="Unique Username"
                    variant="outlined"
                    />
                </div>

                <div className={classes2.root}>
                    <TextField
                    id="standard-basic"
                    label="*******"
                    variant="outlined"
                    />
                </div>
                    
            </form>
            <Button variant="primary" onClick={()=> {
                props.setPageNo(3)
            }}>Next</Button>
            <h6>Already have an account, <Link to="/login">Sign In Here</Link></h6>
        </div>
    )
}
