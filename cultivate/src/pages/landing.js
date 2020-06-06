import React from "react";
import { Container, Row, Col } from "./components/grid";

//welcome header: "Welcome to Cultivate" & login/ register btns (different navbar for landing, login, signup pages?)

//title: "Cultivate"

//Login btn --> login page
//Signup btn --> sign up page

//footer

function Landing() {

    // Insert functions that will allow us to login/signup
    
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Cultivate</h1>
                </Col>
            </Row>

            <Row>
                <Col size="md-12">
                    <Row>
                        <Col size="md-4 align-self-center">
                            Login Btn
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-4 align-self-center">
                            Sign Up Btn
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;