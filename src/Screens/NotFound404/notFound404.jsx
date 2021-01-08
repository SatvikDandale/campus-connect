import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeError } from "../../Redux/Actions/errorAction";
import "./notFound404.css";

function NotFound404(props) {
  props.removeError();
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/4b9ba14b0f.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div className="mainbox">
      <div className="err">4</div>
      <i className="far fa-question-circle fa-spin"></i>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <Link to="/login">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeError: () => {
      return dispatch(removeError());
    },
  };
};

export default connect(null, mapDispatchToProps)(NotFound404);
