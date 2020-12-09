import React from 'react';

import opener from '../assets/images/opener.jpg';
import arrow from '../assets/icons/arrow.svg';

function HomePage(props) {

	return(<>
		<div className="opener">
			<img src={opener} alt="Opener" className="opener-img" />
			<div className="d-title-box d-text px-3 opener-title">
				{props.title}
			</div>
			<div className="d-subtitle-box d-text px-3 opener-subtitle">
				{props.subTitle}
			</div>
		</div>
		<div className="d-flex justify-content-center">
			<img src={arrow} alt="Arrow" className="arrow-down" />
		</div>
		<br /><br />
		<div>

		</div>
	</>);

}

export default HomePage;