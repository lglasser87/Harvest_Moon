import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";

function Plants() {
    // Set all functions and axios calls to display the right information

    return (
        <Container fluid>
            <Navbar />
            <Row>
                <ul>
                    <li>
                        Plant    
                    </li>
                    <li>
                        Plant
                    </li>
                    <li>
                        Plant
                    </li>
                </ul>
            </Row>
        </Container>
    )
}

export default Plants;