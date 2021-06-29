import React, { Component } from 'react';
import GetLocalProjects from '../projects/GetProjects';

function ProjectsPage() {
    return (
        <main>

            <div class="align-items-md-stretch h-100 p-5 mb-4 bg-light rounded-3 py-5 ">
                <div class="col-md-8">
                    <h1 class="display-5 fw-bold">Getting my hands dirty!</h1>
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
            </div>

            <div class="album py-4">
                <div class="container">
                    <GetLocalProjects />
                </div>
            </div>

        </main>
    );
}

export default ProjectsPage;