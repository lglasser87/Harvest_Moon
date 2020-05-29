import React from "react";
import "./style.css";

//Login form: 
    //username
    //password
    //login btn

    export function LoginUsernameInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="login-username" {...props} />
          </div>
        );
      }
      
    export function LoginPasswordInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="login-password" {...props} />
          </div>
        );
      }
      
    export function LoginBtn(props) {
        return (
          <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
          </button>
        );
      }