import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Barra = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar variant="dark" bg="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">
					<Link to="/">
						<span><img src={logo} /></span>
					</Link>
					<Link to="/peopleSingle/4">
						<a className="btn btn-outline-light btn-m" href="#" role="button">
						...The force may be with you
						</a>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-dark-example" />
				<Navbar.Collapse 
				id="navbar-dark-example"
				className="justify-content-end">
					<Nav>
						<Link to="/people">
						<a className="btn btn-link btn-m" href="#" role="button">
						Characters
						</a>
						</Link>
						<Link to="/planets">
						<a className="btn btn-link btn-m" href="#" role="button">
						Planets
						</a>
						</Link>
						<Link to="/vehicles">
						<a className="btn btn-link btn-m" href="#" role="button">
						Starships
						</a>
						</Link>
						<NavDropdown
							id="nav-dropdown-dark-example"
							title="Favoritos"
							menuVariant="dark"
						>
						<NavDropdown.Item>{store.favorites.map((favorites, i) => 
							{
							return (<p key={i}>{favorites}<button
								type="button" onClick = {() => {actions.deleteFavorites(favorites)}
                                }><i className="fa fa-trash" aria-hidden="true"/></button></p>)}
							)
						}
						</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};


