import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure'

import circuit_image from '../images/circuit.jpeg';
import profile_image from '../images/brighton.jpg';
import icra_image from '../images/ICRA.jpeg';
import train_image from '../images/oldoakcommon.JPG';
import './About.css';

function AboutPage() {

    return (<main>

        <div class="align-items-md-stretch h-100 p-5 mb-4 bg-light rounded-3">
            <div class="row">
                <div class="col-md-8">
                    <h1 class="display-5 fw-bold">Where I am currently at.</h1>
                    <p class="lead">
                        I am Yan To, raised in Hong Kong
                        , and currently an Engineering undergraduate at Imperial College London.
                        In addition to my portfolio of attestable project, work and volunteering experiences,
                        I am also active in numerous student societies,
                        bringing exciting extra-curricular experiences to Imperial students.
                    </p>
                </div>
                <div class="col-md-4 align-content-center align-items-center">
                    <Image src={profile_image} alt="Brighton." fluid roundedCircle />
                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-8">
                    <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'teal', }}>
                        <h2>Inspired by EEE 🔌</h2>
                        <p>
                            I have always been fascinated in the sophisticated circuits and systems powering our gadgets and appliances,
                            which is why I went for EEE.
                            I truly believe that harnessing the power of these newest technology is the way to build a smarter,
                            greener and more sustainable future. While I envision to work in an inter-disciplinary engineering environment,
                            I have developed my specific interests during my course. Some of my interests include:
                        </p>
                        <ul>
                            <li>Power Engineering</li>
                            <li>Control Systems</li>
                            <li>Robotics</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 align-content-center align-items-center">
                    <div class="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
                        <Figure>
                            <Figure.Image
                                src={circuit_image}
                                fluid rounded
                            />
                            <Figure.Caption>
                                Year 2 Circuits and Systems Lab Breadboard, labelled.
                            </Figure.Caption>
                        </Figure>
                    </div>
                </div>
            </div>

            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-4">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Computing for engineering 💻</h2>
                        <p>
                            I code in a number of languages, ranging from Python for personal projects,
                            to C/C++/Arduino for hardware projects. I also have experience in Verilog HDL,
                            for FPGA laboratory work. More details in the Projects page and GitHub.
                        </p>
                        <button class="btn btn-outline-secondary" type="button">Projects</button>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'rgb(51,51,51)', }}>
                        <h2>Internship Experiences 💼</h2>
                        <h5 class=" mt-4">Majestic Engineering (Construction Project Subcontractor)</h5>
                        <p>
                            While amending the installation manuals and floorpans construction project with respect to the clients' requirements.
                            I grasped the importance of effectively communicating with various stakeholders of project.
                            The main takeaway of this internship was the interactive process of iterating through design and specifications,
                            and working with compliance, ensuring safe and effective completion of the project.
                        </p>
                        <h5 class="mt-4">Origami Labs (Local Startup)</h5>
                        <p>
                            I assisted the development of the startup's iOS enterprise mobile application,
                            and assisted their product pilot-testing and deployment.
                            This gave me an exclusive outlook into the process of crafting a seamless solution,
                            truly tailored to its customers, and delivered reliably to a high standard.
                        </p>
                        <button class="btn btn-outline-light" type="button">Employer Review</button>
                    </div>
                </div>
            </div>

            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-7">
                    <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'teal', }}>
                        <h2>Trains for life 🚂</h2>
                        <p>
                            Alongside my briliant colleagues at rail and transport society (ICRTS),
                            we link enthusiastic students with the UK transport industry,
                            hosting a range of industry talks, excursions and social events.
                            As ICRTS' secretary, I've been actively engaged in hosting and cohosting quizzes and industry-oriented talks throughout the year,
                            and the number of inter-university events has remarkably surpassed previous years.
                        </p>
                        <p>
                            Check out our Medium blog page "RailPub", where we document our exciting experiences,
                            and random railfan trivia!
                        </p>
                        <button class="btn btn-outline-light" type="button">RailPub on Medium</button>
                    </div>
                </div>
                <div class="col-md-5 align-content-center align-items-center">
                    <div class="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
                        <Figure>
                            <Figure.Image
                                src={train_image}
                                fluid rounded
                            />
                            <Figure.Caption>
                                ICRTS trip to the Crossrail Old Oak Common depot. (Spring 2020)
                            </Figure.Caption>
                        </Figure>
                    </div>
                </div>
            </div>

            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-4 align-content-center align-items-center">
                    <div class="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
                    <Figure>
                            <Figure.Image
                                src={icra_image}
                                fluid rounded
                            />
                            <Figure.Caption>
                                Imperial College Robotics Academy Lego Mindstorms Workshop. (Autumn 2019)
                            </Figure.Caption>
                        </Figure>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="h-100 p-5 bg-light rounded-3">
                        <h2>Volunteering 🏫</h2>
                        <p>
                            Serving as training manager for robotics academy (ICRA) was one of my most rewarding commitments of the year.
                            While ICRA was previously focused on teaching schoolchildren robotics through building LEGO Mindstorms Robots,
                            in view of coronavirus,
                            we adapted our workshops to a remote-friendly format. I was charged with developing game-orientated learning workshops on Tynker,
                            where schoolchildren can learn to program various games.
                            This process not only enhanced my interest for developing games,
                            but also increased my awareness on creating workshops with educational appeal.
                        </p>
                        <p>
                            Ultimately, it's a joy working with kids, and I'm glad to be a part of their quest towards STEM!
                        </p>
                    </div>
                </div>
            </div>

            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-3">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>CV 📃</h2>
                        <p>
                            A PDF version of my CV is available below.
                            Alternatively, my experiences are also documented on LinkedIn.
                        </p>
                        <button class="btn btn-outline-light" type="button">CV PDF</button>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="h-100 p-5 bg-light rounded-3">
                        <h2>GitHub 💻</h2>
                        <p>
                            Check out my repositories on GitHub!
                        </p>
                        <button class="btn btn-outline-secondary" type="button">GitHub</button>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="h-100 p-5 rounded-3 text-light" style={{ backgroundColor: 'teal', }}>
                        <h2>Blogs ✏️</h2>
                        <p>
                            This is where I blog my jaywalking and train-spotting journeys. Have a read!
                        </p>
                        <button class="btn btn-outline-light" type="button">Medium</button>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Email ✉️</h2>
                        <p>
                            Let's have a chat the traditional way!
                        </p>
                        <button class="btn btn-outline-secondary" type="button">Let's chat</button>
                    </div>
                </div>
            </div>


        </div>
    </main>);
}

export default AboutPage;