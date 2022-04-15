import React, { Component } from "react";

import * as d3 from "d3";
import * as tubeMap from "d3-tube-map";
import { select, event } from "d3-selection";
import { zoom } from "d3-zoom";
// import { tubeMap } from "d3-tube-map";

const network = {
  stations: {
    Saltburn: {
      label: "Saltburn"
    },
    Marske: {
      label: "Marske"
    },
    Longbeck: {
      label: "Longbeck"
    },
    RedcarEast: {
      label: "Redcar\nEast"
    },
    RedcarCentral: {
      label: "Redcar\nCentral"
    },
    Middlesbrough: {
      label: "Middlesbrough"
    },
    Thornaby: {
      label: "Thornaby"
    }
  },
  lines: [
    {
      name: "lineA",
      color: "#FF0000",
      shiftCoords: [0, 0],
      nodes: [
        {
          coords: [24, 0],
          name: "Saltburn",
          labelPos: "N"
        },
        {
          coords: [18, 0],
          name: "Marske",
          labelPos: "S"
        },
        {
          coords: [12, 0],
          name: "Longbeck",
          labelPos: "N"
        },
        {
          coords: [6, 0],
          name: "RedcarEast",
          labelPos: "S"
        },
        {
          coords: [0, 0],
          name: "RedcarCentral",
          labelPos: "N"
        },
        {
          coords: [-2, 0]
        },
        {
          coords: [-4, -1]
        },
        {
          coords: [-8, -5],
          name: "Middlesbrough",
          labelPos: "E",
          marker: "interchange"
        },
        {
          coords: [-12, -9],
          name: "Thornaby",
          labelPos: "NW"
        }
      ]
    }
  ]
};

class TubeComp extends Component {
  componentDidMount() {
    let container = select("#tube_map_101");

    let map = tubeMap()
      .width(window.innerWidth)
      .height(window.innerHeight)
      .margin({
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      })
      .on("click", function(name) {
        console.log(name);
      });

    container.datum(network).call(map);

    let svg = container.select("svg");

    let zoomBehaviour = zoom()
      .scaleExtent([0.5, 6])
      .on("zoom", zoomed);

    let zoomContainer = svg.call(zoomBehaviour);
    let initialScale = 2;
    let initialTranslate = [100, 200];

    zoom().scaleTo(zoomContainer, initialScale);
    zoom().translateTo(zoomContainer, initialTranslate[0], initialTranslate[1]);

    function zoomed() {
      svg.select("g").attr("transform", d3.event.transform.toString());
    }
  }

  render() {
    return (
      <div
        id="tube_map_101"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    );
  }
}

export default TubeComp;
