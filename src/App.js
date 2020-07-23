import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import Logo from './components/Logo';
import logo from './assets/images/logo.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgSrc: logo,
      headerLinks: [
        { title: 'Home', path: "/" },
        { title: 'About', path: "/about" },
        { title: 'Contact', path: "/contact" },
      ],
      home: {
        title: 'Hi 👋',
        subTitle: 'My name is Grant',
        text: "Below are a few projects I am most proud of!"
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact',
      }
    }

  }

  render() {

    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Logo title={this.state.imgSrc}>Grant Kyle</Logo>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>


              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
