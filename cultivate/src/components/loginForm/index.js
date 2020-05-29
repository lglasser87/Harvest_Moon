import React from "react";
import "./style.css";

//Login form: 
    //username
    //password
    //login btn

    export function Input(props) {
        return (
          <div className="form-group">
            <input className="form-control" {...props} />
          </div>
        );
      }
      
    export function Input(props) {
        return (
          <div className="form-group">
            <input className="form-control" {...props} />
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