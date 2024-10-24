import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer py-4">
			<Container>
				<Row>
					{/* Resources Section */}
					<Col md={4}>
						<h5>Resources</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#">Support</a>
							</li>
							<li>
								<a href="#">Documentation</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
						</ul>
					</Col>

					{/* Downloads Section */}
					<Col md={4}>
						<h5>Downloads</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#">Android</a>
							</li>
							<li>
								<a href="#">iOS</a>
							</li>
							<li>
								<a href="#">Linux</a>
							</li>
						</ul>
					</Col>

					{/* Mailing List Section */}
					<Col md={4}>
						<h5>Join Our Mailing List</h5>
						<Form>
							<Form.Group controlId="formEmail">
								<Form.Control
									type="email"
									placeholder="Enter your email"
									defaultValue="developers@smswithoutborders.com"
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>

				{/* Copyright Section */}
				<Row className="mt-4">
					<Col className="text-center">
						<p>&copy; 2024 AFKANERD</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
