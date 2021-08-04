import LinkModules from '../components/Links_Module';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

function ContactPage() {
    return (
        <main>
            <PageTitle title="Contact"/>
            <TitleBanner
                title = "Contact Me 🤙"
                description = "Contact me whichever method you desire!"
            />
            <div class="container">
                <LinkModules />
            </div>
        </main>
    );
}

export default ContactPage;