import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

import WoodstockTravels from '../travel/Woodstock';


function TubePage() {

    return (
        <main>
            <PageTitle title="Travel" />
            <TitleBanner
                title="Woodstock Travels! 🤙"
                description="Woodstock hitching on Snoopy's rides!"
            />
            <WoodstockTravels />
        </main>
    );
}

export default TubePage;