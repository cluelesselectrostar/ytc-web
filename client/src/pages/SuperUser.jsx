import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import image_3 from "../images/jaywalking/edited-1054311.webp";
import AuthenticationButton from '../components/Authentication';
import Profile from '../components/Profile';

function SuperUserPage() {

    return (<main>

        <PageTitle title="Admin" />
        <TitleBanner
            title="Superuser page for managing website Backend"
            description="Content only available upon logging in. Why are you here?"
            image={image_3}
        />
        <div className="container mt-4">
            <AuthenticationButton />
            <Profile/>
        </div>
    </main >);
}

export default SuperUserPage;