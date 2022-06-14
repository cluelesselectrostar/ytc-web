import TitleBanner from '../components/TitleBanner';
import PageTitle from '../components/PageTitle';

import React, { useRef, useEffect, useState } from "react";
//import { SvgLoader, SvgProxy } from 'react-svgmt';
//import Alert from 'react-bootstrap/Alert';
import CentreModal from '../components/CentreModal';
import Image from 'react-bootstrap/Image';
import * as d3 from "d3";

import './Woodstock.css';

import stationData from './stations.json';
//import SvgOriginalMap from "./optimised_map";
import woodstock from '../images/woodstock.png';
import { ReactComponent as MapSVG } from './original_map.svg';

function WoodstockTravels() {

    const width = window.innerWidth;

    const svgRef = useRef();
    const [selectedStation, setSelectedStation] = useState("Hover over a station for details!");
    const [infoTip, setInfoTip] = useState(null);
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

        svg.selectAll("use")
            .filter(function (d) {
                return filter_stations(this);
            })
            .each(function (d, i) {
                var station_name = d3.select(this)._groups[0][0].id;
                //console.log(i); // index              
                if (station_name !== "") {
                    //console.log(station_name);                 
                    for (const item of stationData) {
                        if (item.ID === station_name) {
                            svg.select(`#${station_name}`).datum(item);
                            //console.log("matched");
                            break;
                        }
                    }
                }
            }
            );

        svg.selectAll("use")
            .filter(function (d) {
                return filter_stations(this);
            })
            .on("mouseover", datum => {
                //console.log("hovered feature id:" + datum.srcElement.id + ", baseVal:" + datum.srcElement.href.baseVal);
                if (datum.srcElement.id !== "") {
                    var stationInfo = datum.srcElement.__data__;
                    console.log(stationInfo);
                    setSelectedStation(datum.srcElement.id);
                    setInfoTip(stationInfo);
                    //console.log(datum);
                }
            })
            .on("click", datum => {
                if (datum.srcElement.id !== "") {
                    setSelectedStation(datum.srcElement.id);
                    handleShow();
                }
            })
            .style("cursor", "pointer")

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
                title={<h1 class="display-5 fw-bold">Woodstock Travels! <Image
                    height={70}
                    alt="Woodstock"
                    src={woodstock}
                    style={{ marginLeft: "10px" }}
                /></h1>}
                description={
                    <div>
                        <p>
                            I recently learnt that Japan has a travel agency for stuffed animals, which appeared very amusing to me.
                            So while I am not ready to splurge large amounts on sending my dolls to travel, this is a cool idea,
                            I was thinking how I could recreate something of a similar nature.
                        </p>
                        <p>
                            Since I am a fan of the Underground, I have decidedto bring Woodstock on every station on the tube,
                            which will inject a bit more purpose into my frequent commuting and trainspotting trips.
                            In addition, it will be a great excuse for me to rejuvenate my abandoned photography instagram account,
                            and to learn a bit of vector graphics rendering for the web.
                        </p>
                        <p>
                            So hop on Snoopy's back and whiz through the world's oldest Underground system!
                        </p>
                        <br></br>
                        <p>
                            <small>
                                SVG map extracted from <a href="https://upload.wikimedia.org/wikipedia/commons/1/13/London_Underground_Overground_DLR_Crossrail_map.svg">Wikipedia</a>.
                                There are currently no images uploaded on this site yet, but meanwhile I have implemented a couple interactive elements on this map
                                (beyond the already useful OSI tooltips and blinking lines in the original file!)
                            </small>
                        </p>
                    </div>
                }
            />

            {/* {isMobile ?
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: "1%", top: "1%" }}>{selectedStation}</Alert>
                :
                <Alert variant="success" style={{ position: "sticky", margin: "5px", left: "1%", top: "1%", width: "300px" }}>{selectedStation}</Alert>
            } */}

            <div>
                <MapSVG ref={svgRef} />
            </div >

            {infoTip === null ?
                <CentreModal
                    title="Station placeholder"
                    content={null}
                    show={show}
                    onHide={() => setShow(false)}
                />
                :
                <CentreModal
                    title={infoTip.Station}
                    content={infoTip}
                    show={show}
                    onHide={() => setShow(false)}
                />
            }
        </main>
    );
}

export default WoodstockTravels;