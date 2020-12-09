import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import linkedin from '../assets/images/linkedin.svg';

class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
			{
				id: 0,
				title: 'Michelle Ortiz',
				subTitle: 'Go to my LinkedIn profile',
				imgSrc: linkedin,
				link: 'https://www.linkedin.com/in/michelle-ortiz-09861611a/',
				selected: false
			}]
		}
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items];

		items[id].selected = true;

		items.forEach(item => {
			if(item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	}

	makeItems = (items) => {
		return items.map(item => {
			return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
		});
	}

	render() {
		return(
			<Container fluid={true}>
				<Row className="justify-content-around mx-5">
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}

}

export default Carousel;