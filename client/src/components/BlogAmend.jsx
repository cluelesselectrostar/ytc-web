// src/views/profile.js

import React from 'react';
// import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingGif from './LoadingGIF';
import NewBlogForm from './NewBlogForm';
import AuthenticationButton from './Authentication';
import UpdateBlogForm from './UpdateBlogForm';

const BlogAmend = ({blogdata}) => {

  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div className="mt-4">
      <Row className="align-items-center">
        <Col md="auto">
          <AuthenticationButton />
        </Col>
        <Col md="auto">
          <Button variant="link" className="text-decoration-none" disabled>Logged in as <b>{name}</b> ({email}, {user.sub})</Button>
        </Col>
      </Row>
      <br></br>


      <Tabs
        defaultActiveKey="post"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="post" title="New">
          <NewBlogForm />
        </Tab>
        <Tab eventKey="update" title="Update">
          <UpdateBlogForm blogdata={blogdata}/>
        </Tab>
        <Tab eventKey="delete" title="Delete" disabled>
        </Tab>
      </Tabs>

    </div>
  );
};

export default withAuthenticationRequired(BlogAmend, {
  onRedirecting: () => <LoadingGif />,
  returnTo: () => window.location.hash.substr(1),
});

/*
Arguments
loginOptions: It behaves exactly like the configuration options you can pass to loginWithRedirect() 
to customize the login experience.

returnTo: Lets you specify a path for React to redirect a user after 
the login transaction that the user triggered in this component completes.

onRedirecting: It renders a component while your React application redirects the user to the login page.
*/