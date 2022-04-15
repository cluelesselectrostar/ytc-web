import LinkModules from '../components/Links_Module';
import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import TubeComp from '../components/TubeComp';

function TubeMapPage() {
    return (
        <main>
            <PageTitle title="Tube Map"/>
            <TitleBanner
                title = "Tube map"
                description = "All the places I have been to!"
            />
            <TubeComp/>
            <div class="container">
                <LinkModules />
            </div>
        </main>
    );
}

export default TubeMapPage;