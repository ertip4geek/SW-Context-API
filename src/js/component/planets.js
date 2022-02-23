import React, { useContext } from "react";
import { Card, Row, Col} from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Planets = () => {
    const { store, actions } = useContext(Context);
    return (
    <>   
    <h1>StarWars planets</h1>
    <Row xs={1} md={5} className="g-4">
        {store.planets.map((planets, i) => {
        return (
            <Col key={i}>
                <Card border="primary" bg="secondary">
                    <Card.Img variant="top" src={"https://starwars-visualguide.com/assets/img/planets/"+planets.uid+".jpg"} />
                    <Card.Body>
                    <Card.Title>{planets.name}</Card.Title>
                    </Card.Body>
                    <Link to={"/planetsSingle/" + planets.uid}>
								<button className="btn btn-primary">Learn More</button>
					</Link>
								<button type="button" 
                                onClick = 
                                {
                                    () => {actions.setFavorites(planets.name)}
                                }>
                                <i className="fa fa-star-o"/></button>
                </Card>
            </Col>
            );
        })}
    </Row>
    </>
    );
    
} 

export default Planets;
