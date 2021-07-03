import React, { Component } from 'react';
import GetLocalProjects from '../projects/GetProjects';
import TitleBanner from '../components/TitleBanner';

function ProjectsPage() {
    return (
        <main>

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

            <div class="album py-4">
                <div class="container">
                    <GetLocalProjects />
                </div>
            </div>

        </main>
    );
}

export default ProjectsPage;