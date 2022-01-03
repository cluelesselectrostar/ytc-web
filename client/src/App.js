import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import LifePage from './pages/Life';
import BlogsPage from './pages/Blogs';
import CovidPage from './pages/CovidTracker';

import HTMLBlogImport from './blogs/HTMLBlogImport';
import MDImport from './blogs/markdown-test/MDImport';
import LinkModules from './components/Links_Module';


function App() {

  const scrollToTop = () => {
    setExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [expanded, setExpanded] = useState(false);
  const [coviddata, setCovidData] = useState(null);

  useEffect(() => {
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
      .then(response => response.json())
      .then(data => {
        setCovidData(data);
        //console.log(data);
      })
  }, []);

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)

  return (
    <HashRouter>
      <Container>
        <Navbar collapseOnSelect sticky="top" expand='sm' variant='light' bg='white' expanded={expanded}>
          <Container class="align-items-center">
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto">
                <Nav.Link onClick={scrollToTop}><Link to="/" class="text-decoration-none fw-bold" style={{ color: 'teal' }} > Yan To Chau</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/about" class="text-decoration-none text-dark"> About</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/projects" class="text-decoration-none text-dark"> Projects</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/life" class="text-decoration-none text-dark"> Passions</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/blogs" class="text-decoration-none text-dark"> Blogs</Link></Nav.Link>
                <Nav.Link onClick={scrollToTop}><Link to="/covid" class="text-decoration-none text-dark"> Covid Tracker (Beta)</Link></Nav.Link>
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
        <Route path="/blogs/md/test.md" component={MDImport} />  {/* TODO: Need to add dynamic links later*/}
        <Route path="/blogs/:post/:title" component={HTMLBlogImport} />
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route path="/covid">
          <CovidPage coviddata={coviddata} />
        </Route>

        {/* Home page goes last */}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <br class=" mb-4"></br>

      <div class="mt-4">
        <LinkModules />
      </div>

    </HashRouter>
  );
}

export default App;