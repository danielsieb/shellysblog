import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

import Hero from '../components/Hero';
import Content from '../components/Content';

class ContactPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			disabled: false,
			emailSent: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({
			disabled: true
		});

		Axios.post('https://us-central1-portfoliosite-291215.cloudfunctions.net/sendGrid', this.state, { headers: {'Content-Type':'application/json'} }).then(res => {
			if (res.data.success) {
				this.setState({
					disabled: true,
					emailSent: true
				});
			} else {
				this.setState({
					disabled: false,
					emailSent: false
				});
			}
		}).catch(err => {
			this.setState({
				disabled: false,
				emailSent: false
			});
		});
	}

	render() {
		return(
			<div>
				<Hero title={this.props.title} />

				<Content>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group>
							<Form.Label className="text" htmlFor="full-name">Full Name</Form.Label>
							<Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label className="text" htmlFor="email">Email</Form.Label>
							<Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
						</Form.Group>

						<Form.Group>
							<Form.Label className="text" htmlFor="message">Message</Form.Label>
							<Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
						</Form.Group>

						<Button className="d-inline-block send-button" variant="primary" type="submit" disabled={this.state.disabled}>
							Send
						</Button>

						{this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
						{this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
					</Form>
				</Content>
			</div>
		);
	}

}

export default ContactPage;