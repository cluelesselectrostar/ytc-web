import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import TubePage from './pages/Tube';
import LifePage from './pages/Life';
import BlogsPage from './pages/Blogs';
import CovidPage from './pages/CovidTracker';
import LandingPage from './pages/Landing';

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
  const [blogdata, setBlogData] = useState(null);
  const [projectdata, setProjectData] = useState(null);
  const [stationdata, setStationData] = useState(null);

  const renderHelloWorld = () => {
    return (
      <MDImportWrapper/>
    )
  }

  useEffect(() => {
    fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
      .then(response => response.json())
      .then(data => {
        setCovidData(data);
        console.log("data grabbed at top level");
      })

    const fetchBlogs = async () => {
      const res = await axios.get("https://ytc-web.herokuapp.com/api/blogposts");
      setBlogData(res.data);
    }
    fetchBlogs();

    const fetchPosts = async () => {
      //setLoading(true);
      const res = await axios.get("https://ytc-web.herokuapp.com/api/projectposts");
      setProjectData(res.data);
      //setLoading(false);
    }
    fetchPosts();

    const fetchStations = async () => {
      const res = await axios.get("https://ytc-web.herokuapp.com/api/stationposts");
      setStationData(res.data);
    }
    fetchStations();

  }, []);

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)

  return (
    <HashRouter>
      <div class="px-10">
        <div class="col-md-10 container">
          <Navbar collapseOnSelect sticky="top" expand='sm' variant='light' bg='white' expanded={expanded}>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto">
                <Link onClick={scrollToTop} to="/" class="nav-link text-decoration-none fw-bold" style={{ color: 'teal' }} >Yan To Chau</Link>
                {/* <Link onClick={scrollToTop} to="/about" class=" nav-link text-decoration-none text-dark"> About</Link> */}
                <Link onClick={scrollToTop} to="/projects" class="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 🔌 Projects</Link>
                <Link onClick={scrollToTop} to="/life" class="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 🛼 Passions </Link>
                <Link onClick={scrollToTop} to="/blogs" class="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 📷 Blogs</Link>
                <Link onClick={scrollToTop} to="/covid" class="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 😷 Covid Tracker</Link>
                <Link onClick={scrollToTop} to="/travel" class="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 🚂 Woodstock Travels</Link>
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
          <ProjectsPage projectdata={projectdata}/>
        </Route>
        <Route path="/life">
          <LifePage />
        </Route>
        {/* <Route path="/blogs/md/test.md" component={TestMDImport} />  TODO: Need to add dynamic links later */}
        <Route path="/blogs/mogodB/:title/:_id" component={MDImportWrapper}></Route>
        <Route path="/blogs/static/:post/:title" component={HTMLBlogImport} />
        <Route path="/blogs">
          <BlogsPage blogdata={blogdata} />
        </Route>
        <Route path="/covid">
          <CovidPage coviddata={coviddata} />
        </Route>
        <Route path="/travel">
          <TubePage stationdata={stationdata}/>
        </Route>
        <Route path="/landing">
          <LandingPage />
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