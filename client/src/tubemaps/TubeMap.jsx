import React from "react";
import { useEffect, useState } from "react";

import { select, event } from "d3-selection";
import { zoom } from "d3-zoom";
import { tubeMap } from "d3-tube-map";
import tubeData from "./tubeData";

import { Button } from 'react-bootstrap';

function TubeMap() {

    const [reset, setReset] = useState(false);

    useEffect(() => {

        select('#tube_map_101')
            .select('svg')
            .remove();

        let container = select("#tube_map_101");

        let tempMap = tubeMap()
            .width(window.innerWidth)
            .height(window.innerHeight)
            .margin({
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            })
            .on("click", function (name) {
                console.log(name);
            });

        //setMap(tempMap);
        container.datum(tubeData).call(tempMap);
        let svg = container.select("svg");
        let zoomBehaviour = zoom()
            .scaleExtent([0.5, 6])
            .on("zoom", zoomed);

        let zoomContainer = svg.call(zoomBehaviour);
        let initialScale = 1;
        let initialTranslate = [100, 0];

        zoom().scaleTo(zoomContainer, initialScale);
        zoom().translateTo(zoomContainer, initialTranslate[0], initialTranslate[1]);

    }, [reset]);

    const zoomed = () => {
        let svg = select("#tube_map_101").select("svg");
        svg.select("g").attr("transform", event.transform.toString());
    }

    const zoomReset = () => {
        console.log("attempt to reset");
        setReset(reset === true ? false : true);
        /*
        let container = select("#tube_map_101");
        let tempMap = tubeMap()
            .width(window.innerWidth)
            .height(window.innerHeight)
            .margin({
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            })
            .on("click", function (name) {
                console.log(name);
            });
        container.datum(tubeData).call(tempMap);
        let svg = container.select("svg");
        let zoomBehaviour = zoom()
            .scaleExtent([0.5, 6])
            .on("zoom", zoomed);
        let zoomContainer = svg.call(zoomBehaviour);
        let initialScale = 1;
        let initialTranslate = [100, 0];
        zoom().scaleTo(zoomContainer, initialScale);
        zoom().translateTo(zoomContainer, initialTranslate[0], initialTranslate[1]);
        */
    }

    return (
        <div style={{ height: "500px" }}>
            <Button variant="primary" style={{ margin: "20px" }} onClick={zoomReset}>Reset View</Button>
            <div
                id="tube_map_101"
                style={{ position: "absolute", width: "100%", height: "100%" }}
            />
        </div>
    );

}

export default TubeMap;
