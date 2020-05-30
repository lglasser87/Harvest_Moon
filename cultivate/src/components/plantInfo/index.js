import React from "react";
// import { Container, Row, Col } from "./components/grid";
import "./style.css";

//plant card
    //name
    //description
    //season
    //getting started
    //how to maintain
    //rotate w/
    //image?

function PlantCard({ title, image, description, season, rotate, start, maintain }) {
    //need to make components for each part of card?
    return (
        <div class="jumbotron class-container">
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <img className="card-img" src={image} alt="user thumbnail" />
                {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
            </div>
            <div>
                <h3>Description: {description}</h3>
            </div>
            <div>
                <h3>Season: {season}</h3>
            </div>
            <div>
                <h3>Rotate with: {rotate}</h3>
            </div>
            <div>
                <h3>Getting Started: {start}</h3>
            </div>
            <div>
                <h3>How to Maintain: {maintain}</h3>
            </div>
        </div>
    );
}

export default PlantCard;