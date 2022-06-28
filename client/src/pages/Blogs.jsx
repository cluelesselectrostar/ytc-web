import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Image from 'react-bootstrap/Image';

import BlogPostList from "../components/BlogPostList"; //MongoDB
import GetBlogs from '../blogs/HTMLGetBlogs'; // Static HTML
// import GetMDTest from '../blogs/GetMDTest'; // Markdown Test

import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

import load_image from '../images/loading.gif';

import { ytc_links } from '../components/Links';
import SquircleBox from '../components/SquircleBox';
import image_1 from "../images/jaywalking/edited-1054311.webp";
import image_2 from "../images/jaywalking/edited-1054329.webp";
import image_3 from "../images/jaywalking/edited-1054347.webp";
import image_4 from "../images/jaywalking/edited-1054516.webp";
import image_5 from "../images/jaywalking/edited-1054537.webp";
import image_6 from "../images/jaywalking/edited-1054607.webp";
import image_7 from "../images/jaywalking/edited-1054755.webp";


function BlogsPage({ blogdata }) {

    const [loaded, setLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        if (blogdata) {
            setLoaded(true);
            setBlogs(blogdata);
        } 
    }, [search, setBlogs, blogdata]);

    return (
        <main>
            <PageTitle title="Blogs" />
            <TitleBanner
                title="Blogs ✍️"
                description="All my content on Medium, backed up with Markdown!"
            />
            <div class="album py-4">
                <div class="container">
                    <SquircleBox
                        appearance="bordered-grey"
                        content={
                            <div>
                                <div class="row align-items-center align-content-center">
                                    <div class="col-md-7 mt-4">
                                        <h2>Jaywalking 🚶‍♂️</h2>
                                        <p>
                                            I love travelling and taking photographs, but I like to call it "jaywalking" because half the time I don't even have any idea what I'm looking for. In addition, I tend to capture my best shots at familiar locations, but during the most unexpected moments.
                                        </p>
                                        <p>
                                            Similar to what I've done for trainspotting, I have written a couple blogs on Medium, and several Tibet Travel blogs on Exposure. That said, I am aware of the implications of publishing on a commercialised site, so I am planning to gradually migrate the content and upload the blogs to this site. Fingers crossed for that!
                                        </p>
                                        <a class="btn btn-outline-secondary" style={{ width: "200px" }} href={ytc_links.myMedium}>Yanni Chau on Medium</a>
                                    </div>
                                    <div class="col-md-5 mt-4">
                                        <div id="myCarousel2" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <Image src={image_1} fluid height="30%" rounded />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image src={image_2} fluid height="30%" rounded />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image src={image_3} fluid height="30%" rounded />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image src={image_4} fluid height="30%" rounded />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image src={image_5} fluid height="30%" rounded />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image src={image_6} fluid height="30%" rounded />
                                                </div>
                                                <div class="carousel-item">
                                                    <Image src={image_7} fluid height="30%" rounded />
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                    <br></br>

                    <div class="display-6 mt-4">Markdown content loaded from MongoDB</div>
                    {loaded ? (
                        <BlogPostList posts={blogs} />
                    ) : (
                        <div class="px-10 py-0 text-center">
                            <Image src={load_image} alt="Photo" fluid />
                            <div>Cute image courtesy of <a href="https://dribbble.com/shots/3790348-game-loading" style={{ color: "black", textDecoration: "none" }}>yuanzi0410</a>.</div>
                        </div >
                    )}
                    <br class="mt-4"></br>
                    <div class="display-6 mt-4">Local HTML Medium articles from 2019-2021</div>
                    <GetBlogs />
                </div>
            </div>

        </main>
    );
}

export default BlogsPage;