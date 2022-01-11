import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
//import AboutPage from './pages/About';
import LifePage from './pages/Life';
import BlogsPage from './pages/Blogs';
import CovidPage from './pages/CovidTracker';

import HTMLBlogImport from './blogs/HTMLBlogImport'; // Static HTML
// import TestMDImport from './blogs/markdown-test/MDImport'; // Static Markdown (Test)
import MDImportWrapper from './components/MDImportWrapper'; // Markdown from MongoDB

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

  /*
  useEffect(() => {
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
      .then(response => response.json())
      .then(data => {
        setCovidData(data);
        //console.log(data);
      })
  }, []);
  */

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)

  return (
    <HashRouter>
      <Container class="px-10 col-md-10">
        <Navbar collapseOnSelect sticky="top" expand='sm' variant='light' bg='white' expanded={expanded}>
          <Container class="align-items-center">
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto">
                <Link onClick={scrollToTop} to="/" class="nav-link text-decoration-none fw-bold" style={{ color: 'teal' }} > Yan To Chau</Link>
                {/* <Link onClick={scrollToTop} to="/about" class=" nav-link text-decoration-none text-dark"> About</Link> */}
                <Link onClick={scrollToTop} to="/projects" class="nav-link text-decoration-none text-dark"> Projects</Link>
                <Link onClick={scrollToTop} to="/life" class="nav-link text-decoration-none text-dark"> Passions</Link>
                <Link onClick={scrollToTop} to="/blogs" class="nav-link text-decoration-none text-dark"> Blogs</Link>
                <Link onClick={scrollToTop} to="/covid" class="nav-link text-decoration-none text-dark"> Covid Tracker (Beta)</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      {/* <br class=" mb-4"></br> */}

      <Switch>
        {/* <Route path="/about">
          <AboutPage />
        </Route> */}
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/life">
          <LifePage />
        </Route>
        {/* <Route path="/blogs/md/test.md" component={TestMDImport} />  TODO: Need to add dynamic links later */}
        <Route path="/blogs/mogodB/:title/:_id" component={MDImportWrapper} />
        <Route path="/blogs/static/:post/:title" component={HTMLBlogImport} />
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