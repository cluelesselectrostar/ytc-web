import GeoChart from './Geochart';
// import coviddata from './covid.json';
import React, { useEffect, useRef, useState, Component } from "react";
import data from './custom.geo.json';
import './worldmap.css';

class WorldMap extends Component {

    constructor(props) {
        super(props);

        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1) // just to be safe, limit data to 1 days ago
        yesterday.toDateString()
        console.log(yesterday);

        var dd = String(yesterday.getDate()).padStart(2, '0');
        var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = yesterday.getFullYear();

        var date_string = yyyy + '-' + mm + '-' + dd;

        this.state = {
            property: "total_cases",
            today: date_string,
            date: date_string,
            coviddata: []
        }
    }

    async componentWillMount() {
        fetch('https://covid.ourworldindata.org/data/owid-covid-data.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    coviddata: data
                });
                console.log(data);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <GeoChart
                        data={data}
                        coviddata={
                            (this.props.import_covid === null) ? this.state.coviddata : this.props.import_covid
                        }
                        property={this.state.property}
                        date={this.state.date}
                    />
                </div>

                <h3>Specify your search</h3>

                <div class="row align-items-center justify-content-center ">
                    <div class="col-md-4"><h5>Coronavirus Property</h5></div>
                    <div class="col-md-4">
                        <select
                            value={this.state.property}
                            onChange={event => this.setState({ property: event.target.value })}
                            style={{ width: "100%" }}
                        >
                            {/* <option value="pop_est">Population</option>
                    <option value="name_len">Name length</option>
                <option value="gdp_md_est">GDP</option> */}
                            <option value="reproduction_rate">R Rate</option>
                            <option value="new_cases">New Cases</option>
                            <option value="new_cases_per_million">New Cases Per Million</option>
                            <option value="total_cases">Total Cases</option>
                            <option value="total_cases_per_million">Total Cases Per Million</option>
                            <option value="new_deaths">New Deaths</option>
                            <option value="new_deaths_per_million">New Deaths Per Million</option>
                            <option value="total_cases">Total Deaths</option>
                            <option value="total_deaths_per_million">Total Deaths Per Million</option>
                            <option value="new_tests">New Tests</option>
                            <option value="new_tests_per_thousand">New Tests Per Thousand</option>
                            <option value="total_tests">Total Tests</option>
                            <option value="total_tests_per_thousand">Total Tests Per Thousand</option>
                            <option value="total_vaccinations">Total Vaccinations</option>
                            <option value="total_vaccinations_per_hundred">Total Vaccinations Per Hundred</option>
                            <option value="people_vaccinated">People Vaccinated</option>
                            <option value="people_vaccinated_per_hundred">People Vaccinated Per Hundred</option>
                            <option value="stringency_index">Stringency Index</option>
                        </select>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center mt-2">
                    <div class="col-md-4"><h5>Data collection date</h5></div>
                    <div class="col-md-4">
                        <input
                            class="mt-2"
                            type="date"
                            id="start"
                            name="trip-start"
                            value={this.state.date}
                            min="2020-01-01"
                            max={this.state.today}
                            style={{ width: "100%" }}
                            onChange={event => this.setState({ date: event.target.value })}
                        ></input>
                    </div>

                </div>
            </div>
        );
    }

}

export default WorldMap;
