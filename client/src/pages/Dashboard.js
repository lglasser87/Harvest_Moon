import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid"
import Jumbotron from "../components/Jumbotron"
import Navbar from "../components/Navbar"

function Dashboard() {
    // Set all states, useEffects, and functions that will operate with the interactive website.

    // Code for the component
    return (
    <Container fluid>
        <Navbar />
        <Row>
            <Jumbotron>
                <h1>Weather info goes here</h1>
            </Jumbotron>
        </Row>
        <Row>
            <Col size="md-6">
                <p>Weather day</p>
                <p>Weather day</p>
                <p>Weather day</p>
                <p>Weather day</p>
                <p>Weather day</p>
                <p>Weather day</p>
                <p>Weather day</p>
            </Col>
            <Col size="md-6 sm-12">
                <h2>Stuff will go here</h2>
            </Col>
        </Row>
    </Container>
    )
}

export default Dashboard;