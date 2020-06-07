import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar"

function Login() {
    // Set the appropriate functions and calls to ensure a login is properly made.

    return (
        <Container fluid>
            <Navbar />
            <Row>
                <p>user name</p>
                <p>password</p>
                <button>submit</button>
            </Row>
        </Container>
    )
    
}

export default Login;