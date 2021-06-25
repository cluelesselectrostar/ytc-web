import circuit_image from '../images/circuit.jpeg';
import wales_image from '../images/wales.JPEG';
import icra_image from '../images/ICRA.jpeg';
import train_image from '../images/oldoakcommon.JPG';
import Image from 'react-bootstrap/Image';
import './About.css';

function AboutPage() {

    return (<main>

        <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                <span class="fs-4">Jumbotron example</span>
            </a>
        </header>


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
                    <Image src={wales_image} alt="Wales Ffestiniog and Heritage Railway." fluid rounded />
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
                        <Image src={circuit_image} alt="Circuits and Systems Lab Breadboard." fluid />
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
                            The maint takeaway of this internship was the interactive process of iterating through design and specifications,
                            and working with compliance and regulations, ensuring that the project is compeleted safely and effectively.
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
                        <Image src={train_image} alt="ICRTS photo taken at Old Oak Common." fluid rounded />
                    </div>
                </div>
            </div>

            <div class="row align-items-md-stretch mb-4">
                <div class="col-md-4 align-content-center align-items-center">
                    <div class="h-100 p-2 bg-white border rounded-3 align-content-center align-items-center">
                        <Image src={icra_image} alt="ICRA Workshop." fluid rounded />
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