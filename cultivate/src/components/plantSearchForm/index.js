import React from "react";
// import { Container, Row, Col } from "./components/grid";
// import "./style.css";

//search form
    //name
    //season... checkbox/ drop down?
    //type of plant (fruit, veggie, herb, etc.)... checkbox/ drop down?
    //submit btn

export function SearchInput(props) {
    return (
      <div className="form-group">
        <input className="form-control" id="search-name" {...props} />
      </div>
    );
  }

  export function SearchDropdown(props) {
    return (
        <div class='dropdown'>
            <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div>
            
            <div class='menu pointerCursor hide'>
                <div class='option' id='option1' {...props}>Option 1</div>
                <div class='option' id='option2' {...props}>Option 2</div>
                <div class='option' id='option3' {...props}>Option 3</div>
                <div class='option' id='option4' {...props}>Option 4</div>
            </div>

	    </div>
    );
  }
  
  export function SearchBtn(props) {
    //only works if SearchInput and/or SearchDropdown are used
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success" id="search-btn">
        {props.children}
      </button>
    );
  }