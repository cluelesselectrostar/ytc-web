import LinkModules from './Links_Module';

function ContactPage() {
    return (
        <main>
            <div class="align-items-md-stretch h-100 p-5 bg-light rounded-3">
                <h1 class="display-5 fw-bold">Contact Me 🤙</h1>
                <p class="lead">
                    Contact me whichever method you desire!
                </p>
            </div>

            <div class="container py-4 mt-4">
                <LinkModules />
            </div>
        </main>
    );
}

export default ContactPage;