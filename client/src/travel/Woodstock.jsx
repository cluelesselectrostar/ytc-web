import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

import React, { useRef, useEffect, useState } from "react";
//import { SvgLoader, SvgProxy } from 'react-svgmt';
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import * as d3 from "d3";
import ReactTooltip from 'react-tooltip';

import './Woodstock.css';

//import OptimisedSVG from './optimised.svg';
//import SvgOriginalMap from "./optimised_map";
//import {ReactComponent as MapSVG} from './official_tfl.svg';
import { ReactComponent as MapSVG } from './original_map.svg';


function WoodstockTravels() {

    const width = window.innerWidth;

    const svgRef = useRef();
    const [selectedStation, setSelectedStation] = useState("Hover over a station for details!");
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {

        if (width < 620) {
            setMobile(true);
        } else {
            setMobile(false);
        }

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
                d3.select(this).append("div").html("FIRST LINE <br> SECOND LINE");

                if (datum.srcElement.id != "") {
                    setSelectedStation(datum.srcElement.id);
                }
            })
    }, []);


    return (
        <main>
            <PageTitle title="Travel" />
            <TitleBanner
                title="Woodstock Travels! 🤙"
                description="Woodstock hitching on Snoopy's rides!"
            />
            {isMobile ?
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: 0, top: "1%" }}>{selectedStation}</Alert>
                :
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: 0, top: "1%", width: "300px" }}>{selectedStation}</Alert>
            }
            <div>
                <MapSVG ref={svgRef} />
            </div >
        </main>
    );
}

export default WoodstockTravels;