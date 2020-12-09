import React, {useRef, useEffect} from 'react';
import gsap, {TweenMax, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

gsap.registerPlugin(ScrollTrigger);

function Hero(props) {

	let hero = useRef(null);
	let title = useRef(null);
	let subTitle = useRef(null);

	useEffect(() => {
		if (props.subTitle) {
			TweenMax.to(hero, 0, {scrollTrigger: hero, css: {visibility: 'visible'}});
			TweenMax.from([title, subTitle], {y: 60, ease: Power3.easeOut, stagger: {amount: .15}, scrollTrigger: {trigger: title, start: 'top bottom', scrub: .5}});
		} else {
			TweenMax.to(hero, 0, {delay: .2, css: {visibility: 'visible'}});
			TweenMax.from(title, .5, {delay: .2, y: 60, ease: Power3.easeOut})
		}
	}, []);

	return(
			<Jumbotron className="bg-transparent jumbotron-fluid p-0">
				<Container fluid={true}>
					<Row className="justify-content-center">
						<Col ref={e => hero = e} className="hero" md={9} sm={12}>
							{ props.title && <h1 ref={e => title = e} className="hero-title font-weight-bolder">{props.title}</h1> }
							{ props.subTitle && <h3 ref={e => subTitle = e} className="hero-subtitle font-weight-light">{props.subTitle}</h3> }
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);

}

export default Hero;