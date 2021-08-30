import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import SquircleBox from '../components/SquircleBox';
import WorldMap from '../covid_tracker/worldmap';

function CovidPage() {
    return (
        <main>
            <PageTitle title="Covid Page"/>
            <TitleBanner
                title = "Coronavirus Tracker 😷"
                description = "The latest data for coronavirus, grabbed from Our World in Data, https://github.com/owid/covid-19-data/tree/master/public/data"
            />
            <div class="container align-items-md-stretch">
                <WorldMap/>
            </div>
        </main>
    );
}

export default CovidPage;