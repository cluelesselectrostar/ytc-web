import React from 'react';
// import { Component } from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Image from 'react-bootstrap/Image';

// import GetLocalProjects from '../projects/GetProjects';
import ProjectPostList from '../components/ProjectPostList';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import load_image from '../images/loading.gif';

function ProjectsPage() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    //const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            //setLoading(true);
            const res = await axios.get("https://ytc-web.herokuapp.com/api/projectposts" + search);
            setPosts(res.data);
            //setLoading(false);
        }
        
        fetchPosts();
    }, [search, posts]);

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
                            Of course, I am currently working with MERN to complete this website!
                        </p>
                    </div>
                }
            />

            <div class="container py-4">
                <div class="alert alert-warning" role="alert">
                    Currrently deploying the backend on Mongo DB. Apologies if this does not load properly!
                </div>
            </div>

            {posts.length<4 ? (
                <div>
                    <div class="px-10 py-0 text-center">
                        <Image src={load_image} alt="Photo" fluid />
                        <div>Cute image courtesy of <a href="https://dribbble.com/shots/3790348-game-loading" style={{color:"black", textDecoration:"none"}}>yuanzi0410</a>.</div>
                    </div >
                </div>
            ) : (
                <div class="album">
                    <div class="container">
                        <ProjectPostList posts={posts} />
                    </div>
                </div>
            )
            }

        </main>
    );
}

export default ProjectsPage;