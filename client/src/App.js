import { HashRouter, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';

import LinkModules from './components/Links_Module';
import scrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {

  const [expanded, setExpanded] = useState(false);

  /*   const [coviddata, setCovidData] = useState(null);
    const [blogdata, setBlogData] = useState(null);
    const [projectdata, setProjectData] = useState(null);
    const [stationdata, setStationData] = useState(null);
    useEffect(() => {
      fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
        .then(response => response.json())
        .then(data => {
          setCovidData(data);
        })
  
      const fetchBlogs = async () => {
        const res = await axios.get("https://ytc-web.herokuapp.com/api/blogposts");
        setBlogData(res.data);
        console.log("blogdata");
        console.log(res.data);
      }
      fetchBlogs();
  
      const fetchPosts = async () => {
        //setLoading(true);
        const res = await axios.get("https://ytc-web.herokuapp.com/api/projectposts");
        setProjectData(res.data);
        //setLoading(false);
        console.log("projectdata");
        console.log(res.data);
      }
      fetchPosts();
  
      const fetchStations = async () => {
        const res = await axios.get("https://ytc-web.herokuapp.com/api/stationposts");
        setStationData(res.data);
        console.log("stationdata");
        console.log(res.data);
      }
      fetchStations();
  
    }, []); */

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)

  return (
    <HashRouter>
      <div className="px-10">
        <div className="col-md-10 container">
          <Navbar collapseOnSelect sticky="top" expand='sm' variant='light' bg='white' expanded={expanded}>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className="mr-auto">
                <Link onClick={scrollToTop} to="/" className="nav-link text-decoration-none fw-bold" style={{ color: 'teal' }} >Yan To Chau</Link>
                {/* <Link onClick={scrollToTop} to="/about" class=" nav-link text-decoration-none text-dark"> About</Link> */}
                <Link onClick={scrollToTop} to="/cv" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 💼 CV </Link>
                <Link onClick={scrollToTop} to="/projects" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 🔌 Projects</Link>
                {/* <Link onClick={scrollToTop} to="/blogs" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 📷 Blogs</Link>
                <Link onClick={scrollToTop} to="/covid" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 😷 Covid Tracker</Link>
                <Link onClick={scrollToTop} to="/travel" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 🚂 Woodstock Travels</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      <div className="container col-md-10 mt-3" >
        <div class="alert alert-warning" role="alert">
          <h2>
            This site is no longer maintained. Visit my new site at <a href='https://yannichau.i234.me'>yannichau.i234.me</a>!
          </h2>
          Or......you might have been accidentally redirected to this backup site as my new site is under maintenance!
        </div>
      </div>

      <AnimatedRoutes />
      <div class="mt-4">
        <LinkModules />
      </div>

    </HashRouter>
  );
}

export default App;