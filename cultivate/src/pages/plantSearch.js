import { SearchInput, SearchDropdown, SearchBtn } from "../components/plantSearchForm";
import { AddBtn } from "../components/addBtn";

//nav bar

//title: "Search"

//search form

//form submit btn onclick --> plant cards
    //name
    //description
    //season
    //image?
    //view --> plant info page
    //add btn

//footer

<Container fluid>
    <Row>
        <Col size="md-12">
            <h1>Plant Search</h1>
        </Col>
    </Row>

    <Row>
        <Col size="md-4">
            <SearchInput />
        </Col>
        <Col size="md-4">
            <SearchDropdown />
        </Col>
        <Col size="md-4">
            <SearchBtn />
        </Col>
    </Row>
</Container>
