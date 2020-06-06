import React from "react";
import { LoginForm } from "./components/loginForm";
import { Container, Row, Col } from "./components/grid";

//welcome header: "Welcome to Cultivate" & login/ register btns

//title: "Login"

//Login form: 
    //username
    //password
    //login btn --> dashboard page if successful

//footer

function Login () {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Login</h1>
                </Col>
            </Row>

            <Row>
                <Col size="md-8 align-self-center">
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Login();
