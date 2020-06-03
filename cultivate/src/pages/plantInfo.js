import { PlantCard } from "./components/plantInfo";
import { AddBtn } from "./components/addBtn";
import { Container, Row, Col } from "./components/grid";

//nav bar

//title: "Info"

//plant card
    //name
    //description
    //season
    //getting started
    //how to maintain
    //rotate w/
    //image?
    //add btn

//footer

function PlantInfo() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Plant Info</h1>
                </Col>
            </Row>

            <Row>
                <Col size="md-8">
                    <PlantCard />
                </Col>
            </Row>

            <Row>
                <Col size="md-8">
                    <AddBtn />
                </Col>
            </Row>
        </Container>
    );
}

export default PlantInfo();
