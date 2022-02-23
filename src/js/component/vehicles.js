import React, { useContext } from "react";
import { Card, Row, Col} from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    return (
    <>   
    <h1>StarWars vehicles</h1>
    <Row xs={1} md={5} className="g-4">
        {store.vehicles.map((vehicles, i) => {
        return (
            <Col key={i}>
                <Card border="primary" bg="secondary">
                    <Card.Img variant="top" src={"https://starwars-visualguide.com/assets/img/vehicles/"+vehicles.uid+".jpg"} />
                    <Card.Body>
                    <Card.Title>{vehicles.name}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    </Card.Body>
                    <Link to={"/vehiclesSingle/" + vehicles.uid}>
								<button className="btn btn-primary">Learn More</button>
					</Link>
								<button
								type="button" onClick = {() => {actions.setFavorites(vehicles.name)}
                                }><i className="fa fa-star-o"/></button>
                </Card>
            </Col>
            );
        })}
    </Row>
    </>
    );
    
} 

export default Vehicles;
