import React from "react";
//import { Container, Row, Col } from "../components/grid";
import "./style.css";

//Signup form:
    //first name
    //last name
    //email
    //username
    //password
    //verify password
    //sign up btn
    
    export function SignUpFirstNameInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="sign-up-first-name" {...props} />
          </div>
        );
      }
    
      export function SignUpLastNameInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="sign-up-last-name" {...props} />
          </div>
        );
      }
      
    export function SignUpEmailInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="sign-up-email" {...props} />
          </div>
        );
      }
      export function SignUpUsernameInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="sign-up-username" {...props} />
          </div>
        );
      }
      
    export function SignUpPasswordInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="sign-up-password" {...props} />
          </div>
        );
      }
    
      export function SignUpPasswordVerifyInput(props) {
        return (
          <div className="form-group">
            <input className="form-control" id="sign-up-password-verify" {...props} />
          </div>
        );
      }
      
    export function SignUpBtn(props) {
        return (
          <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
          </button>
        );
      }