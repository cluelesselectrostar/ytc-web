import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
//import AboutPage from './pages/About';
import LifePage from './pages/Life';
import BlogsPage from './pages/Blogs';
import CovidPage from './pages/CovidTracker';
import TubeMapPage from './pages/TubeMap';

import HTMLBlogImport from './blogs/HTMLBlogImport'; // Static HTML
// import TestMDImport from './blogs/markdown-test/MDImport'; // Static Markdown (Test)
import MDImportWrapper from './components/MDImportWrapper'; // Markdown from MongoDB

import LinkModules from './components/Links_Module';


// Google analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';


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

  const trackingId = "UA-218770633-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  const history = createBrowserHistory();
  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  useEffect(() => {
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
      .then(response => response.json())
      .then(data => {
        setCovidData(data);
        console.log("data grabbed at top level");
      })
  }, []);

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)

  return (
    <HashRouter history={history}>
      <div class="px-10">
        <div class="col-md-10 container">
          <Navbar collapseOnSelect sticky="top" expand='sm' variant='light' bg='white' expanded={expanded}>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto">
                <Link onClick={scrollToTop} to="/" class="nav-link text-decoration-none fw-bold" style={{ color: 'teal' }} >Yan To Chau</Link>
                {/* <Link onClick={scrollToTop} to="/about" class=" nav-link text-decoration-none text-dark"> About</Link> */}
                <Link onClick={scrollToTop} to="/projects" class="nav-link text-decoration-none text-dark"> Projects</Link>
                <Link onClick={scrollToTop} to="/life" class="nav-link text-decoration-none text-dark"> Passions</Link>
                <Link onClick={scrollToTop} to="/blogs" class="nav-link text-decoration-none text-dark"> Blogs</Link>
                <Link onClick={scrollToTop} to="/covid" class="nav-link text-decoration-none text-dark"> Covid Tracker (Beta)</Link>
                <Link onClick={scrollToTop} to="/tube" class="nav-link text-decoration-none text-dark"> Yanni's Map</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
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
        <Route path="/tube">
          <TubeMapPage />
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