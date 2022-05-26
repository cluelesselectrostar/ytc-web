import React, { useRef, useEffect, useState } from "react";
import { SvgLoader, SvgProxy } from 'react-svgmt';
import useResizeObserver from "./useResizeObserver";
import * as d3 from "d3";
import './Woodstock.css';

//import OptimisedSVG from './optimised.svg';
//import SvgOriginalMap from "./optimised_map";


import { ReactComponent as MapSVG } from './original_map.svg';
import { packSiblings } from "d3";
//import {ReactComponent as MapSVG} from './official_tfl.svg';


function WoodstockTravels() {

    const svgRef = useRef();

    useEffect(() => {

        var svg = d3.select(svgRef.current);

        //svg.selectAll("text").attr("font-size", "5px");

        /*
        svg.selectAll("text").on("click", datum => {
            console.log("clicked text");
            console.log(datum);
            console.log(datum.target.childNodes[0]);
        });
        */

        // svg.selectAll("use").attr("stroke-width",50); //testing what "use" contains

        svg.selectAll("use")
            .filter(function (d) {
                return d3.select(this)._groups[0][0].getAttributeNS('http://www.w3.org/1999/xlink', 'href').includes("st");
            })
            .on("mouseover", datum => {
                console.log("hovered feature");
                //console.log(datum);
                console.log(datum.srcElement.id);
                console.log(datum.srcElement.href.baseVal);
                d3.select(this).style("cursor", "pointer"); 
            })
            .on("mouseout", datum => {
                d3.select(this).style("cursor", "default"); 
            });
        
        /*
        svg.selectAll("use")
            .on("click", datum => {
                console.log("clicked use feature");
                console.log(datum);
                console.log(datum.srcElement.id);
                console.log(datum.srcElement.href.baseVal);
            });
            */


    }, []);


    return (
        <div class="container">
            <MapSVG ref={svgRef} />
        </div>
    );
}

export default WoodstockTravels;