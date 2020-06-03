import { WeatherJumboTron } from "../components/weather";
import { Container, Row, Col } from "./components/grid";

//nav bar

//title: "My Dashboard"

//left column: weather
//top right column: project & season
//bottom right column: latest (forum?) posts

//footer

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>My Dashboard</h1>
                </Col>
            </Row>

            <Row>
                <Col size="md-4">
                    <WeatherJumboTron />
                </Col>

                <Col size="md-8">
                    <Row>
                        <Col size="md-8">
                            {/*Current Project(s) & Season. Need to make these components.*/}
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-8">
                            {/*Latest Forum? Posts. Need to make these components.*/}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default Dashboard();