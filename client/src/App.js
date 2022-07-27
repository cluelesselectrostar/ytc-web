import { HashRouter, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';

import LinkModules from './components/Links_Module';
import scrollToTop from './components/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';

import Login from './components/Login';
import jwt_decode from 'jwt-decode';
import Logout from './components/Logout';

//import {gapi} from 'gapi-script';
//import GoogleLogin from 'react-google-login';

const clientId = '935692908995-9rljb05alk8n28ppgg2jg3dvb03eh2v0.apps.googleusercontent.com';

function App() {

  const [expanded, setExpanded] = useState(false);
  const [coviddata, setCovidData] = useState(null);
  const [blogdata, setBlogData] = useState(null);
  const [projectdata, setProjectData] = useState(null);
  const [stationdata, setStationData] = useState(null);
  const [user, setUser] = useState(null);

  const googleAuth = () => {
    window.open(
      'http://localhost:5000/auth/google/callback',
      'self'
    );
  }

  function handleSignOut(event) {
    setUser(null);
    window.open(
      'http://localhost:5000/auth/logout',
      'self'
    );
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

    function handleCallbackResponse(res) {
      console.log("Encoded JWT ID token: " + res.credential);

      var userObject = jwt_decode(res.credential);
      console.log(userObject);
      setUser(userObject);
    }

    /* global google */
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )

  }, []);

  // style={{ color: 'rgb(153,230,179)', }} (teal colour)
  // var accessToken = gapi.auth.getToken().accessToken;

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
                <Link onClick={scrollToTop} to="/blogs" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 📷 Blogs</Link>
                <Link onClick={scrollToTop} to="/covid" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 😷 Covid Tracker</Link>
                <Link onClick={scrollToTop} to="/travel" className="nav-link text-decoration-none text-dark" style={{ marginLeft: "10px" }}> 🚂 Woodstock Travels</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      <AnimatedRoutes blogdata={blogdata} coviddata={coviddata} projectdata={projectdata} stationdata={stationdata} />
      <div class="mt-4">
        <LinkModules />

        {user ? (
          <div>
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
        ) : (
          <Login onClick={googleAuth} />
        )}

      </div>
    </HashRouter>
  );
}

export default App;