import GetBlogs from '../blogs/GetBlogs';
import GetMDTest from '../blogs/GetMDTest';

import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
//import ReactMarkdown_Render from '../markdown-test/markdown-render';
//import MdJsx_Render from '../markdown-test/MDImport';

function BlogsPage() {
    return (
        <main>
            <PageTitle title="Blogs" />
            <TitleBanner
                title="Blogs ✍️"
                description="All my content on Medium, backed up with Markdown!"
            />
            <div class="album py-4">
                <div class="container">
                    <div class="display-6 mt-4">Markdown test articles</div>
                    <GetMDTest/>
                    <br></br>
                    <div class="display-6 mt-4">Medium articles from 2019-2021</div>
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