import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import profile from './assets/images/profile.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Michelle Ortiz',
      headerLinks: [
        {title: 'Blog', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      hello: {
        title: 'ELLO.',
        subTitle: 'I\'M MICHELLE.',
        text: 'WECLOME TO MY BLOG!'
      },
      home: {
        title: 'Rebel.',
        subTitle: 'Against the millenial stigma.'
      },
      about: {
        title: 'About Me',
        imgSrc: profile,
        link: '/contact'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom nav-bg" expand="lg">
            <Navbar.Brand><div className="d-text">Shelly's View</div></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/"><div className="d-text">Blog</div></Link>
                <Link className="nav-link" to="/about"><div className="d-text">About</div></Link>
                <Link className="nav-link" to="/contact"><div className="d-text">Contact</div></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} helloTitle={this.state.hello.title} helloSubTitle={this.state.hello.subTitle} helloText={this.state.hello.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} imgSrc={this.state.about.imgSrc} link={this.state.about.link} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
  
}

export default App;