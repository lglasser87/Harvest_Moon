import { List, ListItem } from "../components/userList";
import { PlantCard } from "../components/plantInfo";
import { DeleteBtn } from "../components/deleteBtn";
import { Container, Row, Col } from "./components/grid";

//nav bar

//title: "My List"

//plant cards
    //name
    //description
    //season
    //getting started
    //how to maintain
    //rotate w/
    //image?
    //delete btn

//footer

<Container fluid>
    <Row>
        <Col size="md-12">
            <h1>My List</h1>
        </Col>
    </Row>

    <Row>
        <Col size="md-8">
            <div>
            <List>
                <ListItem>
                    <PlantCard />
                </ListItem>
            </ List>
            </div>
        </Col>
    </Row>

    <Row>
        <Col size="md-8">
            <DeleteBtn />
        </Col>
    </Row>
</Container>