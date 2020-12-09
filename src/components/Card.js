import React, {useRef, useEffect} from 'react';
import gsap, {TweenMax, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import CardInfo from '../components/CardInfo';

gsap.registerPlugin(ScrollTrigger);

function Card(props) {

	let card = useRef(null);
	let image = useRef(null);

	useEffect(() => {
		TweenMax.to(card, 0, {scrollTrigger: card, css: {visibility: 'visible'}});
		TweenMax.from(card, {scrollTrigger: {trigger: card, start: 'top bottom', scrub: .8}, x: 64, ease: Power3.easeOut});
	}, []);

	const handleExpand = () => {
		TweenMax.to(image, .8, {width: '55vw', height: '88vw', ease: Power3.easeOut});
	}

	const handleShrink = () => {
		TweenMax.to(image, .8, {width: '50vw', height: '80vw', ease: Power3.easeOut});
	}

	return(
		<div ref={e => card = e} className="d-inline-block d-card" onMouseEnter={(e) => props.click(props.item)} onMouseOver={handleExpand} onMouseOut={handleShrink}>
			<img ref={e => image = e} className="d-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
			{ props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
		</div>
	);

}

export default Card;