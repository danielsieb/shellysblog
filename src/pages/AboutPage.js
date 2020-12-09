import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

	return(
		<div>
			<Hero title={props.title} />

			<Content>
				<Row>
					<Col>
						<img className="profile-image" src={props.imgSrc} alt={props.imgSrc} />
					</Col>
					<Col className="text">
						<p>{"I am a graduate student currently working on my master's thesis at California State University Fullerton."}</p>
						<p>{"I study Business Information Systems which allows me to live out my passion for coding and provides understanding for IT management."}</p>
						<p>{"I am seeking a career in software engineering after graduation in Spring 2021."}</p>
						<p>{"If you are interested in hiring me, feel free to "}<a href={props.link} target="_self" rel="noopener noreferrer" className="link">contact me.</a></p>
					</Col>
				</Row>
			</Content>
		</div>
	);

}

export default AboutPage;