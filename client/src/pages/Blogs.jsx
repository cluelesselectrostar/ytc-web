import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Image from 'react-bootstrap/Image';

import BlogPostList from "../components/BlogPostList"; //MongoDB
import GetBlogs from '../blogs/HTMLGetBlogs'; // Static HTML
// import GetMDTest from '../blogs/GetMDTest'; // Markdown Test

import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

import load_image from '../images/loading.gif';

function BlogsPage() {

    const [blogs, setBlogs] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await axios.get("https://ytc-web.herokuapp.com/api/blogposts" + search);
            setBlogs(res.data);
        }

        fetchBlogs();
    }, [search, blogs]);

    return (
        <main>
            <PageTitle title="Blogs" />
            <TitleBanner
                title="Blogs ✍️"
                description="All my content on Medium, backed up with Markdown!"
            />
            <div class="album py-4">
                <div class="container">
                    <div class="display-6 mt-4">Markdown content loaded from MongoDB</div>
                    {blogs.length < 1 ? (
                        <div class="px-10 py-0 text-center">
                            <Image src={load_image} alt="Photo" fluid />
                            <div>Cute image courtesy of <a href="https://dribbble.com/shots/3790348-game-loading" style={{ color: "black", textDecoration: "none" }}>yuanzi0410</a>.</div>
                        </div >
                    ) : (
                        <BlogPostList posts={blogs} />
                    )}
                    <br class="mt-4"></br>
                    {/* <div class="display-6 mt-4">Local Markdown test articles</div>
                    <GetMDTest/>
                    <br></br> */}
                    <div class="display-6 mt-4">Local HTML Medium articles from 2019-2021</div>
                    <GetBlogs />
                </div>
            </div>
            <div>
                {/* <ReactMarkdown_Render /> */}
                {/* <MdJsx_Render /> */}
            </div>
        </main>
    );
}

export default BlogsPage;