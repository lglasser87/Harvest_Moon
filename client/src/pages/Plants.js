import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import API from "../utils/API"
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List"

function Plants() {
    // Set all functions and axios calls to display the right information
    const [plants, setPlants] = useState([])

    // Load all the plants and store them with setPlants
    useEffect(() => {
        loadPlants();
    }, []);

    // Loads all Plants and sets them to Plants
    function loadPlants() {
        API.getPlants()
            .then(res =>
                setPlants(res.data)
                )
            .catch(err => {
                console.log(err)});
    };

    return (
        <Container fluid>
            <Navbar />
            <Row>
                <Jumbotron>
                    <h1>Plants List</h1>
                </Jumbotron>
                {plants.length ? (
                    <List>
                        {plants.map(plant => (
                            <ListItem key={plant._id}>
                                <Link to={"/plants/" + plant._id}>
                                    <strong>
                                        {plant.name}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Row>
        </Container>
    );
}

export default Plants;