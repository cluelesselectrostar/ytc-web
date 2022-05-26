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
        var attr = "";

        //svg.selectAll("text").attr("font-size", "10px");
        // svg.selectAll("use").attr("stroke-width",50); //testing what "use" contains

        svg.selectAll("use")
            .filter(function (d) {
                attr = d3.select(this)._groups[0][0].getAttributeNS('http://www.w3.org/1999/xlink', 'href');
                return attr.includes("#st") || attr.includes("wheelchair") || attr.includes("base") || attr.includes("crutch") || attr.includes("int") || attr.includes("cap") || attr.includes("term");
            })
            .on("mouseover", datum => { // on click to do other things?
                console.log("hovered feature");
                //console.log(datum);
                console.log(datum.srcElement.id);
                console.log(datum.srcElement.href.baseVal);
            })
            .style("cursor", "pointer");
        


    }, []);


    return (
        <MapSVG ref={svgRef} />
    );
}

export default WoodstockTravels;