import React, {useRef, useEffect} from 'react';
import gsap, {TweenMax, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

gsap.registerPlugin(ScrollTrigger);

function Hello(props) {

	let box = useRef(null);

	useEffect(() => {
		TweenMax.to(box, 0, {delay: .2, css: {visibility: 'visible'}});
		TweenMax.from(box, .8, {delay: .2, y: -70, ease: Power3.easeOut});
		TweenMax.from(box, {scrollTrigger: {trigger: box, start: 'top%+=20 top', scrub: .5}, y: 20, ease: Power3.easeOut});
	}, []);

	return(
		<Container className="hello" fluid={true}>
			<Row className="justify-content-center">
				<Col md={10} sm={12}>
					<Jumbotron ref={e => box = e} className="hello-box jumbotron-fluid">
						<Row className="hello-row justify-content-center">
							<Col>
									<h1 className="box-title text-center">{props.title}</h1>
									<p className="box-subtitle text-center">{props.subTitle}</p>
									<p className="box-subtitle text-center">{props.text}</p>
							</Col>
						</Row>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	);

}

export default Hello;