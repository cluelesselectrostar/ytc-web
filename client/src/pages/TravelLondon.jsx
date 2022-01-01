import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import TubeMap from '../tubemaps/TubeMap';
import LinkModules from '../components/Links_Module';

function TravelPage() {

    return (
        <main>
            <PageTitle title="Tube Map" />
            <TitleBanner
                title="Interesting visualisations for London's Underground 🚆"
                description="London Underground's map has never been this malleable before!"
            />
            <TubeMap/>
            {/* <LinkModules/> */}
        </main>
    )

}

export default TravelPage;