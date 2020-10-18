import React from 'react';
import './signUpEmail.css';
import TextField from "@material-ui/core/TextField";
import { Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '30ch',
        textAlign: "center" 
      },
    },
  }));

export default function SignUpEmail(props) {
    const classes = useStyles();
    return (
        <div className="signUpEmail"> 
           <h2>Your University Email</h2>
           <form className={classes.root}>
            <TextField
            id="standard-basic"
            label="someone@domain.edu"
            // defaultValue="someone@domain.com"
            variant="outlined"
            />
           </form>
           <Button variant="primary" onClick={()=> {
                props.setPageNo(2)
            }}>Next</Button>
            <h6>Already have an account, <Link to="/login">Sign In Here</Link></h6>
        </div>
    )
}
