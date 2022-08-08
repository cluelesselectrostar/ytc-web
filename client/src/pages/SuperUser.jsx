import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import image_3 from "../images/jaywalking/edited-1054311.webp";
import BlogAmend from '../components/BlogAmend';
// import ExternalApi from '../auth/externalapi';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import LoadingGif from "../components/LoadingGIF";

function SuperUserPage({ blogdata }) {

    const [loaded, setLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        if (blogdata) {
            setLoaded(true);
            setBlogs(blogdata);
        }
    }, [search, setBlogs, blogdata]);

    return (<main>

        <PageTitle title="Admin" />
        <TitleBanner
            title="Superuser page for managing website Backend"
            description="Content only available upon logging in. Why are you here?"
            image={image_3}
        />
        <div className="container col-md-10 mt-4">
            {loaded ? (
                <BlogAmend blogdata={blogs} />
            ) : (
                <LoadingGif />
            )}
        </div>
    </main >);
}

export default SuperUserPage;