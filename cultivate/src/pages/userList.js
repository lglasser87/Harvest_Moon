import { List, ListItem } from "./components/userList";
import { PlantCard } from "./components/plantInfo";
import { DeleteBtn } from "./components/deleteBtn";
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

function UserList() {
    return(
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
                        <DeleteBtn />
                    </ List>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default UserList();

