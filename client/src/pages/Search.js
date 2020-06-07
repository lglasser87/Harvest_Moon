import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";

function Search() {
    // All functions to make search work go here

    return (
        <Container fluid>
            <Navbar />
            <Row>
                <p>Search</p>
                <button>Submit</button>
            </Row>
        </Container>
    )
}

export default Search;