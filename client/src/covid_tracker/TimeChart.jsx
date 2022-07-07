import React, { useEffect } from "react";
import * as d3 from 'd3';
import useWindowDimensions from "./useWindowsDimensions";

function TimeChart({ coviddata, property, selectedCountry }) {
    //const [renderList, setRenderList] = useState([]);
    const { height, width } = useWindowDimensions();
    console.log(width);

    useEffect(() => {
        ////////////////////// Line Graph for time evolution of property in selected country //////////////////////
        var prop_list = [];
        var country_res = null;
        var prop_res = null;
        var prev = 0;

        // Render line graph if a country has been selected
        if (selectedCountry) {
            for (const country of Object.entries(coviddata)) {
                //console.log(country);
                if (country[0] === selectedCountry) {
                    country_res = country[1].data;
                }
            }
            //console.log("country_res");
            //console.log(country_res); // Should be an array of statistics collected on each day.

            if (country_res !== null) {
                prop_res = Object.entries(country_res).map(([k, v]) => (
                    {
                        Label: d3.timeParse("%Y-%m-%d")(v.date),
                        Date_Int: new Date(v.date).getTime(),
                        Datum: (function () {
                            var res = v[property];
                            if (res === undefined) {
                                prop_list = prop_list.concat(prev);
                                return prev;
                            } else {
                                prev = res;
                                prop_list = prop_list.concat(res);
                                return res;
                            }
                        })(),
                        TooltipContent: `<b>Date: </b>${v.date}<br><b>${property}: </b>${prev}`
                    }
                ));
                console.log("prop_res");
                console.log(prop_res);

                //console.log("prop_list");
                //console.log(prop_list);
                //setRenderList(prop_list);
            }

            // Line Chart
            if (prop_res !== null) {
                if (width<400) {
                    drawChart(prop_res, prop_list, width*0.7, height*0.4);
                } else {
                    drawChart(prop_res, prop_list, 600, 400);
                }
                
            }
        }
    }, [coviddata, property, selectedCountry, height, width]);


    function drawChart(prop_res, prop_list, width, height) {

        d3.select('#line_chart')
            .select('svg')
            .remove();

        const margin = { top: 10, right: 10, bottom: 50, left: 50 };
        const yMinValue = d3.min(prop_res, d => d.Datum);
        const yMaxValue = d3.max(prop_res, d => d.Datum);
        const xMinValue = d3.min(prop_res, d => d.Date_Int);
        const xMaxValue = d3.max(prop_res, d => d.Date_Int);
        const dateMinValue = d3.min(prop_res, d => d.Label);
        const dateMaxValue = d3.max(prop_res, d => d.Label);

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
            .domain([yMinValue, yMaxValue]);
        const dateScale = d3
            .scaleTime()
            .range([0, width])
            .domain([dateMinValue, dateMaxValue]);
        const line = d3
            .line()
            .x(d => xScale(d.Date_Int))
            .y(d => yScale(d.Datum))
            .curve(d3.curveMonotoneX);

        svg
            .append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(0,${height})`)
            .call(
                d3.axisBottom(xScale)
                    .tickSize(-height)
                    .tickFormat(''),
            );
        svg
            .append('g')
            .attr('class', 'grid')
            .call(
                d3.axisLeft(yScale)
                    .tickSize(-width)
                    .tickFormat(''),
            );
        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom().scale(dateScale).tickSize(10));

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
            .attr('stroke', '#0D6445')
            .attr('stroke-width', 4)
            .attr('class', 'line')
            .attr('d', line);

        ////////////////// Tooltip //////////////////
        /* const focus = svg
            .append('g')
            .attr('class', 'focus')
            .style('display', 'none');
        focus.append('circle').attr('r', 5).attr('class', 'circle');

        const tooltip = d3
            .select('#line_chart')
            .append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);
        svg
            .append('rect')
            .attr('class', 'overlay')
            .attr('width', width)
            .attr('height', height)
            .style('opacity', 0)
            .on('mouseover', () => {
                focus.style('display', null);
            })
            .on('mouseout', () => {
                tooltip
                    .transition()
                    .duration(300)
                    .style('opacity', 0);
            })
            .on('mousemove', mousemove);

        function mousemove(event) {
            const bisect = d3.bisector(d => d.Date_Int).left;
            const xPos = d3.pointer(this)[0];
            const x0 = bisect(prop_res, xScale.invert(xPos));
            const d0 = prop_res[x0];
            focus.attr(
                'transform',
                `translate(${xScale(d0.Date_Int)},${yScale(d0.Datum)})`,
            );
            tooltip
                .transition()
                .duration(300)
                .style('opacity', 0.9);
            tooltip
                .html(d0.tooltipContent || d0.Date_Int)
                .style(
                    'transform',
                    `translate(${xScale(d0.Date_Int) + 30}px,${yScale(d0.Datum) - 30}px)`,
                );
        } */
    }

    return (
        <center><div id="line_chart" className="container" /></center>
    )
}

export default TimeChart;