import React, { useRef, useEffect, useState } from "react";
import * as d3 from 'd3';

function TimeChart({ data, coviddata, property }) {
    const [selectedCountry, setSelectedCountry] = useState("");
    //const [renderList, setRenderList] = useState([]);

    useEffect(() => {
        ////////////////////// Line Graph for time evolution of property in selected country //////////////////////
        var prop_list = [];
        var country_res = null;
        var prop_res = null;
        var prev = 0; var res = 0;

        // Render line graph if a country has been selected
        var cont = "GBR";
        if (cont) {
            for (const country of Object.entries(coviddata)) {
                //console.log(country);
                if (country[0] === cont) {
                    country_res = country[1].data;
                }
            }
            //console.log("country_res");
            //console.log(country_res); // Should be an array of statistics collected on each day.

            if (country_res !== null) {
                prop_res = Object.entries(country_res).map(([k, v]) => (
                    {
                        Label: v.date,
                        Date_Int: new Date(v.date).getTime(),
                        Datum: (function () {
                            res = v[property];
                            if (res === undefined) {
                                prop_list = prop_list.concat(prev);
                                return prev;
                            } else {
                                prev = res;
                                prop_list = prop_list.concat(res);
                                return res;
                            }
                        })()
                    }
                ));
                console.log("prop_res");
                console.log(prop_res);

                console.log("prop_list");
                console.log(prop_list);
                //setRenderList(prop_list);
            }

            // Line Chart
            if (prop_res !== null) {
                drawChart(prop_res, prop_list, 400, 300);
            }
        }
    }, [data, coviddata, property, selectedCountry]);


    function drawChart(prop_res, prop_list, width, height) {

        d3.select('#line_chart')
            .select('svg')
            .remove();

        const margin = { top: 50, right: 50, bottom: 50, left: 50 };
        const yMinValue = d3.min(prop_res, d => d.Datum);
        const yMaxValue = d3.max(prop_res, d => d.Datum);
        const xMinValue = d3.min(prop_res, d => d.Date_Int);
        const xMaxValue = d3.max(prop_res, d => d.Date_Int);

        const svg = d3
            .select('#line_chart')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3
            .scaleLinear()
            .domain([xMinValue, xMaxValue])
            .range([0, width]);
        const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, yMaxValue]);
        const line = d3
            .line()
            .x(d => xScale(d.Date_Int))
            .y(d => yScale(d.Datum))
            .curve(d3.curveMonotoneX);

        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom().scale(xScale).tickSize(15));

        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale));

        //console.log("render list");
        //console.log(renderList);
        svg
            .append('path')
            .datum(prop_res)
            .attr('fill', 'none')
            .attr('stroke', '#f6c3d0')
            .attr('stroke-width', 4)
            .attr('class', 'line')
            .attr('d', line);
    }

    return (
        <div id="line_chart" />
    )
}

export default TimeChart;