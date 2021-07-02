import LinkModules from '../components/Links_Module';
import TitleBanner from '../components/TitleBanner';

function ContactPage() {
    return (
        <main>
            <TitleBanner
                title = "Contact Me"
                description = "Let's get in touch via whichever method you desire!"
            />

            <div class="container">
                <LinkModules />
            </div>
        </main>
    );
}

export default ContactPage;