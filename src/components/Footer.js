import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import linkedin from '../assets/images/linkedin.svg';

function Footer() {
	
	return (
		<footer className="mt-5">
			<Container fluid={true}>
				<Row className="border-top p-2 d-flex justify-content-between">
					<Col className="d-text" md={3}>
						<div class="d-inline-flex p-2">Find me on</div>
						<div class="d-inline-flex p-2"><a href='https://www.linkedin.com/in/michelle-ortiz-09861611a/' target='_blank'><img className="d-card-image" src={linkedin} alt={linkedin} /></a></div>
					</Col>
					<Col className="d-text p-1 d-flex justify-content-end" md={3}>
						© by Daniel Siebert
					</Col>
				</Row>
			</Container>
		</footer>
	)

}

export default Footer;