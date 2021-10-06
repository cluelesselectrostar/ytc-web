import React from 'react';
// import { Component } from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// import GetLocalProjects from '../projects/GetProjects';
import ProjectPostList from '../components/ProjectPostList';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

function ProjectsPage() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://ytc-web.herokuapp.com/api/projectposts" + search);
            setPosts(res.data);
            console.log("List fetching")
        };
        fetchPosts();
    }, [search]);

    return (
        <main>
            <PageTitle title="Projects" />
            <TitleBanner
                title="Getting my hands dirty!"
                description={
                    <div>
                        <p class="lead">
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
                            Of course, I am currently working with HTML/CSS/Bootstrap/React to complete this website!
                        </p>
                    </div>
                }
            />

            <div class="container py-4">
                <div class="alert alert-warning" role="alert">
                    Currrently deploying the backend on Mongo DB. Apologies if this does not load properly!
                </div>
            </div>

            <div class="album">
                <div class="container">
                    <ProjectPostList posts={posts} />
                </div>
            </div>

        </main>
    );
}

export default ProjectsPage;