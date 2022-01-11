// import coviddata from './covid.json';
// import React, { useEffect, useRef, useState } from "react";
import countries from "./countries";
import React, { Component } from "react";
import TimeChart from './TimeChart';

class LineChartWrapper extends Component {

    constructor(props) {
        super(props);

        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 5); // just to be safe, limit data to 1 days ago
        yesterday.toDateString();
        console.log(yesterday);

        var dd = String(yesterday.getDate()).padStart(2, '0');
        var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = yesterday.getFullYear();

        var date_string = yyyy + '-' + mm + '-' + dd;

        this.state = {
            property: "total_cases",
            today: date_string,
            date: date_string,
            countries: null,
            country: "GBR",
            //coviddata:[],
            //loading:false
        }
    }

    render() {
        console.log(countries);

        return (
            <div class="mt-4">
                <br></br>
                <div class="container">
                    {(this.props.import_covid.length < 100) ?
                        (
                            <div>
                                <div class="display-5">
                                    Data is still loading. This might take up to 10 seconds.
                                </div>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                    <TimeChart
                        coviddata={this.props.import_covid}
                        property={this.state.property}
                        selectedCountry={this.state.country}
                    />

                </div>

                <h3 style={{ textAlign: "center" }}>Time Evolution</h3>
                <div class="row align-items-center justify-content-center ">
                    <div class="col-md-3"><h5>Coronavirus Property</h5></div>
                    <div class="col-md-3">
                        <select
                            value={this.state.property}
                            onChange={event => this.setState({ property: event.target.value })}
                            style={{ width: "100%" }}
                        >
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
                    <div class="col-md-3"><h5>Country</h5></div>
                    <div class="col-md-3">
                        <select
                            value={this.state.country}
                            onChange={event => {
                                this.setState({ country: event.target.value })
                            }}
                            style={{ width: "100%" }}
                        >
                            {countries.map(
                                country => (
                                    // <option value={country[0]}>{country[1].location}</option>
                                    <option value={country}></option>
                                )
                            )}
                        </select>
                    </div>

                </div>


            </div>
        );
    }

}

export default LineChartWrapper;
