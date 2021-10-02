import GetBlogs from '../blogs/GetBlogs';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

function BlogsPage() {
    return (
        <main>
            <PageTitle title="Blogs"/>
            <TitleBanner
                title = "Blogs ✍️"
                description = "All my content on Medium, backed up with Markdown!"
            />
            <div class="album py-4">
                <div class="container">
                    <GetBlogs/>
                </div>
            </div>
        </main>
    );
}

export default BlogsPage;