import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Barra = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar variant="dark" bg="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#home">
					<Link to="/demo">
						<span><img src={logo} /></span>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-dark-example" />
				<Navbar.Collapse 
				id="navbar-dark-example"
				className="justify-content-end">
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown
							id="nav-dropdown-dark-example"
							title="Favoritos"
							menuVariant="dark"
						>
						<NavDropdown.Item href="#action/3.1">{store.favorites.map((favorites, i) => 
							{
							return (<p key={i}>{favorites}<button
								type="button" onClick = {() => {actions.deleteFavorites(favorites)}
                                }>DEL</button></p>)}
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


