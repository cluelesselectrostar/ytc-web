import { Component } from 'react';

import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';
import SquircleBox from '../components/SquircleBox';
import WorldMap from '../covid_tracker/worldmap';

class CovidPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main>
                <PageTitle title="Covid Page" />
                <TitleBanner
                    title="Coronavirus Tracker 😷"
                    description="My newest weekend project: the latest data for coronavirus, grabbed from Our World in Data."
                />
                <div class="container align-items-md-stretch mt-4">
                    <WorldMap import_covid={this.props.coviddata} />
                </div>

                <div class="container py-4 mt-4">
                    <SquircleBox
                        title="About the properties"
                        appearance="teal"
                        content={
                            <div></div>
                        }
                    />
                </div>

                <div class="container py-4">
                    <SquircleBox
                        title="About this project"
                        appearance="bordered-grey"
                        content={
                            <div></div>
                        }
                    />
                </div>
            </main>
        );
    }
}

export default CovidPage;