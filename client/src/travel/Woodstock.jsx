import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

import React, { useRef, useEffect, useState } from "react";
//import { SvgLoader, SvgProxy } from 'react-svgmt';
import Alert from 'react-bootstrap/Alert';
import CentreModal from '../components/CentreModal';

import * as d3 from "d3";

import './Woodstock.css';

//import SvgOriginalMap from "./optimised_map";
import { ReactComponent as MapSVG } from './original_map.svg';


function WoodstockTravels() {

    const width = window.innerWidth;

    const svgRef = useRef();
    const [selectedStation, setSelectedStation] = useState("Hover over a station for details!");
    const [isMobile, setMobile] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var attr = "";

    // FILTER FUNCTIONS

    const filter_stations = (input) => {
        attr = d3.select(input)._groups[0][0].getAttributeNS('http://www.w3.org/1999/xlink', 'href');
        list.push(d3.select(input)._groups[0][0].id);
        //console.log(list);
        return attr.includes("#st") || attr.includes("wheelchair") || attr.includes("base") || attr.includes("crutch") || attr.includes("int") || attr.includes("cap") || attr.includes("term") || attr.includes("hub");
    };

    var list = [];

    useEffect(() => {

        if (width < 620) {
            setMobile(true);
        } else {
            setMobile(false);
        }

        var svg = d3.select(svgRef.current);

        // svg.selectAll("text").attr("font-size", "10px");
        // svg.selectAll("use").attr("stroke-width",50); //testing what "use" contains

        svg.selectAll("use")
            .filter(function (d) {
                return filter_stations(this);
            })
            .on("mouseover", datum => {
                //console.log("hovered feature id:" + datum.srcElement.id + ", baseVal:" + datum.srcElement.href.baseVal);
                if (datum.srcElement.id !== "") {
                    setSelectedStation(datum.srcElement.id);
                }
            })
            .on("click", datum => {
                if (datum.srcElement.id !== "") {
                    setSelectedStation(datum.srcElement.id);
                    handleShow();
                }
            })
            .style("cursor", "pointer");

        svg.selectAll("#Bank_Monument_hub")
            .on("mouseover", datum => {
                if (datum.srcElement.id !== "") {
                    console.log("Hovered over bank monument hub")
                    setSelectedStation(datum.srcElement.id);
                }
            })
            .on("click", datum => {
                if (datum.srcElement.id !== "") {
                    setSelectedStation(datum.srcElement.id);
                    handleShow();
                }
            })
            .style("cursor", "pointer");

    }, []);


    return (
        <main>
            <PageTitle title="Travel" />
            <TitleBanner
                title="Woodstock Travels! 🤙"
                description="Woodstock hitching on Snoopy's rides!"
            />

            {/* {isMobile ?
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: "1%", top: "1%" }}>{selectedStation}</Alert>
                :
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: "1%", top: "1%", width: "300px" }}>{selectedStation}</Alert>
            } */}

            <div>
                <MapSVG ref={svgRef} />
            </div >

            <CentreModal
                title="Station name"
                content="Woodstock has not been here before!"
                show={show}
                onHide={() => setShow(false)}
            />
        </main>
    );
}

export default WoodstockTravels;