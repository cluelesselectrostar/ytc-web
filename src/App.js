import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import LifePage from './pages/Life';
import JaywalkingPage from './pages/Jaywalking';


function App() {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect fixed='top' expand='sm' variant='dark' bg='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Row className="justify-content-around align-items-center py-12">
                <div class='sm-12 md-4 col-lg-auto'>
                  <Nav.Link><Link to="/" class="text-decoration-none fw-bold" style={{ color: 'rgb(153,230,179)', }}> Yan To Chau</Link></Nav.Link>
                </div>
                <div class='sm-12 md-1 col-lg-auto'>
                  <Nav.Link><Link to="/about" class="text-decoration-none text-light"> About</Link></Nav.Link>
                </div>
                <div class='sm-12 md-1 col-lg-auto'>
                  <Nav.Link><Link to="/projects" class="text-decoration-none text-light"> Projects</Link></Nav.Link>
                </div>
                <div class='sm-12 md-1 col-lg-auto'>
                  <Nav.Link><Link to="/life" class="text-decoration-none text-light"> Life</Link></Nav.Link>
                </div>
                <div class='sm-12 md-1 col-lg-auto'>
                  <Nav.Link><Link to="/jaywalking" class="text-decoration-none text-light"> Jaywalking</Link></Nav.Link>
                </div>
              </Row>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/life">
          <LifePage />
        </Route>
        <Route path="/jaywalking">
          <JaywalkingPage />
        </Route>

        {/* Home page goes last */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <br class=" mb-4"></br>

      <footer class="footer mt-auto py-3 text-center bg-dark mb-auto">
        <div class="container">
          <span class="text-muted">Built with HTML, CSS, Bootstrap and React.JS. © Yan To Chau 2021.</span>
        </div>
      </footer>

    </BrowserRouter>
  );
}

export default App;
