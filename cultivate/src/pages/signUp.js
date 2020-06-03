import React from "react";
import { SignUpFirstNameInput, SignUpLastNameInput, SignUpEmailInput, SignUpUsernameInput, SignUpPasswordInput, SignUpPasswordVerifyInput, SignUpBtn } from "./components/signUpForm";
import { Container, Row, Col } from "./components/grid";

//welcome header: "Welcome to Cultivate" & login/ register btns

//title: "Sign Up"

//Signup form:
    //first name
    //last name
    //email
    //username
    //password
    //verify password
    //sign up btn

//footer

function Signup() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Sign Up</h1>
                </Col>
            </Row>

            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpFirstNameInput />
                </Col>
            </Row>
            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpLastNameInput />
                </Col>
            </Row>
            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpEmailInput />
                </Col>
            </Row>
            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpUsernameInput />
                </Col>
            </Row>
            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpPasswordInput />
                </Col>
            </Row>
            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpPasswordVerifyInput />
                </Col>
            </Row>
            <Row>
                <Col size="md-8 align-self-center">
                    <SignUpBtn />
                </Col>
            </Row>
        </Container>
    );
}

export default Signup();


