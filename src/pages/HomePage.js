import React, {useRef, useEffect} from 'react';
import gsap, {TweenMax, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Splide, SplideSlide } from '@splidejs/react-splide';

import opener from '../assets/images/opener.jpg';
import arrow from '../assets/icons/arrow.svg';

gsap.registerPlugin(ScrollTrigger);

function HomePage(props) {

	let titleBox = useRef(null);
	let subtitleBox = useRef(null);
	let arrowIcon = useRef(null);

	useEffect(() => {
		TweenMax.to([titleBox, subtitleBox], 0, {delay: 0, css: {visibility: 'visible'}});
		TweenMax.from([titleBox, subtitleBox], .8, {delay: 0, y: 80, ease: Power3.easeOut, stagger: {amount: .1}});
		TweenMax.from([titleBox, subtitleBox], {scrollTrigger: {trigger: titleBox, start: 'top-=100px top', scrub: 1.5}, y: 0, ease: Power3.easeOut, stagger: {amount: .05, from: 'end'}});
		TweenMax.to(arrowIcon, 0, {delay: .5, css: {visibility: 'visible'}});
		TweenMax.from(arrowIcon, .9, {delay: .5, y: 50, ease: Power3.easeOut});
		TweenMax.from(arrowIcon, {scrollTrigger: {trigger: titleBox, start: 'bottom-=110px top', scrub: 1.5}, y: 0, ease: Power3.easeOut});
	}, []);

	return(<>
		<div className="opener">
			<img src={opener} alt="Opener" className="opener-img" />
			<div ref={e => titleBox = e} className="d-title-box d-text px-3 opener-title">
				{props.title}
			</div>
			<div ref={e => subtitleBox = e} className="d-subtitle-box d-text px-3 opener-subtitle">
				{props.subTitle}
			</div>
			<div ref={e => arrowIcon = e} className="d-flex justify-content-center arrow-icon">
				<img src={arrow} alt="Arrow" className="arrow-down" />
			</div>
		</div>
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
		<Splide>
			<SplideSlide>
				<img src={opener} alt="Opener"/>
			</SplideSlide>
			<SplideSlide>
				<img src={opener} alt="Opener"/>
			</SplideSlide>
		</Splide>
	</>);

}

export default HomePage;