import React from 'react';
// import { Component } from 'react';
// import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
//import Image from 'react-bootstrap/Image';

// import GetLocalProjects from '../projects/GetProjects';
import ProjectPostList from '../components/ProjectPostList';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import LoadingGif from '../components/LoadingGIF';

function ProjectsPage({ projectdata }) {

    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    //const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (projectdata) {
            setLoaded(true);
            setPosts(projectdata);
        }
    }, [search, projectdata]);

    return (
        <main>
            <PageTitle title="Projects" />
            <TitleBanner
                title="Getting my hands dirty!"
                description={
                    <div>
                        <p className="lead">
                            This page links to all the repositories of my individual and group projects.
                            Documentation and relevant introductory website is available for some group projects as well.
                        </p>
                        <p>
                            I am proficient in the following languages:
                            <ul>
                                <li>C/C++/Arduino - For hardware based projects,</li>
                                <li>Python - For personal web-based/ data-processing projects; and,</li>
                                <li>Flutter/ Dart - For simultaneous iOS and Android app development</li>
                            </ul>
                        </p>
                        <p>
                            Of course, I am currently working with MERN to complete this website!
                        </p>
                    </div>
                }
            />

            {loaded ? (
                <div className="album">
                    <div className="container">
                        <ProjectPostList posts={posts} />
                    </div>
                </div>
            ) : (
                <LoadingGif/>
            )
            }

        </main>
    );
}

export default ProjectsPage;