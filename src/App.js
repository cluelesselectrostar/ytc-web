import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import LifePage from './pages/Life';
import BlogsPage from './pages/Blogs';
import ContactPage from './pages/Contact';
import CovidPage from './pages/Covid-Tracker';

import HTMLBlogImport from './blogs/HTMLBlogImport';

function App() {

  const scrollToTop = () => {
    setExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [expanded, setExpanded] = useState(false);

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)

  return (
    <HashRouter>
      <Container>
        <Navbar collapseOnSelect sticky="top" expand='sm' variant='light' bg='white' expanded={expanded}>
          <Container class="align-items-center">
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto">
                <Nav.Link onClick={scrollToTop}><Link to="/" class="text-decoration-none fw-bold" style={{ color: 'teal'}} > Yan To Chau</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/about" class="text-decoration-none text-dark"> About</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/projects" class="text-decoration-none text-dark"> Projects</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/life" class="text-decoration-none text-dark"> Passions</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/blogs" class="text-decoration-none text-dark"> Blogs</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/contact" class="text-decoration-none text-dark"> Contact</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/covid-tracker" class="text-decoration-none text-dark"> Coronavirus Tracker (Beta) </Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      {/* <br class=" mb-4"></br> */}

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
        <Route path="/blogs/:post/:title" component={HTMLBlogImport} />
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        
        <Route path="/covid-tracker">
          <CovidPage />
        </Route>

        {/* Home page goes last */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <br class=" mb-4"></br>

      <footer class="footer mt-auto py-3 text-center mb-auto">
        <div class="container">
          <span class="text-muted">Built with HTML, CSS, Bootstrap and React.JS. © Yan To Chau 2021.</span>
        </div>
      </footer>

    </HashRouter>
  );
}

export default App;