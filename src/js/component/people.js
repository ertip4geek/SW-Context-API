import React, { useContext } from "react";
import { Card, Row, Col} from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
    const { store, actions } = useContext(Context);
    return (
    <>   
    <h1>StarWars characters</h1>
    <Row xs={1} md={5} className="g-4">
        {store.people.map((people, i) => {
        return (
            <Col key={i}>
                <Card border="primary" bg="secondary">
                    <Card.Img variant="top" src={"https://starwars-visualguide.com/assets/img/characters/"+people.uid+".jpg"} />
                    <Card.Body>
                    <Card.Title>{people.name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    </Card.Body>
                    <Link to={"/peopleSingle/" + i}>
								<button className="btn btn-primary">Learn More</button>
					</Link>
								<button
								type="button"></button>
                </Card>
            </Col>
            );
        })}
    </Row>
    </>
    );
    
} 

export default People;
