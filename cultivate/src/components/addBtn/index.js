import React from "react";
// import { Container, Row, Col } from "./components/grid";
import "./style.css";

function AddBtn(props) {
    return (
      <span className="add-btn" {...props} role="button" tabIndex="0">
        Add
      </span>
    );
  }
  
  export default AddBtn;