import * as React from "react";

const SvgOriginalMap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={2500}
    height={1320}
    viewBox="-40.5 -120.5 2500 1320"
    {...props}
  >
    <style>
      {
        "text{font-family:Arimo,Liberation Sans,HammersmithOne,Helvetica,Arial,sans-serif}.original_map_svg__textbg{stroke:#fff;stroke-width:3;stroke-linejoin:round}.original_map_svg__st{font-size:14px;fill:#000}.original_map_svg__x{fill:#999}.original_map_svg__b{font-weight:600}.original_map_svg__mid{text-anchor:middle}.original_map_svg__end{text-anchor:end}.original_map_svg__ul{text-decoration:underline;cursor:help}.original_map_svg__me,.original_map_svg__mes{fill:none;stroke-width:5}.original_map_svg__mes{stroke-width:1.5;stroke:#fff;stroke-linecap:round}.original_map_svg__meb{fill:none;stroke-width:5.5}.original_map_svg__xb{stroke-dasharray:4,3}.original_map_svg__mex{fill:none;stroke-width:3.5;stroke:#fff}.original_map_svg__fbakerloo{fill:#894e24}.original_map_svg__sbakerloo{stroke:#894e24}.original_map_svg__fcentral{fill:#dc241f}.original_map_svg__scentral{stroke:#dc241f}.original_map_svg__fcircle{fill:#d90}.original_map_svg__scircle{stroke:#ffce00}.original_map_svg__bcircle{stroke:#d90}.original_map_svg__fdistrict{fill:#007229}.original_map_svg__sdistrict{stroke:#007229}.original_map_svg__fhnc{fill:#c78}.original_map_svg__shnc{stroke:#d799af}.original_map_svg__bhnc{stroke:#c78}.original_map_svg__fjubilee{fill:#777}.original_map_svg__sjubilee{stroke:#868f98}.original_map_svg__fmetropolitan{fill:#826}.original_map_svg__smetropolitan{stroke:#751056}.original_map_svg__fnorthern{fill:#000}.original_map_svg__snorthern{stroke:#000}.original_map_svg__fpiccadilly{fill:#0019a8}.original_map_svg__spiccadilly{stroke:#0019a8}.original_map_svg__fvictoria{fill:#09d}.original_map_svg__svictoria{stroke:#00a0e2}.original_map_svg__fwnc{fill:#5b9}.original_map_svg__swnc{stroke:#76d0bd}.original_map_svg__swnc2{stroke:#0019a8;stroke-width:.5;fill:none}.original_map_svg__fdlr{fill:#00a4a7}.original_map_svg__sdlr{stroke:#00a4a7}.original_map_svg__sdlr2,.original_map_svg__tleg:hover{stroke:#fff;stroke-width:1;fill:none}.original_map_svg__fog{fill:#e87511}.original_map_svg__sog{stroke:#e87511}.original_map_svg__felizabeth{fill:#7156a5}.original_map_svg__selizabeth{stroke:#7156a5}.original_map_svg__sgreenford{stroke:#177f0b}.original_map_svg__stl{stroke:#6c0;stroke-width:2;fill:none}.original_map_svg__ftl{fill:#5b0}.original_map_svg__rn{fill:#99f}.original_map_svg__osi,.original_map_svg__osib{fill:none;stroke:#fff;stroke-width:4}.original_map_svg__osi{stroke:#009;stroke-width:2;cursor:help}.original_map_svg__isi{stroke:#000;stroke-width:6;fill:none}.original_map_svg__branch,.original_map_svg__isit{stroke:#fff;stroke-width:2;fill:none}.original_map_svg__branch{stroke-width:3;stroke-dasharray:4}.original_map_svg__tleg:hover{fill:#009;stroke:#009;cursor:pointer}.original_map_svg__tleg:active{cursor:progress}.original_map_svg__blink,.original_map_svg__toff:hover{cursor:pointer}.original_map_svg__progress:active,.original_map_svg__toff:active{cursor:progress}.original_map_svg__blink{fill:none;stroke-width:12;stroke-linecap:round;opacity:0}.original_map_svg__blink,.original_map_svg__zone_layer{visibility:hidden}.original_map_svg__zonefg,.original_map_svg__zonefw{font-size:35px;fill:#fff;stroke:#ddd;stroke-width:1}.original_map_svg__zonefg{fill:#efefef}.original_map_svg__zonedf{font-size:13px;fill:#999;stroke:none}"
      }
    </style>
    <defs>
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__sbakerloo"
        id="original_map_svg__termbakerloo"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__scentral"
        id="original_map_svg__termcentral"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__scircle"
        id="original_map_svg__termcircle"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__sdistrict"
        id="original_map_svg__termdistrict"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__shnc"
        id="original_map_svg__termhnc"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__sjubilee"
        id="original_map_svg__termjubilee"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__smetropolitan"
        id="original_map_svg__termmetropolitan"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__snorthern"
        id="original_map_svg__termnorthern"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__spiccadilly"
        id="original_map_svg__termpiccadilly"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__svictoria"
        id="original_map_svg__termvictoria"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__sdlr"
        id="original_map_svg__termdlr"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__sog"
        id="original_map_svg__termog"
      />
      <use
        xlinkHref="#original_map_svg__term"
        className="original_map_svg__selizabeth"
        id="original_map_svg__termelizabeth"
      />
      <use
        xlinkHref="#original_map_svg__termx"
        className="original_map_svg__selizabeth"
        id="original_map_svg__termelizabethx"
      />
      <use
        xlinkHref="#original_map_svg__termx"
        className="original_map_svg__snorthern"
        id="original_map_svg__termnorthernx"
      />
      <use
        xlinkHref="#original_map_svg__termx"
        className="original_map_svg__sog"
        id="original_map_svg__termogx"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__sbakerloo"
        id="original_map_svg__stbakerloo"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__scentral"
        id="original_map_svg__stcentral"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__sdistrict"
        id="original_map_svg__stdistrict"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__sjubilee"
        id="original_map_svg__stjubilee"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__smetropolitan"
        id="original_map_svg__stmetropolitan"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__snorthern"
        id="original_map_svg__stnorthern"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__spiccadilly"
        id="original_map_svg__stpiccadilly"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__svictoria"
        id="original_map_svg__stvictoria"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__sdlr"
        id="original_map_svg__stdlr"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__sog"
        id="original_map_svg__stog"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__selizabeth"
        id="original_map_svg__stelizabeth"
      />
      <use
        xlinkHref="#original_map_svg__st"
        className="original_map_svg__sgreenford"
        id="original_map_svg__stgreenford"
      />
      <g id="original_map_svg__termmetropolitan2">
        <use
          xlinkHref="#original_map_svg__termb"
          className="original_map_svg__meb"
          style={{
            stroke: "#fff",
          }}
        />
        <use xlinkHref="#original_map_svg__termmetropolitan" />
      </g>
      <g id="original_map_svg__stcircle">
        <use
          xlinkHref="#original_map_svg__stb"
          className="original_map_svg__meb original_map_svg__bcircle"
        />
        <use
          xlinkHref="#original_map_svg__st"
          className="original_map_svg__scircle"
        />
      </g>
      <g id="original_map_svg__sthnc">
        <use
          xlinkHref="#original_map_svg__stb"
          className="original_map_svg__meb original_map_svg__bhnc"
        />
        <use
          xlinkHref="#original_map_svg__st"
          className="original_map_svg__shnc"
        />
      </g>
      <g id="original_map_svg__stmetropolitan2">
        <use
          xlinkHref="#original_map_svg__stb"
          className="original_map_svg__meb"
          style={{
            stroke: "#fff",
          }}
        />
        <use xlinkHref="#original_map_svg__stmetropolitan" />
      </g>
      <g id="original_map_svg__stpiccadilly2">
        <use
          xlinkHref="#original_map_svg__stb"
          className="original_map_svg__meb"
          style={{
            stroke: "#fff",
          }}
        />
        <use xlinkHref="#original_map_svg__stpiccadilly" />
      </g>
      <g id="original_map_svg__stmetropolitanx">
        <use
          xlinkHref="#original_map_svg__stx"
          className="original_map_svg__smetropolitan"
        />
        <use xlinkHref="#original_map_svg__stxm" />
      </g>
      <g id="original_map_svg__stnorthernx">
        <use
          xlinkHref="#original_map_svg__stx"
          className="original_map_svg__snorthern"
        />
        <use xlinkHref="#original_map_svg__stxm" />
      </g>
      <g id="original_map_svg__stogx">
        <use
          xlinkHref="#original_map_svg__stx"
          className="original_map_svg__sog"
        />
        <use xlinkHref="#original_map_svg__stxm" />
      </g>
      <g id="original_map_svg__stpiccadillye">
        <use
          xlinkHref="#original_map_svg__stx"
          className="original_map_svg__spiccadilly"
        />
        <path
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 2,
          }}
          d="M6.5 0h-4"
        />
      </g>
      <g id="original_map_svg__stelizabethx">
        <use
          xlinkHref="#original_map_svg__stx"
          className="original_map_svg__selizabeth"
        />
        <use xlinkHref="#original_map_svg__stxm" />
      </g>
      <g id="original_map_svg__stgreenfordx">
        <use
          xlinkHref="#original_map_svg__stx"
          className="original_map_svg__sgreenford"
        />
        <use xlinkHref="#original_map_svg__stxm" />
      </g>
      <g id="original_map_svg__sttlnr">
        <circle
          r={5.5}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 0.75,
          }}
        />
        <path
          style={{
            fill: "none",
            stroke: "#ef2721",
            strokeWidth: 1,
          }}
          d="M-5-1.25H5m-10 2.5H5m-7.5-5 5 2.5-5 2.5 5 2.5"
        />
      </g>
      <g id="original_map_svg__sttlow">
        <use xlinkHref="#original_map_svg__sttl" />
        <path
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: 1,
          }}
          d="m-3-3 4.5 3L-3 3"
        />
      </g>
      <g id="original_map_svg__intnr" cursor="help">
        <circle
          id="original_map_svg__intnrbase"
          cx={0}
          cy={0}
          r={8.25}
          fill="#fff"
        />
        <circle
          id="original_map_svg__intnrtop"
          cx={0}
          cy={0}
          r={7}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 1,
          }}
        />
        <use xlinkHref="#original_map_svg__nr" />
      </g>
      <g id="original_map_svg__intnrx" cursor="help">
        <circle r={8.25} fill="#fff" />
        <circle
          r={7}
          style={{
            fill: "#fff",
            stroke: "#999",
            strokeWidth: 1,
          }}
        />
        <use xlinkHref="#original_map_svg__nr" />
      </g>
      <g id="original_map_svg__int">
        <circle
          id="original_map_svg__intbase"
          cx={0}
          cy={0}
          r={8.25}
          fill="#fff"
        />
        <circle
          id="original_map_svg__inttop"
          cx={0}
          cy={0}
          r={6}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 3,
          }}
        />
      </g>
      <g id="original_map_svg__intx">
        <circle r={8.25} fill="#fff" />
        <circle
          r={6}
          style={{
            fill: "#fff",
            stroke: "#999",
            strokeWidth: 3,
          }}
        />
      </g>
      <g id="original_map_svg__cap2">
        <rect
          x={-8.25}
          y={-8.25}
          width={31}
          height={16.5}
          rx={8.25}
          fill="#fff"
        />
        <rect
          x={-6}
          y={-6}
          width={26.5}
          height={12}
          rx={6}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 3,
          }}
        />
      </g>
      <g id="original_map_svg__cap2l">
        <rect
          x={-8.25}
          y={-8.25}
          width={34.5}
          height={16.5}
          rx={8.25}
          fill="#fff"
        />
        <rect
          x={-6}
          y={-6}
          width={30}
          height={12}
          rx={6}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 3,
          }}
        />
      </g>
      <g id="original_map_svg__cap2lx">
        <rect
          x={-8.25}
          y={-8.25}
          width={34.5}
          height={16.5}
          rx={8.25}
          fill="#fff"
        />
        <rect
          x={-6}
          y={-6}
          width={30}
          height={12}
          rx={6}
          style={{
            fill: "#fff",
            stroke: "#999",
            strokeWidth: 3,
          }}
        />
      </g>
      <g id="original_map_svg__cap2nr" cursor="help">
        <rect
          x={-8.25}
          y={-8.25}
          width={31}
          height={16.5}
          rx={8.25}
          fill="#fff"
        />
        <rect
          x={-7}
          y={-7}
          width={28.5}
          height={14}
          rx={7}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 1,
          }}
        />
      </g>
      <g id="original_map_svg__cap3nr" cursor="help">
        <rect
          x={-8.25}
          y={-8.25}
          width={38}
          height={16.5}
          rx={8.25}
          fill="#fff"
        />
        <rect
          x={-7}
          y={-7}
          width={35.5}
          height={14}
          rx={7}
          style={{
            fill: "#fff",
            stroke: "#000",
            strokeWidth: 1,
          }}
        />
      </g>
      <g
        id="original_map_svg__airport"
        transform="rotate(-90 0 10) scale(.04)"
        style={{
          stroke: "none",
          fill: "#000",
        }}
      >
        <path d="m490 250-40-25H320L170 10h-30l60 215H80l-50-75H10l20 90v20l-20 90h20l50-75h120l-60 215h30l150-215h130z" />
        <ellipse cx={441} cy={250} rx={50} ry={24} stroke="#000" />
      </g>
      <g id="original_map_svg__AETRAM" cursor="help">
        <path
          style={{
            strokeWidth: 25,
            stroke: "#000",
            fill: "none",
          }}
          d="m-80-20 250 70h160l250-70M170 50l30-30h100l30 30-30-30h-50v130"
          transform="translate(-6.25) scale(.025)"
        />
        <path
          d="M150 140h200l60 50H90m340 0a70 140 0 0 1 0 390H70a70 140 0 0 1 0-390"
          transform="translate(-6.25) scale(.025)"
        />
        <path
          fill="#fff"
          d="M430 220a70 190 0 0 1 70 160H0a70 190 0 0 1 70-160"
          transform="translate(-6.25) scale(.025)"
        />
      </g>
      <g id="original_map_svg__bus" transform="scale(.8)">
        <path d="M0-2a2 2 0 0 1 2-2h25a2 2 0 0 1 2 2v7l-5 2a4 4 0 0 1-7 0h-7a4 4 0 0 1-7 0H1.5a2 2 0 0 1-2-2" />
        <rect fill="#fff" x={1} y={-1} width={2} height={6} rx={0.5} />
        <path
          fill="#fff"
          d="M5-2h4v3H5zM11-2h4v3h-4zM17-2h4v3h-4zM23-2h4v3h-4z"
        />
      </g>
      <path
        className="original_map_svg__me"
        d="M-7.5 0h15"
        id="original_map_svg__term"
      />
      <path
        className="original_map_svg__me"
        style={{
          strokeWidth: 5.5,
        }}
        d="M-7.75 0h5.25M7.75 0H2.5"
        id="original_map_svg__termb"
      />
      <path
        style={{
          fill: "#fff",
          strokeWidth: 0.75,
        }}
        d="M1.75-2H7.5v4h-15v-4h5.75"
        id="original_map_svg__termx"
      />
      <path
        className="original_map_svg__me"
        d="M1 0h6.5"
        id="original_map_svg__st"
      />
      <path
        className="original_map_svg__me"
        style={{
          strokeWidth: 5.5,
        }}
        d="M2.5 0h5.25"
        id="original_map_svg__stb"
      />
      <path
        style={{
          fill: "none",
          strokeWidth: 5,
        }}
        d="M8 0H2"
        id="original_map_svg__stx"
      />
      <path
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 3.5,
        }}
        d="M7.25 0H0"
        id="original_map_svg__stxm"
      />
      <path
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 3,
        }}
        d="M7 0H0"
        id="original_map_svg__stxm2"
      />
      <path
        style={{
          fill: "#ef2721",
          cursor: "help",
        }}
        transform="matrix(.25 0 0 .25 -6.25 -4)"
        d="M11 0h11l15 8h13v5H37l-13 7h26v5H24l16 8H28l-15-8H0v-5h13l13-7H0V8h26z"
        id="original_map_svg__nr"
      />
      <path
        style={{
          fill: "#fff",
          stroke: "none",
        }}
        d="m0 0 3 3V.5l-3-3-3 3V3z"
        id="original_map_svg__STRg"
      />
      <path
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeWidth: 1,
        }}
        d="m0 0 10 10M0 10 10 0M0 0h10v10H0z"
        id="original_map_svg__enabled"
      />
      <circle
        r={4}
        className="original_map_svg__ftl"
        id="original_map_svg__sttl"
      />
      <rect
        x={-8}
        y={-8}
        width={16}
        height={16}
        rx={5}
        className="original_map_svg__fog"
        id="original_map_svg__route_base"
      />
    </defs>
    <g id="original_map_svg__bg">
      <g
        style={{
          visibility: "visible",
        }}
        className="original_map_svg__progress"
      >
        <path
          style={{
            fill: "#fff",
          }}
          d="M-200-200h3000v3000H-200z"
        />
        <g
          style={{
            fill: "#ffffea",
            stroke: "#eca",
            strokeWidth: 1,
          }}
        >
          <use xlinkHref="#original_map_svg__zone1_base" />
          <rect x={-20} y={-35} width={410} height={20} rx={10} />
        </g>
        <text x={-10} y={-21} fill="#753" fontSize={14}>
          {"Fare zone 1. Journey via this zone charges significantly more."}
        </text>
        <g
          fontSize={20}
          fill="#edc"
          className="original_map_svg__b original_map_svg__mid"
        >
          <text x={1065} y={700}>
            {"Zone 1"}
          </text>
          <text x={1320} y={820}>
            {"Zone 1"}
          </text>
          <text x={1510} y={420}>
            {"Zone 1"}
          </text>
        </g>
        <use xlinkHref="#original_map_svg__Reading_zone_base" />
        <set
          begin="zone_switch_base.click"
          end="zone_switch_over.click"
          attributeName="visibility"
          attributeType="CSS"
          to="hidden"
        />
      </g>
      <g
        id="original_map_svg__Thames_stripe"
        className="original_map_svg__progress"
      >
        <path
          style={{
            stroke: "none",
            fill: "#e9f7ff",
          }}
          d="M327.5 1010a140 140 0 0 1-140 140 125 125 0 0 0 125-125v-15.5"
        />
        <path
          style={{
            strokeWidth: 15,
            stroke: "#e9f7ff",
            fill: "none",
          }}
          d="M320 1010v-80q0-40 32-64a60 60 0 0 1 96 48v35a50 50 0 0 0 100 0 50 50 0 0 1 100 0 85 85 0 0 0 85 85h105q30 0 54-18l117.333-88q24-18 54-18h52q30 0 54-18l40-30q28-21 28-56t28-56l126-94.5q24-18 54-18H1722a67 67 0 0 1 67 67 90 90 0 0 0 180 0v-35a60 60 0 0 1 96-48l112 84a60 60 0 0 0 72 0l160-120q28-21 28-56v-90a60 60 0 0 1 60-60"
        />
        <text
          transform="rotate(-36.78 1974.727 -858.316)"
          className="original_map_svg__st original_map_svg__rn original_map_svg__b"
        >
          {"River "}
          <tspan dx={15}>{"Thames"}</tspan>
        </text>
        <text
          x={1520}
          y={643}
          className="original_map_svg__st original_map_svg__rn original_map_svg__b"
        >
          {"River Thames"}
        </text>
        <text
          transform="rotate(-36.78 2180.229 -3071.437)"
          className="original_map_svg__st original_map_svg__rn original_map_svg__b"
        >
          {"River "}
          <tspan dx={7}>{"Thames"}</tspan>
        </text>
      </g>
    </g>
    <g
      id="original_map_svg__routes"
      style={{
        cursor: "pointer",
      }}
    >
      <g className="original_map_svg__me original_map_svg__selizabeth">
        <g className="original_map_svg__xb">
          <path
            id="original_map_svg__Elizabeth_route_x"
            d="m1700 532.5 10 7.5a50 50 0 0 0 30 10h61a50 50 0 0 0 50-50v-52.5a50 50 0 0 1 20-40L2377 28"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__Elizabeth_route_x"
          className="original_map_svg__mex"
          id="original_map_svg__Elizabeth_x_stripe"
        />
        <path
          id="original_map_svg__Elizabeth_route"
          d="M921 593h166.75q15 0 27-9l92.25-69.5 36-27q12-9 27-9h85q20 0 32 16l5 5.5q12 16 32 16h100m0 0h138q15 0 27 9l11 7.5 107.625 80.5q12 9 27 9H1990q15 0 27-9l12-9q12-9 27-9h137q15 0 27 9l133.33 100"
        />
        <use
          xlinkHref="#original_map_svg__Elizabeth_route"
          className="original_map_svg__mes"
          id="original_map_svg__Elizabeth_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__selizabeth">
        <path
          id="original_map_svg__Elizabeth_Heathrow_route"
          d="M0 480v213.9a30 30 0 0 0 30 30h130m0 0h-10a45 45 0 0 0-45 45v177.6a20 20 0 0 1-20 20H30m75-20v55.5m55-278.1h320a60 60 0 0 0 30-10L647.2 611a60 60 0 0 1 30-10h225.04"
        />
        <use
          xlinkHref="#original_map_svg__Elizabeth_Heathrow_route"
          className="original_map_svg__mes"
          id="original_map_svg__Elizabeth_Heathrow_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__swnc">
        <path
          id="original_map_svg__Waterloo_and_City_line_route"
          d="M1469.5 558v5q0 20-16 32l-103.14 77.355q-16 12-16 32v29.625"
        />
        <use
          xlinkHref="#original_map_svg__Waterloo_and_City_line_route"
          className="original_map_svg__swnc2"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sjubilee">
        <path
          id="original_map_svg__Jubilee_line_route"
          d="M651 162v132a15 15 0 0 0 15 15h195q20 0 32 16l300 400q12 16 32 16h85q15 0 27-9l64-48q12-9 27-9h282q15 0 27-9l12-9q12-9 27-9h230a20 20 0 0 0 20-20V405a45 45 0 0 0-9-27l-36-48"
        />
      </g>
      <use
        xlinkHref="#original_map_svg__Hammersmith_and_City_line_route"
        className="original_map_svg__meb original_map_svg__bhnc"
      />
      <use
        xlinkHref="#original_map_svg__Circle_line_route"
        className="original_map_svg__meb original_map_svg__bcircle"
      />
      <g className="original_map_svg__me original_map_svg__scentral">
        <path
          id="original_map_svg__Central_line_route"
          d="M340 718.9h20q15 0 27-9l28-21a40 40 0 0 1 48 0l35 26q12 9 27 9h412q15 0 27-9L1212 529q12-9 27-9h136q20 0 32 16l15 20q12 16 32 16 15 0 27-9l136-102q12-9 27-9h136q15 0 27-9l176-132a30 30 0 0 0 6-42l-54-72q-9-12-9-27v-274M624 723.9h-99q-15 0-27-9l-340-255q-16-12-16-32V277.5M1926 150a30 30 0 0 1 30-30h125a30 30 0 0 0 30-30V40a30 30 0 0 0-30-30h-120a30 30 0 0 0-30 30v6"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__snorthern">
        <path
          id="original_map_svg__Northern_line_route"
          d="M706 124.5 902.67 272q12 9 27 9H1165a37 37 0 0 1 37 37v42q0 13-19.5 26t-19.5 26v49.667q0 10 6 18L1278 625q9 12 9 25t9 25l94.875 126.5a30 30 0 0 1-6.5 42l-42 31.5q-12 9-27 9H1240.5q-15 0-27 9l-33.33 25.25q-12 9-27 9H1134M1350.375 869q-5 3.75-5 10t-5 10M854 4.5 1124 207q16 12 16 32v17a25 25 0 0 0 25 25 25 25 0 0 1 25 25v55a18.5 18.5 0 0 0 18.5 18.5H1389a90 90 0 0 1 90 90V765q0 20-16 32l-462.5 347M980 99q-12-9-27-9h-40"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__svictoria">
        <path
          id="original_map_svg__Victoria_line_route"
          d="M1682 113h-259a30 30 0 0 0-30 30v40q0 15 9 27l9 12q9 12 9 27v85.5a40 40 0 0 1-40 40h-187a40 40 0 0 0-40 40v320.83q0 20 12 36L1305 958"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sbakerloo">
        <path
          id="original_map_svg__Bakerloo_line_route"
          d="M529 239v82a45 45 0 0 0 18 36l329 246.75a45 45 0 0 0 54 0c28-21 12-37.5 40-58.5l1-.75 26-19.5q10.67-9 24-8h70q20 0 32 16l10.5 14 76.5 102q12 16 32 16h14.5q20 0 32 16l53.25 71a40 40 0 0 0 32 16H1475"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__spiccadilly">
        <path
          id="original_map_svg__Piccadilly_line_route"
          d="M20 299h288a40 40 0 0 1 24 8l36 27a40 40 0 0 1 16 32v327.4a40 40 0 0 0 16 32l160 120a45 45 0 0 0 27 9h433.3a130.5 130.5 0 0 0 78.3-26.1q16-12 16-32v-75.5a40 40 0 0 1 16-32L1274 581.25a40 40 0 0 0 16-32V292q0-20 16-32l61-45.75q16-12 16-32V130q0-20-16-32L1155-60M637 854.4h-50a45 45 0 0 1-27-9L470 778a70 70 0 0 0-84 0L160 947.5q-12 9-27 9H30m130-9-60 45a20 20 0 1 1-21.08-33.82"
        />
        <path
          id="original_map_svg__Piccadilly_Heathrow_divider"
          style={{
            stroke: "none",
            fill: "#fff",
          }}
          d="M70 959h20a1 1 0 0 1 0 2H70a1 1 0 0 1 0-2"
        />
      </g>
      <use xlinkHref="#original_map_svg__STRg" x={68} y={976.5} />
      <use
        xlinkHref="#original_map_svg__STRg"
        transform="rotate(-126.87 306.25 455)"
      />
      <g className="original_map_svg__me original_map_svg__sdlr">
        <path
          id="original_map_svg__DLR_routes"
          d="M1481.5 570h115q10 0 22.5 7.5t22.5 7.5H1860a20 20 0 0 1 20 20v325m-278.5-345H2370a20 20 0 0 0 20-20v-50m-510 415V605a20 20 0 0 1 8-16l4-3a20 20 0 0 0 8-16V450m50-178 75 100a55 55 0 0 1 11 33v160a20 20 0 0 0 20 20h2.67a20 20 0 0 1 12 4L2212 695q12 9 27 9h49"
        />
        <use
          xlinkHref="#original_map_svg__DLR_routes"
          className="original_map_svg__sdlr2"
          id="original_map_svg__DLR_routes_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sdistrict">
        <path
          id="original_map_svg__District_Olympia_branch"
          d="M871 869.4h-4a36 36 0 0 1-36-36V819"
        />
        <use
          xlinkHref="#original_map_svg__District_Olympia_branch"
          className="original_map_svg__branch"
          id="original_map_svg__District_Olympia_branch_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sdistrict">
        <path
          id="original_map_svg__District_line_route"
          d="m987 567-54 40.5a145.5 145.5 0 0 0-29.1 203.7 36.375 36.375 0 0 1-29.1 58.2H867a36 36 0 0 0-36 36v55.1a45 45 0 0 0 9 27l99 132M340 728.9h19.67a60 60 0 0 1 36 12L551 857.4a60 60 0 0 0 36 12h433a145.5 145.5 0 0 0 87.3-29.1L1433 596.5a45 45 0 0 1 27-9h103a46 46 0 0 0 27.6-9.2l14.67-11q12-9 27-9H1653a50 50 0 0 0 30-10l137.07-102.8a45 45 0 0 1 27-9H2041a50 50 0 0 0 30-10L2401 179M637 869.4h-50a60 60 0 0 1-36-12l-36-27a45 45 0 0 0-54.75 0l-99.25 75"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sog">
        <g id="original_map_svg__North_and_West_London_Lines_route">
          <path
            id="original_map_svg__West_London_Line_route"
            d="m696.5 466-48 36q-16 12-16 32v100q0 20 16 32L810 787.125q16 12 16 32V925q0 20 16 32l20 15q12 9 27 9h209.333"
          />
          <path
            id="original_map_svg__North_London_Line_route"
            d="m696.5 466 141.33-106q12-9 27-9h47.67q15 0 27-9l24-18q16-12 16-32v-36a30 30 0 0 1 30-30H1117q15 0 27 9l68 51q12 9 27 9h694q15 0 27 9l20 15M696.5 466l-124 93q-16 12-16 32v141q0 20-16 32L358 901.4"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__North_and_West_London_Lines_route"
          className="original_map_svg__mes"
          id="original_map_svg__North_and_West_London_Lines_route_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__shnc">
        <path
          id="original_map_svg__Hammersmith_and_City_line_route"
          d="M981 559a61.25 61.25 0 0 1-36.75 12.25h-15a66.25 66.25 0 0 0-39.75 13.25l-30 22.5a45 45 0 0 1-27 9h-60a50 50 0 0 0-30 10l-90 67.5a45 45 0 0 0-18 36V835M981 559l192-144a148.2 148.2 0 0 1 207.5 29.64L1407 479a40 40 0 0 0 32 16h124a46 46 0 0 1 36.8 18.4l18 24q12 16 32 16h3.2a45 45 0 0 0 27-9l137.07-102.9a50 50 0 0 1 30-10H2041a45 45 0 0 0 27-9l90-67.5"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__scircle">
        <path
          id="original_map_svg__Circle_line_route"
          d="m990 571-54 40.5a140.5 140.5 0 0 0 168.6 224.8L1430 592.5a50 50 0 0 1 30-10h103a41 41 0 0 0 0-82.5m-579 63a66.25 66.25 0 0 1-39.75 13.25h-15a61.25 61.25 0 0 0-36.75 12.25l-30 21.5a50 50 0 0 1-30 10h-60a45 45 0 0 0-27 9l-90 68.5a40 40 0 0 0-16 32V835M984 563l192-144a143.2 143.2 0 0 1 200.48 28.64L1403 482a45 45 0 0 0 36 18h124"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sog">
        <path
          id="original_map_svg__Watford_DC_Line_route"
          d="M534 20v301a40 40 0 0 0 16 32l212 159"
        />
        <use
          xlinkHref="#original_map_svg__Watford_DC_Line_route"
          className="original_map_svg__mes"
          id="original_map_svg__Watford_DC_Line_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__smetropolitan">
        <path
          id="original_map_svg__Metropolitan_line_route"
          d="m100 60 300 225q12 9 27 9h434a55 55 0 0 1 44 22l141 188a15 15 0 0 0 21 3l112-84a138.2 138.2 0 0 1 193.48 27.64L1399 485a50 50 0 0 0 40 20h124a36 36 0 0 1 36 36M140 90q-16-12-16-32V38m115 126.25q-16-12-16-32V80M20 294h420"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sog">
        <path
          id="original_map_svg__Watford_DC_Line_route_over"
          d="m762 512 16 12a45 45 0 0 0 54 0l200.2-150.15q12-9 27-9h113.732"
        />
      </g>
      <use
        xlinkHref="#original_map_svg__Watford_DC_Line_route_over"
        className="original_map_svg__mes"
        id="original_map_svg__Watford_DC_Line_over_stripe"
      />
      <g className="original_map_svg__me original_map_svg__selizabeth">
        <path
          id="original_map_svg__Elizabeth_Shenfield_route"
          d="M1564 475h166.58a50 50 0 0 0 30-10l85.42-64a50 50 0 0 1 30-10 50 50 0 0 0 30-10l471-353"
        />
        <use
          xlinkHref="#original_map_svg__Elizabeth_Shenfield_route"
          className="original_map_svg__mes"
          id="original_map_svg__Elizabeth_Shenfield_stripe"
        />
      </g>
      <g className="original_map_svg__me original_map_svg__sog">
        <g className="original_map_svg__me original_map_svg__xb">
          <path
            id="original_map_svg__Gospel_Oak_to_Barking_Line_extension_route"
            d="m2159.5 357 45 60q12 16 32 16H2390"
          />
        </g>
        <g className="original_map_svg__mex">
          <use
            xlinkHref="#original_map_svg__Gospel_Oak_to_Barking_Line_extension_route"
            id="original_map_svg__Gospel_Oak_to_Barking_Line_extension_route_stripe"
          />
        </g>
        <path
          id="original_map_svg__Gospel_Oak_to_Barking_Line_route"
          d="M1030 216q15 0 27-9l80-60q12-9 27-9h700q40 0 64 32l54 72q12 16 32 16h51q20 0 32 16l62.5 83"
        />
        <use
          xlinkHref="#original_map_svg__Gospel_Oak_to_Barking_Line_route"
          className="original_map_svg__mes"
          id="original_map_svg__Gospel_Oak_to_Barking_Line_route_stripe"
        />
        <path
          id="original_map_svg__Seven_Sisters_Line_routes"
          d="M1564 485h28.67a40 40 0 0 0 24-8l2.33-1.75q16-12 16-32V290q0-20-16-32l-200-150q-16-12-16-32V8.5a40 40 0 0 1 16-32l90-67.5M1403 8.5v-70M1564 485h28.67a40 40 0 0 0 24-8l2.33-1.75q16-12 16-32V290q0-20 16-32l15-11.25q16-12 16-32V23"
        />
        <use
          xlinkHref="#original_map_svg__Seven_Sisters_Line_routes"
          className="original_map_svg__mes"
          id="original_map_svg__Seven_Sisters_Line_routes_stripe"
        />
        <path
          id="original_map_svg__Romford_to_Upminster_Line_route"
          d="M2257 118h30q20 0 32 16l21.75 29q12 16 32 16H2401"
        />
        <use
          xlinkHref="#original_map_svg__Romford_to_Upminster_Line_route"
          className="original_map_svg__mes"
          id="original_map_svg__Romford_to_Upminster_Line_route_stripe"
        />
        <g className="original_map_svg__me original_map_svg__sog">
          <path
            id="original_map_svg__East_London_Line_Battersea_Park_branch"
            d="M1240.5 946H1110"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__East_London_Line_Battersea_Park_branch"
          className="original_map_svg__branch"
          id="original_map_svg__East_London_Line_Battersea_Park_branch_stripe"
        />
        <path
          id="original_map_svg__East_and_South_London_Lines_route"
          d="M1420 305h100.625q20 0 32 16L1691 505.5q9 12 9 27V765q0 20-16 32l-186.67 140q-12 9-27 9H1160q-15 0-27 9l-34.667 26M1700 532.5V765q0 20 16 32l28.67 21.5m-44.67-286V887q0 20-16 32l-280 210m200-150-28 21q-12 9-27 9h-35"
        />
        <use
          xlinkHref="#original_map_svg__East_and_South_London_Lines_route"
          className="original_map_svg__mes"
          id="original_map_svg__East_and_South_London_Lines_route_stripe"
        />
      </g>
      <path
        id="original_map_svg__Central_line_route_over"
        className="original_map_svg__me original_map_svg__scentral"
        d="M142 277.5V394"
      />
      <g className="original_map_svg__me original_map_svg__sdlr">
        <path
          id="original_map_svg__DLR_route_over"
          d="M1900 450v-32a40 40 0 0 1 16-32l73-54.75"
        />
        <use
          xlinkHref="#original_map_svg__DLR_route_over"
          className="original_map_svg__sdlr2"
          id="original_map_svg__DLR_route_stripe_over"
        />
      </g>
    </g>
    <g
      id="original_map_svg__key_to_symbols_box"
      transform="translate(1825 965)"
    >
      <rect x={0.5} y={0.5} width={210} height={230} rx={25} fill="#fff" />
      <path fill="#eee" d="M0 73h210v40H0zm0 84h210v40H0z" />
      <rect
        width={210}
        height={230}
        rx={25}
        style={{
          fill: "#fff",
          fillOpacity: 0,
          stroke: "#009",
          strokeWidth: 2.5,
        }}
      />
      <path
        style={{
          stroke: "none",
          fill: "#009",
        }}
        d="M1.25 25h210a25 25 0 0 0-25-25H25A25 25 0 0 0 0 25"
      />
      <text
        x={105}
        y={17}
        className="original_map_svg__b original_map_svg__mid"
        style={{
          fontSize: 15,
          fill: "#fff",
        }}
      >
        {"Key to symbols"}
      </text>
      <use xlinkHref="#original_map_svg__int" transform="translate(20 47)" />
      <use
        xlinkHref="#original_map_svg__cap2"
        transform="rotate(90 2.75 42.25)"
      />
      <use
        xlinkHref="#original_map_svg__Bank_Monument_hub"
        transform="translate(65 35)"
      />
      <use xlinkHref="#original_map_svg__intnr" transform="translate(25 93)" />
      <use
        xlinkHref="#original_map_svg__cap2nr"
        transform="rotate(90 -16.25 69.25)"
      />
      <use xlinkHref="#original_map_svg__nr" transform="translate(53 92)" />
      <use xlinkHref="#original_map_svg__sttlnr" x={80} y={93} />
      <path className="original_map_svg__osi" d="m43 125 15 20" />
      <use xlinkHref="#original_map_svg__int" x={43} y={125} />
      <use xlinkHref="#original_map_svg__int" x={58} y={145} />
      <g className="original_map_svg__me original_map_svg__snorthern">
        <path id="original_map_svg__legend_branch" d="M17 178h65" />
      </g>
      <use
        xlinkHref="#original_map_svg__legend_branch"
        className="original_map_svg__branch"
      />
      <use xlinkHref="#original_map_svg__airport" x={53} y={213} />
      <g
        style={{
          fontSize: 12,
          fill: "#000",
        }}
      >
        <text x={108} y={45}>
          {"Interchange "}
          <tspan x={108} dy={15}>
            {"stations"}
          </tspan>
        </text>
        <text x={108} y={90}>
          {"Interchanges for "}
          <tspan x={108} dy={15}>
            {"National Rail"}
          </tspan>
        </text>
        <text x={108} y={132}>
          {"Out-of-station "}
          <tspan x={108} dy={15}>
            {"interchanges"}
          </tspan>
        </text>
        <text x={108} y={174}>
          {"Branch line of "}
          <tspan x={108} dy={15}>
            {"limited service"}
          </tspan>
        </text>
        <text x={108} y={217}>
          {"Airport"}
        </text>
      </g>
    </g>
    <g id="original_map_svg__key_to_lines_box" transform="translate(2045 770)">
      <rect x={0.5} y={0.5} width={410} height={425} rx={25} fill="#fff" />
      <path
        fill="#eee"
        d="M0 185h410v160H0zm0 195h410v20a25 25 0 0 1-25 25H25a25 25 0 0 1-25-25z"
      />
      <rect
        width={410}
        height={425}
        rx={25}
        style={{
          fill: "#fff",
          fillOpacity: 0,
          stroke: "#009",
          strokeWidth: 2.5,
        }}
      />
      <path
        style={{
          stroke: "none",
          fill: "#009",
        }}
        d="M1.25 25h410a25 25 0 0 0-25-25H25A25 25 0 0 0 0 25"
      />
      <text
        x={205}
        y={17}
        className="original_map_svg__b original_map_svg__mid"
        style={{
          fontSize: 15,
          fill: "#fff",
        }}
      >
        {"Key to lines"}
      </text>
      <g className="original_map_svg__me">
        <path className="original_map_svg__sbakerloo" d="M10 65h190" />
        <path className="original_map_svg__scentral" d="M10 87h190" />
        <path className="original_map_svg__scircle" d="M10 109h190" />
        <path className="original_map_svg__sdistrict" d="M10 131h190" />
        <path className="original_map_svg__shnc" d="M10 153h190" />
        <path className="original_map_svg__sjubilee" d="M10 175h190" />
        <path className="original_map_svg__smetropolitan" d="M210 65h190" />
        <path className="original_map_svg__snorthern" d="M210 87h190" />
        <path className="original_map_svg__spiccadilly" d="M210 109h190" />
        <path className="original_map_svg__svictoria" d="M210 131h190" />
        <g className="original_map_svg__swnc">
          <path id="original_map_svg__legend_swnc" d="M210 153h190" />
        </g>
        <g className="original_map_svg__sog">
          <path id="original_map_svg__legend_sog" d="M10 205h390" />
        </g>
        <g className="original_map_svg__selizabeth">
          <path id="original_map_svg__legend_selizabeth" d="M10 370h390" />
        </g>
        <g className="original_map_svg__sdlr">
          <path id="original_map_svg__legend_sdlr" d="M10 405h210" />
        </g>
        <g className="original_map_svg__stl">
          <path id="original_map_svg__legend_stl" d="M250 405h150" />
        </g>
      </g>
      <use
        xlinkHref="#original_map_svg__legend_swnc"
        className="original_map_svg__swnc2"
      />
      <use
        xlinkHref="#original_map_svg__legend_sog"
        className="original_map_svg__mes"
      />
      <use
        xlinkHref="#original_map_svg__legend_sdlr"
        className="original_map_svg__sdlr2"
      />
      <use
        xlinkHref="#original_map_svg__legend_selizabeth"
        className="original_map_svg__mes"
      />
      <g className="original_map_svg__st">
        <text className="original_map_svg__st" transform="translate(10 42)">
          <tspan x={15} y={0} className="original_map_svg__b">
            {"London Underground: "}
          </tspan>
          <tspan
            x={0}
            dy={18}
            className="original_map_svg__tleg"
            id="original_map_svg__lbakerloo"
          >
            {"Bakerloo line "}
          </tspan>
          <tspan
            x={0}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lcentral"
          >
            {"Central line "}
          </tspan>
          <tspan
            x={0}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lcircle"
          >
            {"Circle line "}
          </tspan>
          <tspan
            x={0}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__ldistrict"
          >
            {"District line "}
          </tspan>
          <tspan
            x={0}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lhnc"
          >
            {"Hammersmith & City line "}
          </tspan>
          <tspan
            x={0}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__ljubilee"
          >
            {"Jubilee line "}
          </tspan>
          <tspan
            x={200}
            y={18}
            className="original_map_svg__tleg"
            id="original_map_svg__lmetropolitan"
          >
            {"Metropolitan line "}
          </tspan>
          <tspan
            x={200}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lnorthern"
          >
            {"Northern line "}
          </tspan>
          <tspan
            x={200}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lpiccadilly"
          >
            {"Piccadilly line "}
          </tspan>
          <tspan
            x={200}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lvictoria"
          >
            {"Victoria line "}
          </tspan>
          <tspan
            x={200}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lwnc"
          >
            {"Waterloo & City line "}
          </tspan>
        </text>
        <text className="original_map_svg__st" transform="translate(10 200)">
          <tspan x={15} y={0} className="original_map_svg__b">
            {"London Overground: "}
          </tspan>
          <tspan
            x={10}
            dy={22}
            className="original_map_svg__tleg"
            id="original_map_svg__lwatford"
          >
            {"Watford Junction\u2013Euston "}
          </tspan>
          <tspan
            x={10}
            dy={20}
            className="original_map_svg__tleg"
            id="original_map_svg__lnw_london"
          >
            {"Richmond/Clapham Junction\u2013Stratford "}
          </tspan>
          <tspan
            x={10}
            dy={20}
            className="original_map_svg__tleg"
            id="original_map_svg__lgospel"
          >
            {"Gospel Oak\u2013Barking "}
          </tspan>
          <tspan
            x={10}
            dy={20}
            className="original_map_svg__tleg"
            id="original_map_svg__lse_london"
          >
            {
              "Dalston/Highbury & Islington\u2013Clapham Junction/\r\n\t\t\t\t\t\t"
            }
            <tspan x={10} dy={15}>
              {"West Croydon/Crystal Palace/New Cross "}
            </tspan>
          </tspan>
          <tspan
            x={10}
            dy={20}
            className="original_map_svg__tleg"
            id="original_map_svg__l7sisters"
          >
            {"Liverpool Street\u2013Enfield Town/Cheshunt/Chingford "}
          </tspan>
          <tspan
            x={10}
            dy={20}
            className="original_map_svg__tleg"
            id="original_map_svg__lromford"
          >
            {"Romford\u2013Upminster "}
          </tspan>
          <tspan x={0} y={22}>
            {"\u2022"}
          </tspan>
          <tspan x={0} dy={20}>
            {"\u2022"}
          </tspan>
          <tspan x={0} dy={20}>
            {"\u2022"}
          </tspan>
          <tspan x={0} dy={28}>
            {"\u2022"}
          </tspan>
          <tspan x={0} dy={27}>
            {"\u2022"}
          </tspan>
          <tspan x={0} dy={20}>
            {"\u2022"}
          </tspan>
        </text>
        <text
          x={10}
          y={365}
          className="original_map_svg__tleg"
          id="original_map_svg__lelizabeth"
        >
          {"Elizabeth line (Crossrail)"}
        </text>
        <text
          x={10}
          y={400}
          className="original_map_svg__tleg"
          id="original_map_svg__ldlr"
        >
          {"Docklands Light Railway (DLR)"}
        </text>
        <text x={250} y={400} id="original_map_svg__ltr">
          {"Tramlink"}
        </text>
      </g>
    </g>
    <path
      id="original_map_svg__Uxbridge-Rayner_Lane_divider"
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 0.25,
      }}
      d="M17.5 296.5h122m5 0H300M139.375 302v-11m5.25 11v-11"
    />
    <g id="original_map_svg__interactivity" />
    <path
      className="original_map_svg__stl"
      id="original_map_svg__Tramlink_route"
      d="M939 1119.5h49q7.5 0 13.5 4.5l35.33 26.5q6 4.5 13.5 4.5H1740m-390 0q7.5 0 13.5-4.5l22.67-17q6-4.5 13.5-4.5h8.66q7.5 0 13.5 4.5l22.67 17q6 4.5 13.5 4.5m-70.5 0a10 10 0 0 1-6-18m148.5 18q7.5 0 13.5-4.5l172-129m-102 76.5q6-4.5 13.5-4.5h20"
    />
    <g id="original_map_svg__station_nodes" opacity={1}>
      <g id="original_map_svg__Multiple_interchanges_group">
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="matrix(.6 -.8 .8 .6 445 778)"
          id="original_map_svg__Acton_Town"
        />
        <g id="original_map_svg__Fenchurch_Street" cursor="help">
          <g className="original_map_svg__osib">
            <path
              id="original_map_svg__Fenchurch_Street_osi_base"
              d="M1601.5 541.5 1563 585m19.25-21.75L1601.5 585m-19.25-21.75h-59q-15 0-27 9l-4 3"
            />
          </g>
          <use
            xlinkHref="#original_map_svg__Fenchurch_Street_osi_base"
            className="original_map_svg__osi"
            style={{
              stroke: "#ef2721",
            }}
          />
          <g transform="translate(1582.25 563.25)">
            <ellipse fill="#fff" rx={8} ry={6} />
            <use xlinkHref="#original_map_svg__nr" />
          </g>
          <text
            transform="matrix(.9 0 0 1 1575 560)"
            className="original_map_svg__end"
            style={{
              fill: "#ef2721",
              fontSize: 10,
            }}
          >
            {"Fenchurch Street"}
          </text>
        </g>
        <g id="original_map_svg__Aldgate">
          <g className="original_map_svg__osib">
            <path
              id="original_map_svg__Aldgate-Tower_Gateway_osi_base"
              d="M1601.5 541.5V585"
            />
          </g>
          <use
            xlinkHref="#original_map_svg__Aldgate-Tower_Gateway_osi_base"
            className="original_map_svg__osi"
          />
          <use xlinkHref="#original_map_svg__int" x={1601.5} y={541.5} />
        </g>
        <g className="original_map_svg__osib">
          <path
            id="original_map_svg__Tower_Hill-Tower_Gateway_osi_base"
            d="M1563 585h38.5"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__Tower_Hill-Tower_Gateway_osi_base"
          className="original_map_svg__osi"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1601.5}
          y={585}
          id="original_map_svg__Tower_Gateway"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1563}
          y={585}
          id="original_map_svg__Tower_Hill"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1653}
          y={556}
          id="original_map_svg__Aldgate_East"
        />
        <path className="original_map_svg__osi" d="M1074 169.5h33" />
        <use
          xlinkHref="#original_map_svg__int"
          x={1074}
          y={169.5}
          id="original_map_svg__Archway"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1107}
          y={169.5}
          id="original_map_svg__Upper_Holloway"
        />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="matrix(.8 -.6 .6 .8 1038.5 519)"
          id="original_map_svg__Baker_Street"
        />
        <g transform="translate(1474.5 558)" cursor="help">
          <g id="original_map_svg__Bank_Monument_hub">
            <path
              d="m0 0 20.25 27"
              style={{
                stroke: "#fff",
                strokeWidth: 7.5,
              }}
            />
            <rect
              x={-8.25}
              y={-8.25}
              width={31}
              height={16.5}
              rx={8.5}
              fill="#fff"
              transform="rotate(53.13)"
            />
            <circle cx={20.25} cy={27} r={8.25} fill="#fff" />
            <rect
              x={-6}
              y={-6}
              width={26.5}
              height={12}
              rx={6}
              style={{
                stroke: "#000",
                strokeWidth: 3,
              }}
              transform="rotate(53.13)"
            />
            <circle
              cx={20.25}
              cy={27}
              r={6}
              style={{
                stroke: "#000",
                strokeWidth: 3,
              }}
            />
            <path
              d="m0 0 20.25 27"
              style={{
                stroke: "#000",
                strokeWidth: 6,
              }}
            />
            <rect
              x={-4.5}
              y={-4.5}
              width={23.5}
              height={9}
              rx={4.5}
              style={{
                fill: "#fff",
                stroke: "none",
              }}
              transform="rotate(53.13)"
            />
            <circle
              cx={20.25}
              cy={27}
              r={4.5}
              style={{
                fill: "#fff",
                stroke: "none",
              }}
            />
            <path
              d="m0 0 20.25 27"
              style={{
                stroke: "#fff",
                strokeWidth: 1.5,
              }}
            />
          </g>
        </g>
        <use
          xlinkHref="#original_map_svg__Barbican_Farringdon_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Barbican_Farringdon_osi"
            d="M1386 459.625V493h29"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__intnrbase"
          x={1386}
          y={459.625}
          id="original_map_svg__Farringdon_circle_base"
        />
        <use
          xlinkHref="#original_map_svg__intbase"
          x={1386}
          y={493}
          id="original_map_svg__Farringdon_elizabeth_base"
        />
        <path className="original_map_svg__isi" d="M1386 493v-33.375" />
        <use
          xlinkHref="#original_map_svg__intnrtop"
          x={1386}
          y={459.625}
          id="original_map_svg__Farringdon_circle_top"
        />
        <use
          xlinkHref="#original_map_svg__inttop"
          x={1386}
          y={493}
          id="original_map_svg__Farringdon_elizabeth_top"
        />
        <path className="original_map_svg__isit" d="M1386 493v-33.375" />
        <use xlinkHref="#original_map_svg__nr" x={1386} y={459.625} />
        <use
          xlinkHref="#original_map_svg__int"
          x={1415}
          y={493}
          id="original_map_svg__Barbican"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2159.5}
          y={357}
          id="original_map_svg__Barking"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1372}
          y={639}
          id="original_map_svg__Blackfriars"
        />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="rotate(90 742 860)"
          id="original_map_svg__Blackhorse_Road"
        />
        <use
          xlinkHref="#original_map_svg__cap2lx"
          transform="rotate(-90 857.25 -248.5)"
          id="original_map_svg__Bond_Street_cr"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1105.75}
          y={608.75}
          id="original_map_svg__Bond_Street"
        />
        <use
          xlinkHref="#original_map_svg__Bow_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path id="original_map_svg__Bow_osi" d="m1900 418-22 16" />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={1900}
          y={418}
          id="original_map_svg__Bow_Church"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1878}
          y={434}
          id="original_map_svg__Bow_Road"
        />
        <use
          xlinkHref="#original_map_svg__Brondesbury_Kilburn_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Brondesbury_Kilburn_osi"
            d="M861 331.5a5 5 0 0 1-2 4l-40.5 30.375a5 5 0 0 0-2 4"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          transform="rotate(-126.87 502.25 -16.125)"
          id="original_map_svg__Brondesbury"
        />
        <use
          xlinkHref="#original_map_svg__int"
          transform="rotate(90 276 585)"
          id="original_map_svg__Kilburn"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1700}
          y={675}
          id="original_map_svg__Canada_Water"
        />
        <g cursor="help">
          <path
            className="original_map_svg__osi"
            d="M1893.5 585v63l-13.5 13m0-52.5 13.5 13.5-13.5 13 13.5 13"
          />
          <use
            xlinkHref="#original_map_svg__int"
            x={1893.5}
            y={622}
            id="original_map_svg__Canary_Wharf_elizabeth"
          />
          <use
            xlinkHref="#original_map_svg__int"
            x={1880}
            y={635}
            id="original_map_svg__Canary_Wharf_dlr"
          />
          <use
            xlinkHref="#original_map_svg__int"
            x={1893.5}
            y={648}
            id="original_map_svg__Canary_Wharf_jubilee"
          />
          <use
            xlinkHref="#original_map_svg__int"
            x={1880}
            y={661}
            id="original_map_svg__Heron_Quays"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={1893.5}
          y={585}
          id="original_map_svg__Poplar"
        />
        <path className="original_map_svg__osi" d="m1165 281 20.33-15" />
        <use
          xlinkHref="#original_map_svg__int"
          x={1185.33}
          y={266}
          id="original_map_svg__Camden_Road"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1165}
          y={281}
          id="original_map_svg__Camden_Town"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1432}
          y={594}
          id="original_map_svg__Cannon_Street"
        />
        <use
          xlinkHref="#original_map_svg__cap2l"
          transform="matrix(.6 -.8 .8 .6 2026 584)"
          id="original_map_svg__Canning_Town"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1287.32}
          y={671.26}
          id="original_map_svg__Charing_Cross"
        />
        <path className="original_map_svg__osi" d="M1240.5 946v18" />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1240.5}
          y={946}
          id="original_map_svg__Clapham_High_Street"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1240.5}
          y={964}
          id="original_map_svg__Clapham_North"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={2180}
          y={590}
          id="original_map_svg__Custom_House_for_ExCeL"
        />
        <path className="original_map_svg__osi" d="m1583 295-18.375 42" />
        <use
          xlinkHref="#original_map_svg__int"
          x={1583}
          y={295}
          id="original_map_svg__Dalston_Kingsland"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1564.625}
          y={337}
          id="original_map_svg__Dalston_Junction"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={340}
          y={723.9}
          id="original_map_svg__Ealing_Broadway"
        />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="rotate(-53.13 950.502 -31)"
          id="original_map_svg__Ealing_Common"
        />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="rotate(-90 870.2 -.8)"
          id="original_map_svg__Earls_Court"
        />
        <g cursor="help">
          <use
            xlinkHref="#original_map_svg__stbakerloo"
            transform="rotate(-126.67 621.907 29.067)"
            id="original_map_svg__Edgware_Road_bakerloo"
          />
          <use
            xlinkHref="#original_map_svg__cap2"
            transform="matrix(.6 .8 -.8 .6 981 559)"
            id="original_map_svg__Edgware_Road_circle"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1479}
          y={768}
          id="original_map_svg__Elephant_And_Castle"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1302.32}
          y={691.26}
          id="original_map_svg__Embankment"
        />
        <use
          xlinkHref="#original_map_svg__Euston_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Euston_osi"
            d="m1212 376.85-10.08 26.65-28.988-38.65H1212"
          />
        </g>
        <g cursor="help">
          <use
            xlinkHref="#original_map_svg__cap2"
            transform="rotate(-126.87 700.212 -114.574)"
            id="original_map_svg__Euston_Northern_Victoria"
          />
          <use
            xlinkHref="#original_map_svg__intnr"
            x={1172.932}
            y={364.85}
            id="original_map_svg__Euston_Overground_NR"
          />
        </g>
        <g className="original_map_svg__osib">
          <path
            id="original_map_svg__Euston_Square-Warren_Street_osi"
            d="M1159.5 403.5h42.42"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__Euston_Square-Warren_Street_osi"
          className="original_map_svg__osi"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1201.92}
          y={403.5}
          id="original_map_svg__Euston_Square_circle"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1159.5}
          y={403.5}
          id="original_map_svg__Warren_Street"
        />
        <path className="original_map_svg__osi" d="M946 372v-35" />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="matrix(.8 -.6 .6 .8 935 381)"
          id="original_map_svg__Finchley_Road"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={946}
          y={337}
          id="original_map_svg__Finchley_Road_and_Frognal"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1387.5}
          y={183}
          id="original_map_svg__Finsbury_Park"
        />
        <path className="original_map_svg__osi" d="M2041 258v22" />
        <use
          xlinkHref="#original_map_svg__int"
          transform="rotate(53.13 740.5 2181.005)"
          id="original_map_svg__Forest_Gate"
        />
        <use
          xlinkHref="#original_map_svg__int"
          transform="rotate(-90 1149.5 -891.5)"
          id="original_map_svg__Wanstead_Park"
        />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="rotate(-90 944.85 -75.45)"
          id="original_map_svg__Gloucester_Road"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1153}
          y={672}
          id="original_map_svg__Green_Park"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={449}
          y={836.4}
          id="original_map_svg__Gunnersbury"
        />
        <g cursor="help">
          <path
            style={{
              stroke: "#fff",
              strokeWidth: 7.5,
            }}
            d="m1639.5 281.375 16.17 12.125"
          />
          <use
            xlinkHref="#original_map_svg__intnr"
            x={1635}
            y={278}
            id="original_map_svg__Hackney_Downs"
          />
          <use
            xlinkHref="#original_map_svg__int"
            x={1657.67}
            y={295}
            id="original_map_svg__Hackney_Central"
          />
          <path
            style={{
              stroke: "#000",
              strokeWidth: 6,
            }}
            d="m1640.5 282.125 13.17 9.875"
          />
          <path
            style={{
              stroke: "#fff",
              strokeWidth: 1.5,
            }}
            d="m1639.5 281.375 16.17 12.125"
          />
        </g>
        <path className="original_map_svg__osi" d="M637 835v34.4" />
        <use
          xlinkHref="#original_map_svg__int"
          x={637}
          y={835}
          id="original_map_svg__Hammersmith_circle"
        />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="rotate(-90 753.2 116.2)"
          id="original_map_svg__Hammersmith_district"
        />
        <use
          xlinkHref="#original_map_svg__Hanger_Lane_Park_Royal_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Hanger_Lane_Park_Royal_osi"
            d="m372 620.4 12 22.6"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={372}
          y={620.4}
          id="original_map_svg__Hanger_Lane"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={384}
          y={643}
          id="original_map_svg__Park_Royal"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={531.5}
          y={239}
          id="original_map_svg__Harrow_and_Wealdstone"
        />
        <g cursor="help">
          <use
            xlinkHref="#original_map_svg__stpiccadilly"
            transform="rotate(53.33 -924.721 602.768)"
            id="original_map_svg__Heathrow_4_piccadilly"
          />
          <use
            xlinkHref="#original_map_svg__termelizabeth"
            x={105}
            y={1002}
            id="original_map_svg__Heathrow_4_elizabeth"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__airport"
          x={86}
          y={981}
          cursor="help"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1420}
          y={300}
          id="original_map_svg__Highbury_and_Islington"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1290}
          y={520}
          id="original_map_svg__Holborn"
        />
        <use
          xlinkHref="#original_map_svg__West_Ruislip_Ickenham_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__West_Ruislip_Ickenham_osi"
            d="m142 277.5-25.33 19"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__intnr"
          x={142}
          y={277.5}
          id="original_map_svg__West_Ruislip"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={116.67}
          y={296.5}
          id="original_map_svg__Ickenham"
        />
        <path className="original_map_svg__osi" d="m1128 210-21.33 16" />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1128}
          y={210}
          id="original_map_svg__Kentish_Town"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1106.67}
          y={226}
          id="original_map_svg__Kentish_Town_West"
        />
        <use
          xlinkHref="#original_map_svg__Kenton_Northwick_Park_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Kenton_Northwick_Park_osi"
            d="m531.5 274-15 20"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={531.5}
          y={274}
          id="original_map_svg__Kenton"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={516.5}
          y={294}
          id="original_map_svg__Northwick_Park"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={828.5}
          y={819}
          id="original_map_svg__Kensington_Olympia"
        />
        <use
          xlinkHref="#original_map_svg__cap3nr"
          transform="rotate(-90 843.5 -446.5)"
          id="original_map_svg__Kings_Cross_St_Pancras"
        />
        <use xlinkHref="#original_map_svg__nr" x={1290} y={385.5} />
        <use
          xlinkHref="#original_map_svg__int"
          x={1255.5}
          y={595}
          id="original_map_svg__Leicester_Square"
        />
        <use
          xlinkHref="#original_map_svg__Leytonstone_High_Road_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Leytonstone_High_Road_osi"
            d="m1926 148 14 38"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={1926}
          y={148}
          id="original_map_svg__Leytonstone"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1940}
          y={186}
          id="original_map_svg__Leytonstone_High_Road"
        />
        <use
          xlinkHref="#original_map_svg__Liverpool_Street_Moorgate_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__Liverpool_Street_Moorgate_osi"
            d="M1564 480v20"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__intnr"
          transform="translate(1564 480)"
          id="original_map_svg__Liverpool_Street_nr"
        />
        <g
          style={{
            stroke: "#fff",
            strokeWidth: 7.5,
            fill: "none",
          }}
        >
          <path
            id="original_map_svg__Moorgate-Liverpool_Street_isi"
            d="m1564 500-42.5 16-42.5-16"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__intbase"
          x={1564}
          y={500}
          id="original_map_svg__Liverpool_Street_circle_base"
        />
        <use
          xlinkHref="#original_map_svg__intbase"
          x={1521.5}
          y={516}
          id="original_map_svg__Liverpool_Street_elizabeth_base"
        />
        <use
          xlinkHref="#original_map_svg__intnrbase"
          x={1479}
          y={500}
          id="original_map_svg__Moorgate_base"
        />
        <use
          xlinkHref="#original_map_svg__Moorgate-Liverpool_Street_isi"
          className="original_map_svg__isi"
        />
        <use
          xlinkHref="#original_map_svg__inttop"
          x={1564}
          y={500}
          id="original_map_svg__Liverpool_Street_circle_top"
        />
        <use
          xlinkHref="#original_map_svg__inttop"
          x={1521.5}
          y={516}
          id="original_map_svg__Liverpool_Street_elizabeth_top"
        />
        <use
          xlinkHref="#original_map_svg__intnrtop"
          x={1479}
          y={500}
          id="original_map_svg__Moorgate_mid"
        />
        <use
          xlinkHref="#original_map_svg__Moorgate-Liverpool_Street_isi"
          className="original_map_svg__isit"
        />
        <use
          xlinkHref="#original_map_svg__nr"
          x={1479}
          y={500}
          id="original_map_svg__Moorgate_top"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1479}
          y={675}
          id="original_map_svg__London_Bridge"
        />
        <path className="original_map_svg__osi" d="M2090 243.25v23.25" />
        <use
          xlinkHref="#original_map_svg__int"
          x={2090}
          y={243.25}
          id="original_map_svg__Manor_Park"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={2090}
          y={266.5}
          id="original_map_svg__Woodgrange_Park"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1812.5}
          y={445}
          id="original_map_svg__Mile_End"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={877.3}
          y={723.9}
          id="original_map_svg__Notting_Hill_Gate"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1153}
          y={573}
          id="original_map_svg__Oxford_Circus"
        />
        <g cursor="help">
          <g className="original_map_svg__osib">
            <g id="original_map_svg__Paddington_osi_base">
              <path d="M921 574v19l-17.234 8M921 593l11.7 14.7" />
              <circle cx={921} cy={593} r={19} />
            </g>
          </g>
          <use
            xlinkHref="#original_map_svg__Paddington_osi_base"
            className="original_map_svg__osi"
            id="original_map_svg__Paddington_osi"
          />
          <use
            xlinkHref="#original_map_svg__intnr"
            transform="translate(903.78 601.03)"
            id="original_map_svg__Paddington_nr"
          />
          <use
            xlinkHref="#original_map_svg__int"
            transform="rotate(-90 747.5 -173.5)"
            id="original_map_svg__Paddington_surface"
          />
          <use
            xlinkHref="#original_map_svg__intbase"
            transform="translate(921 593)"
            id="original_map_svg__Paddington_elizabeth_base"
          />
          <use
            xlinkHref="#original_map_svg__intbase"
            transform="rotate(-127 617.862 71.327)"
            id="original_map_svg__Paddington_deep_base"
          />
          <path
            d="m921 593 11.736 14.7"
            style={{
              stroke: "#000",
              strokeWidth: 6,
            }}
          />
          <use
            xlinkHref="#original_map_svg__inttop"
            transform="translate(921 593)"
            id="original_map_svg__Paddington_elizabeth_top"
          />
          <use
            xlinkHref="#original_map_svg__inttop"
            transform="rotate(-127 617.862 71.327)"
            id="original_map_svg__Paddington_deep_top"
          />
          <path
            d="m921 593 11.736 14.7"
            style={{
              stroke: "#fff",
              strokeWidth: 1.5,
            }}
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={1200.5}
          y={636.25}
          id="original_map_svg__Piccadilly_Circus"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={760.5}
          y={514}
          id="original_map_svg__Queens_Park"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={300}
          y={296.5}
          id="original_map_svg__Rayners_Lane"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={360.5}
          y={903.4}
          id="original_map_svg__Richmond"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2257}
          y={118}
          id="original_map_svg__Romford"
        />
        <path className="original_map_svg__osi" d="M1426.67 113v25" />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1426.67}
          y={113}
          id="original_map_svg__Seven_Sisters"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1426.67}
          y={138}
          id="original_map_svg__South_Tottenham"
        />
        <g cursor="help">
          <use
            xlinkHref="#original_map_svg__int"
            x={1700}
            y={585}
            id="original_map_svg__Shadwell"
          />
        </g>
        <path className="original_map_svg__osi" d="m696 723.9 10-15" />
        <use
          xlinkHref="#original_map_svg__int"
          x={696}
          y={723.9}
          id="original_map_svg__Shepherds_Bush_tube"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={706}
          y={708.9}
          id="original_map_svg__Shepherds_Bush_nr"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1284.5}
          y={931}
          id="original_map_svg__Stockwell"
        />
        <use
          xlinkHref="#original_map_svg__cap2nr"
          transform="rotate(53.13 670.937 2137.504)"
          id="original_map_svg__Stratford"
        />
        <use xlinkHref="#original_map_svg__nr" x={1982.375} y={323.5} />
        <use
          xlinkHref="#original_map_svg__cap2"
          transform="rotate(-115 813.586 82.051)"
          id="original_map_svg__South_Kensington"
        />
        <use
          xlinkHref="#original_map_svg__cap2l"
          transform="rotate(-90 869.875 -338.125)"
          id="original_map_svg__Tottenham_Court_Road"
        />
        <path
          className="original_map_svg__osi"
          style={{
            strokeDasharray: 2,
            strokeDashoffset: 2.8,
          }}
          d="M1176 786v24"
        />
        <use
          xlinkHref="#original_map_svg__bus"
          x={1164}
          y={810}
          id="original_map_svg__Victoria_Coach_Station"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1176}
          y={786}
          id="original_map_svg__Victoria"
        />
        <path className="original_map_svg__osi" d="m1682 113 18.75 25" />
        <use
          xlinkHref="#original_map_svg__int"
          x={1682}
          y={113}
          id="original_map_svg__Walthamstow_Central"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1700.75}
          y={138}
          id="original_map_svg__Walthamstow_Queens_Road"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1334.36}
          y={733.98}
          id="original_map_svg__Waterloo"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={606.5}
          y={398.5}
          id="original_map_svg__Wembley_Central"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={651}
          y={294}
          id="original_map_svg__Wembley_Park"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={828.5}
          y={920}
          id="original_map_svg__West_Brompton"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2031}
          y={434}
          id="original_map_svg__West_Ham"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={912.5}
          y={351}
          id="original_map_svg__West_Hampstead"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1236}
          y={741}
          id="original_map_svg__Westminster"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={696.5}
          y={466}
          id="original_map_svg__Willesden_Junction"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1700}
          y={532.5}
          id="original_map_svg__Whitechapel"
        />
        <use
          xlinkHref="#original_map_svg__White_City_Wood_Lane_osi"
          className="original_map_svg__osib"
        />
        <g className="original_map_svg__osi">
          <path
            id="original_map_svg__White_City_Wood_Lane_osi"
            d="m624 723.9 13 19"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__int"
          x={624}
          y={723.9}
          id="original_map_svg__White_City"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={637}
          y={742.9}
          id="original_map_svg__Wood_Lane"
        />
        <path className="original_map_svg__osi" d="M2320.67 679.5 2288 704" />
        <use
          xlinkHref="#original_map_svg__int"
          x={2320.67}
          y={679.5}
          id="original_map_svg__Woolwich"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2288}
          y={704}
          id="original_map_svg__Woolwich_Arsenal"
        />
      </g>
      <g id="original_map_svg__Bakerloo_line_stations">
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 259.875 466.5)"
          id="original_map_svg__Kilburn_Park"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 268 482.75)"
          id="original_map_svg__Maida_Vale"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 276.125 499)"
          id="original_map_svg__Warwick_Avenue"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1001}
          y={522}
          id="original_map_svg__Marylebone"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(-90 804 -287)"
          id="original_map_svg__Regents_Park"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(90 326 1094)"
          id="original_map_svg__Lambeth_North"
        />
      </g>
      <g id="original_map_svg__Central_line_stations">
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 71 172)"
          id="original_map_svg__Ruislip_Gardens"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={142}
          y={394}
          id="original_map_svg__South_Ruislip"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(126.87 -35.975 269.45)"
          id="original_map_svg__Northolt"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={224}
          y={509.4}
          id="original_map_svg__Greenford"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(126.87 9.65 360.7)"
          id="original_map_svg__Perivale"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(53.13 -491.402 754.45)"
          id="original_map_svg__West_Acton"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="matrix(.6 -.8 .8 .6 483 703.9)"
          id="original_map_svg__North_Acton"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-90 651.95 71.95)"
          id="original_map_svg__East_Acton"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(90 41.05 764.95)"
          id="original_map_svg__Holland_Park"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(90 103.05 826.95)"
          id="original_map_svg__Queensway"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={996}
          y={691}
          id="original_map_svg__Lancaster_Gate"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-126.87 687 64)"
          id="original_map_svg__Marble_Arch"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(90 405 925)"
          id="original_map_svg__Chancery_Lane"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(143.13 615 505)"
          id="original_map_svg__St_Pauls"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-90 1056 -604)"
          id="original_map_svg__Bethnal_Green_central"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(143.13 937.833 431.501)"
          id="original_map_svg__Leyton"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 963 53)"
          id="original_map_svg__Snaresbrook"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 963 38)"
          id="original_map_svg__South_Woodford"
        />
        <g cursor="help">
          <use
            xlinkHref="#original_map_svg__int"
            transform="rotate(180 964.25 23)"
            id="original_map_svg__Woodford"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 963 8)"
          id="original_map_svg__Buckhurst_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 963 -7)"
          id="original_map_svg__Loughton"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 963 -22)"
          id="original_map_svg__Debden"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(180 963 -37)"
          id="original_map_svg__Theydon_Bois"
        />
        <use
          xlinkHref="#original_map_svg__termcentral"
          transform="rotate(180 963 -52)"
          id="original_map_svg__Epping"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(90 918 1038)"
          id="original_map_svg__Wanstead"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-90 1058 -938)"
          id="original_map_svg__Redbridge"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(90 958 1078)"
          id="original_map_svg__Gants_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-90 1098 -978)"
          id="original_map_svg__Newbury_Park"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          x={2111}
          y={90}
          id="original_map_svg__Barkingside"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          x={2111}
          y={66}
          id="original_map_svg__Fairlop"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          x={2111}
          y={42}
          id="original_map_svg__Hainault"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-90 1043 -1033)"
          id="original_map_svg__Grange_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="matrix(0 -1 1 0 2018.5 10)"
          id="original_map_svg__Chigwell"
        />
        <use
          xlinkHref="#original_map_svg__stcentral"
          transform="rotate(-90 985.5 -975.5)"
          id="original_map_svg__Roding_Valley"
        />
      </g>
      <g id="original_map_svg__Circle_line_stations">
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(-157 511.04 243.358)"
          id="original_map_svg__Bayswater_district"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-157 513.54 243.866)"
          id="original_map_svg__Bayswater_circle"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-36.87 1666.247 -957.746)"
          id="original_map_svg__High_Street_Kensington_circle"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(-36.87 1668.747 -950.246)"
          id="original_map_svg__High_Street_Kensington_district"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="matrix(.6 .8 -.8 .6 1136 819)"
          id="original_map_svg__Sloane_Square_district"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="matrix(.6 .8 -.8 .6 1133 815)"
          id="original_map_svg__Sloane_Square_circle"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 -158.502 1591.753)"
          id="original_map_svg__St_Jamess_Park_district"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(53.13 -156.002 1586.753)"
          id="original_map_svg__St_Jamess_Park_circle"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-126.87 833.75 -2.5)"
          id="original_map_svg__Temple_circle"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(-126.87 836.25 -1.25)"
          id="original_map_svg__Temple_district"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-126.87 853.75 -42.5)"
          id="original_map_svg__Mansion_House_circle"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(-126.87 856.25 -41.25)"
          id="original_map_svg__Mansion_House_district"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(-126.87 670.875 -47)"
          id="original_map_svg__Great_Portland_Street_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-126.87 673.375 -45.75)"
          id="original_map_svg__Great_Portland_Street_circle"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-126.87 675.875 -44.5)"
          id="original_map_svg__Great_Portland_Street_metropolitan"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(90 90 710)"
          id="original_map_svg__Royal_Oak_circle"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(90 92.5 707.5)"
          id="original_map_svg__Royal_Oak_hnc"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(-126.87 521.5 139.875)"
          id="original_map_svg__Westbourne_Park_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-126.87 524 141.125)"
          id="original_map_svg__Westbourne_Park_circle"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="matrix(.6 .8 -.8 .6 689.5 672)"
          id="original_map_svg__Ladbroke_Grove_circle"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="matrix(.6 .8 -.8 .6 686.5 668)"
          id="original_map_svg__Ladbroke_Grove_hnc"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(-126.87 499.625 183.625)"
          id="original_map_svg__Latimer_Road_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          transform="rotate(-126.87 502.125 184.875)"
          id="original_map_svg__Latimer_Road_circle"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          x={639.5}
          y={772.9}
          id="original_map_svg__Shepherds_Bush_Market_circle"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          x={634.5}
          y={772.9}
          id="original_map_svg__Shepherds_Bush_Market_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stcircle"
          x={639.5}
          y={802.9}
          id="original_map_svg__Goldhawk_Road_circle"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          x={634.5}
          y={802.9}
          id="original_map_svg__Goldhawk_Road_hnc"
        />
      </g>
      <g id="original_map_svg__District_line_stations">
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(126.87 37.375 519)"
          id="original_map_svg__Chiswick_Park"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="matrix(.6 -.8 .8 .6 521 835)"
          id="original_map_svg__Turnham_Green_district"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(126.87 59.25 562.75)"
          id="original_map_svg__Stamford_Brook"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(90 -141.2 728.2)"
          id="original_map_svg__Ravenscourt_Park"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(90 -82.2 787.2)"
          id="original_map_svg__Barons_Court_district"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(90 -44.7 824.7)"
          id="original_map_svg__West_Kensington"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 383.749 2002.504)"
          id="original_map_svg__Stepney_Green_district"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(53.13 386.249 1997.504)"
          id="original_map_svg__Stepney_Green_hnc"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(90 765.75 1197.25)"
          id="original_map_svg__Bromley-by-Bow_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(90 763.25 1199.75)"
          id="original_map_svg__Bromley-by-Bow_district"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 608.999 2284.255)"
          id="original_map_svg__Plaistow_district"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(53.13 611.5 2279.255)"
          id="original_map_svg__Plaistow_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 646.5 2303.005)"
          id="original_map_svg__Upton_Park_district"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(53.13 649 2298.005)"
          id="original_map_svg__Upton_Park_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 684 2321.755)"
          id="original_map_svg__East_Ham_district"
        />
        <use
          xlinkHref="#original_map_svg__sthnc"
          transform="rotate(53.13 686.5 2316.755)"
          id="original_map_svg__East_Ham_hnc"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 759 2359.255)"
          id="original_map_svg__Upney"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 796.5 2378.005)"
          id="original_map_svg__Becontree"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 834 2396.755)"
          id="original_map_svg__Dagenham_Heathway"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 871.5 2415.505)"
          id="original_map_svg__Dagenham_East"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 909 2434.255)"
          id="original_map_svg__Elm_Park"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(-126.87 1226.5 -473.249)"
          id="original_map_svg__Hornchurch"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(-126.87 1235.875 -491.999)"
          id="original_map_svg__Upminster_Bridge"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2401}
          y={179}
          id="original_map_svg__Upminster"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(180 415.5 480)"
          id="original_map_svg__Fulham_Broadway"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(143.33 256.373 632.936)"
          id="original_map_svg__Parsons_Green"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(143.33 262.234 650.416)"
          id="original_map_svg__Putney_Bridge"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={882}
          y={1043.5}
          id="original_map_svg__East_Putney"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(143.33 273.117 682.878)"
          id="original_map_svg__Southfields"
        />
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(143.33 278.14 697.86)"
          id="original_map_svg__Wimbledon_Park"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={939}
          y={1119.5}
          id="original_map_svg__Wimbledon"
        />
      </g>
      <g id="original_map_svg__Jubilee_line_stations">
        <use
          xlinkHref="#original_map_svg__termjubilee"
          x={651}
          y={162}
          id="original_map_svg__Stanmore"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          x={651}
          y={192}
          id="original_map_svg__Canons_Park"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          x={651}
          y={222}
          id="original_map_svg__Queensbury"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          x={651}
          y={252}
          id="original_map_svg__Kingsbury"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(90 186 495)"
          id="original_map_svg__Neasden"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(90 216 525)"
          id="original_map_svg__Dollis_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(90 246 555)"
          id="original_map_svg__Willesden_Green"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(143.13 410.25 365.084)"
          id="original_map_svg__Swiss_Cottage"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(143.13 420.666 396.334)"
          id="original_map_svg__St_Johns_Wood"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1380.2}
          y={699.6}
          id="original_map_svg__Southwark"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(90 457.5 1132.5)"
          id="original_map_svg__Bermondsey"
        />
        <use
          xlinkHref="#original_map_svg__stjubilee"
          transform="rotate(90 676 1324)"
          id="original_map_svg__North_Greenwich"
        />
        <use xlinkHref="#original_map_svg__AETRAM" x={2000} y={688} />
      </g>
      <g id="original_map_svg__Metropolitan_line_stations">
        <use
          xlinkHref="#original_map_svg__intnr"
          x={100}
          y={60}
          id="original_map_svg__Amersham"
        />
        <use
          xlinkHref="#original_map_svg__termmetropolitan"
          x={124}
          y={38}
          id="original_map_svg__Chesham"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={140}
          y={90}
          id="original_map_svg__Chalfont_and_Latimer"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(126.87 56.875 98.75)"
          id="original_map_svg__Chorleywood"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(126.87 66.25 117.5)"
          id="original_map_svg__Rickmansworth"
        />
        <use
          xlinkHref="#original_map_svg__termmetropolitan"
          x={223}
          y={80}
          id="original_map_svg__Watford"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          x={223}
          y={130}
          id="original_map_svg__Croxley"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-53.13 285 -157.5)"
          id="original_map_svg__Moor_Park"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-53.13 322.5 -176.25)"
          id="original_map_svg__Northwood"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-53.13 360 -195)"
          id="original_map_svg__Northwood_Hills"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-53.13 397.5 -213.75)"
          id="original_map_svg__Pinner"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-53.13 435 -232.5)"
          id="original_map_svg__North_Harrow"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(90 43 337)"
          id="original_map_svg__West_Harrow"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={440}
          y={294}
          id="original_map_svg__Harrow_on_the_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(90 148 442)"
          id="original_map_svg__Preston_Road"
        />
      </g>
      <g id="original_map_svg__Northern_line_stations">
        <use
          xlinkHref="#original_map_svg__termnorthern"
          transform="rotate(-53.13 477.5 -643.752)"
          id="original_map_svg__Edgware"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 517.5 -663.752)"
          id="original_map_svg__Burnt_Oak"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 555 -682.502)"
          id="original_map_svg__Colindale"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 592.5 -701.252)"
          id="original_map_svg__Hendon_Central"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 630 -720.002)"
          id="original_map_svg__Brent_Cross"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 667.5 -738.752)"
          id="original_map_svg__Golders_Green"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 705 -757.502)"
          id="original_map_svg__Hampstead"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(90 364.5 645.5)"
          id="original_map_svg__Belsize_Park"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(90 404.5 685.5)"
          id="original_map_svg__Chalk_Farm"
        />
        <use
          xlinkHref="#original_map_svg__termnorthern"
          transform="rotate(90 411.5 501.5)"
          id="original_map_svg__Mill_Hill_East"
        />
        <use
          xlinkHref="#original_map_svg__termnorthern"
          transform="matrix(.6 -.8 .8 .6 854 4.5)"
          id="original_map_svg__High_Barnet"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 469 -870.502)"
          id="original_map_svg__Totteridge_And_Whetstone"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 506.5 -889.252)"
          id="original_map_svg__Woodside_Park"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 544 -908.002)"
          id="original_map_svg__West_Finchley"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 594 -933.002)"
          id="original_map_svg__Finchley_Central"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 631.5 -951.752)"
          id="original_map_svg__East_Finchley"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 669 -970.502)"
          id="original_map_svg__Highgate"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-53.13 749 -1010.502)"
          id="original_map_svg__Tufnell_Park"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          x={1202}
          y={332}
          id="original_map_svg__Mornington_Crescent"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          x={1163}
          y={450}
          id="original_map_svg__Goodge_Street"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(110 575.126 689.535)"
          id="original_map_svg__Angel"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          transform="translate(1466.942 424.5)"
          id="original_map_svg__Old_Street"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          x={1479}
          y={730}
          id="original_map_svg__Borough"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1362.5}
          y={866}
          id="original_map_svg__Kennington"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -233.752 1777.503)"
          id="original_map_svg__Oval"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -381.252 1703.753)"
          id="original_map_svg__Clapham_Common"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -418.752 1685.003)"
          id="original_map_svg__Clapham_South"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1150.5}
          y={1031.5}
          id="original_map_svg__Balham"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -493.752 1647.503)"
          id="original_map_svg__Tooting_Bec"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -531.252 1628.752)"
          id="original_map_svg__Tooting_Broadway"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -568.752 1610.002)"
          id="original_map_svg__Colliers_Wood"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(53.13 -606.253 1591.252)"
          id="original_map_svg__South_Wimbledon"
        />
        <use
          xlinkHref="#original_map_svg__termnorthern"
          transform="rotate(53.13 -643.753 1572.502)"
          id="original_map_svg__Morden"
        />
        <use
          xlinkHref="#original_map_svg__stnorthern"
          transform="rotate(-126.87 826.25 150.626)"
          id="original_map_svg__Nine_Elms"
        />
        <use
          xlinkHref="#original_map_svg__termnorthern"
          transform="rotate(90 103.375 1030.625)"
          id="original_map_svg__Battersea_Power_Station"
        />
      </g>
      <g id="original_map_svg__Piccadilly_line_stations">
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 192 185)"
          id="original_map_svg__South_Harrow"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={384}
          y={430}
          id="original_map_svg__Sudbury_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 192 245)"
          id="original_map_svg__Sudbury_Town"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 192 275)"
          id="original_map_svg__Alperton"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 192 335)"
          id="original_map_svg__North_Ealing"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-90 524.75 431.75)"
          id="original_map_svg__Heathrow_23"
        />
        <use
          xlinkHref="#original_map_svg__termelizabeth"
          transform="rotate(90 -468.25 498.25)"
          id="original_map_svg__Heathrow_5_elizabeth"
        />
        <use
          xlinkHref="#original_map_svg__termpiccadilly"
          transform="rotate(90 -463.25 493.25)"
          id="original_map_svg__Heathrow_5_Piccadilly"
        />
        <path
          id="original_map_svg__Heathrow_5_separator"
          style={{
            fill: "none",
            stroke: "#efefef",
            strokeWidth: 0.5,
          }}
          d="M27.5 964h5"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(53.13 -867.502 633.75)"
          id="original_map_svg__Hatton_Cross"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(53.13 -830.002 652.5)"
          id="original_map_svg__Hounslow_West"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(53.13 -792.502 671.25)"
          id="original_map_svg__Hounslow_Central"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 345 377.5)"
          id="original_map_svg__Hounslow_East"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 354.375 358.75)"
          id="original_map_svg__Osterley"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 363.75 340)"
          id="original_map_svg__Boston_Manor"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 373.125 321.25)"
          id="original_map_svg__Northfields"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 382.5 302.5)"
          id="original_map_svg__South_Ealing"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadillye"
          transform="matrix(.6 -.8 .8 .6 530 823)"
          cursor="help"
          id="original_map_svg__Turnham_Green_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(90 -74.7 779.7)"
          id="original_map_svg__Barons_Court_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 557.3 383)"
          id="original_map_svg__Knightsbridge"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 557.3 363)"
          id="original_map_svg__Hyde_Park_Corner"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-143.13 736.542 72.958)"
          id="original_map_svg__Covent_Garden"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          x={1290}
          y={450}
          id="original_map_svg__Russell_Square"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(53.13 393 1436.003)"
          id="original_map_svg__Caledonian_Road"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 727.375 -215.25)"
          id="original_map_svg__Holloway_Road"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(-126.87 736.75 -234)"
          id="original_map_svg__Arsenal"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(180 691.25 79.5)"
          id="original_map_svg__Manor_House"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(126.87 649 370.75)"
          id="original_map_svg__Turnpike_Lane"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(126.87 639.625 352)"
          id="original_map_svg__Wood_Green"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1275}
          y={29}
          id="original_map_svg__Bounds_Green"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(126.87 620.875 314.5)"
          id="original_map_svg__Arnos_Grove"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(126.87 611.5 295.75)"
          id="original_map_svg__Southgate"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(126.87 602.125 277)"
          id="original_map_svg__Oakwood"
        />
        <use
          xlinkHref="#original_map_svg__termpiccadilly"
          transform="rotate(126.87 592.5 258.75)"
          id="original_map_svg__Cockfosters"
        />
      </g>
      <g id="original_map_svg__Metropolitan_Piccadilly_stations_shared">
        <use
          xlinkHref="#original_map_svg__termpiccadilly"
          transform="rotate(90 -139.5 159.5)"
          id="original_map_svg__Uxbridge_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__termmetropolitan2"
          transform="rotate(90 -137 157)"
          id="original_map_svg__Uxbridge_metropolitan"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-90 177 117)"
          id="original_map_svg__Hillingdon_metropolitan"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly2"
          transform="rotate(-90 179.5 119.5)"
          id="original_map_svg__Hillingdon_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(90 -59.5 239.5)"
          id="original_map_svg__Ruislip_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan2"
          transform="rotate(90 -57 237)"
          id="original_map_svg__Ruislip_metropolitan"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan"
          transform="rotate(-90 257 37)"
          id="original_map_svg__Ruislip_Manor_metropolitan"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly2"
          transform="rotate(-90 259.5 39.5)"
          id="original_map_svg__Ruislip_Manor_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__stpiccadilly"
          transform="rotate(90 -19.5 279.5)"
          id="original_map_svg__Eastcote_piccadilly"
        />
        <use
          xlinkHref="#original_map_svg__stmetropolitan2"
          transform="rotate(90 -17 277)"
          id="original_map_svg__Eastcote_metropolitan"
        />
      </g>
      <g id="original_map_svg__Victoria_line_stations">
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1530}
          y={113}
          id="original_map_svg__Tottenham_Hale"
        />
        <use
          xlinkHref="#original_map_svg__stvictoria"
          transform="matrix(.8 -.6 .6 .8 1206 826)"
          id="original_map_svg__Pimlico"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1236}
          y={866}
          id="original_map_svg__Vauxhall"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1305}
          y={958}
          id="original_map_svg__Brixton"
        />
      </g>
      <g id="original_map_svg__Docklands_Light_Railway_stations">
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1747}
          y={585}
          id="original_map_svg__Limehouse"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(-90 1192.5 -607.5)"
          id="original_map_svg__Westferry"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(90 677.5 1262.5)"
          id="original_map_svg__Blackwall"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(-90 1282.5 -697.5)"
          id="original_map_svg__East_India"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(-90 1360 -775)"
          id="original_map_svg__Royal_Victoria"
        />
        <use xlinkHref="#original_map_svg__AETRAM" x={2135} y={530} />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(-90 1405 -820)"
          id="original_map_svg__Prince_Regent"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(90 842.5 1427.5)"
          id="original_map_svg__Royal_Albert"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(-90 1450 -865)"
          id="original_map_svg__Beckton_Park"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(90 887.5 1472.5)"
          id="original_map_svg__Cyprus"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(180 1195 271.5)"
          id="original_map_svg__Gallions_Reach"
        />
        <use
          xlinkHref="#original_map_svg__termdlr"
          x={2390}
          y={513}
          id="original_map_svg__Beckton"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(53.13 602 2124.004)"
          id="original_map_svg__Pudding_Mill_Lane"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={1900}
          y={488}
          id="original_map_svg__Devons_Road"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={1900}
          y={514}
          id="original_map_svg__Langdon_Park"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={1900}
          y={540}
          id="original_map_svg__All_Saints"
        />
        <use
          xlinkHref="#original_map_svg__int"
          transform="rotate(180 940 304.25)"
          id="original_map_svg__West_India_Quay"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(180 940 345)"
          id="original_map_svg__South_Quay"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(180 940 360)"
          id="original_map_svg__Crossharbour"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(180 940 375)"
          id="original_map_svg__Mudchute"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(180 940 390)"
          id="original_map_svg__Island_Gardens"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={1880}
          y={810}
          id="original_map_svg__Cutty_Sark_for_Maritime_Greenwich"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1880}
          y={840}
          id="original_map_svg__Greenwich"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={1880}
          y={870}
          id="original_map_svg__Deptford_Bridge"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={1880}
          y={900}
          id="original_map_svg__Elverson_Road"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1880}
          y={930}
          id="original_map_svg__Lewisham"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1950}
          y={272}
          id="original_map_svg__Stratford_International"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="matrix(.8 -.6 .6 .8 2017.5 362)"
          id="original_map_svg__Stratford_High_Street"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={2036}
          y={402}
          id="original_map_svg__Abbey_Road"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          x={2036}
          y={510}
          id="original_map_svg__Star_Lane"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(126.87 894.75 825.499)"
          id="original_map_svg__West_Silvertown"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(126.87 907.25 850.499)"
          id="original_map_svg__Pontoon_Dock"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(126.87 919.75 875.499)"
          id="original_map_svg__London_City_Airport"
        />
        <use
          xlinkHref="#original_map_svg__airport"
          x={2179}
          y={653}
          cursor="help"
        />
        <use
          xlinkHref="#original_map_svg__stdlr"
          transform="rotate(126.87 932.25 900.499)"
          id="original_map_svg__King_George_V"
        />
      </g>
      <g id="original_map_svg__Watford_DC_Line_stations">
        <use
          xlinkHref="#original_map_svg__intnr"
          x={534}
          y={20}
          id="original_map_svg__Watford_Junction"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={534}
          y={50}
          id="original_map_svg__Watford_High_Street"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={534}
          y={95}
          id="original_map_svg__Bushey"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={534}
          y={131}
          id="original_map_svg__Carpenders_Park"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={534}
          y={167}
          id="original_map_svg__Hatch_End"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={534}
          y={203}
          id="original_map_svg__Headstone_Lane"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(-126.87 556.375 35.25)"
          id="original_map_svg__Kilburn_High_Road"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(-126.87 575.75 -3.5)"
          id="original_map_svg__South_Hampstead"
        />
      </g>
      <g id="original_map_svg__West_London_Line_stations">
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(-90 945.5 35.5)"
          id="original_map_svg__Imperial_Wharf"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1098.333}
          y={981}
          id="original_map_svg__Clapham_Junction"
        />
      </g>
      <g id="original_map_svg__North_London_Line_stations">
        <use
          xlinkHref="#original_map_svg__stdistrict"
          transform="rotate(53.13 -674.902 838.7)"
          id="original_map_svg__Kew_Gardens_district"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 -672.402 833.7)"
          id="original_map_svg__Kew_Gardens_overground"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 -531.252 903.751)"
          id="original_map_svg__South_Acton"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 -493.752 922.501)"
          id="original_map_svg__Acton_Central"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(-126.87 481 26.375)"
          id="original_map_svg__Kensal_Rise"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(-126.87 491.625 5.125)"
          id="original_map_svg__Brondesbury_Park"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={979.5}
          y={270}
          id="original_map_svg__Hampstead_Heath"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1030}
          y={221}
          id="original_map_svg__Gospel_Oak"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(90 510 805)"
          id="original_map_svg__Caledonian_Road_and_Barnsbury"
        />
        <use
          xlinkHref="#original_map_svg__int"
          x={1505}
          y={300}
          id="original_map_svg__Canonbury"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(90 732.5 1027.5)"
          id="original_map_svg__Homerton"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(90 772.5 1067.5)"
          id="original_map_svg__Hackney_Wick"
        />
      </g>
      <g id="original_map_svg__Gospel_Oak_to_Barking_Line_stations">
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(-90 672 -534)"
          id="original_map_svg__Crouch_Hill"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1326}
          y={138}
          id="original_map_svg__Harringay_Green_Lanes"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(90 861 999)"
          id="original_map_svg__Leyton_Midland_Road"
        />
        <use
          xlinkHref="#original_map_svg__stogx"
          transform="rotate(-90 1356.5 -923.5)"
          id="original_map_svg__Renwick_Road"
        />
        <use
          xlinkHref="#original_map_svg__termogx"
          transform="rotate(-90 1411.5 -978.5)"
          id="original_map_svg__Barking_Riverside"
        />
      </g>
      <g id="original_map_svg__East_London_Line_stations">
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(143.13 732.812 449.272)"
          id="original_map_svg__Haggerston"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(143.13 737.812 464.272)"
          id="original_map_svg__Hoxton"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(143.13 742.812 479.272)"
          id="original_map_svg__Shoreditch_High_Street"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1700}
          y={622.5}
          id="original_map_svg__Wapping"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(180 850 326.25)"
          id="original_map_svg__Rotherhithe"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(180 850 365)"
          id="original_map_svg__Surrey_Quays"
        />
        <use
          xlinkHref="#original_map_svg__stogx"
          transform="rotate(-126.87 1028.75 2.5)"
          id="original_map_svg__Surrey_Canal"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1584}
          y={872}
          id="original_map_svg__Queens_Road_Peckham"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1524}
          y={917}
          id="original_map_svg__Peckham_Rye"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1440}
          y={946}
          id="original_map_svg__Denmark_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(90 117 1063)"
          id="original_map_svg__Wandsworth_Road"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1110}
          y={946}
          id="original_map_svg__Battersea_Park"
        />
        <g className="original_map_svg__osib">
          <path
            id="original_map_svg__New_Cross_osi"
            d="M1744.67 818.5 1700 852"
          />
        </g>
        <use
          xlinkHref="#original_map_svg__New_Cross_osi"
          className="original_map_svg__osi"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1744.67}
          y={818.5}
          id="original_map_svg__New_Cross"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1700}
          y={852}
          id="original_map_svg__New_Cross_Gate"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(180 850 443.5)"
          id="original_map_svg__Brockley"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="matrix(.6 .8 -.8 .6 1684 919)"
          id="original_map_svg__Honor_Oak_Park"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="matrix(.6 .8 -.8 .6 1644 949)"
          id="original_map_svg__Forest_Hill"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1604}
          y={979}
          id="original_map_svg__Sydenham"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1514}
          y={1009}
          id="original_map_svg__Crystal_Palace"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="matrix(.6 .8 -.8 .6 1524 1039)"
          id="original_map_svg__Penge_West"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="matrix(.6 .8 -.8 .6 1484 1069)"
          id="original_map_svg__Anerley"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1444}
          y={1099}
          id="original_map_svg__Norwood_Junction"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1404}
          y={1129}
          id="original_map_svg__West_Croydon"
        />
      </g>
      <g id="original_map_svg__Seven_Sisters_Line_stations" opacity={1}>
        <use
          xlinkHref="#original_map_svg__termog"
          transform="rotate(180 701.5 -30.75)"
          id="original_map_svg__Enfield_Town"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(180 701.5 -15.75)"
          id="original_map_svg__Bush_Hill_Park"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1509}
          y={-91}
          id="original_map_svg__Cheshunt"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 808 1444.753)"
          id="original_map_svg__Theobalds_Grove"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 770.5 1426.003)"
          id="original_map_svg__Turkey_Street"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 733 1407.253)"
          id="original_map_svg__Southbury"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={1403}
          y={8.5}
          id="original_map_svg__Edmonton_Green"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1403}
          y={31}
          id="original_map_svg__Silver_Street"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1403}
          y={53.5}
          id="original_map_svg__White_Hart_Lane"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1403}
          y={76}
          id="original_map_svg__Bruce_Grove"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 716.25 476.25)"
          id="original_map_svg__Stamford_Hill"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 725.625 495)"
          id="original_map_svg__Stoke_Newington"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 735 513.75)"
          id="original_map_svg__Rectory_Road"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1635}
          y={355}
          id="original_map_svg__London_Fields"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1635}
          y={390}
          id="original_map_svg__Cambridge_Heath"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(53.13 329.249 1854.129)"
          id="original_map_svg__Bethnal_Green_overground"
        />
      </g>
      <g id="original_map_svg__Chingford_Line_stations">
        <use
          xlinkHref="#original_map_svg__termog"
          transform="rotate(180 841 11.5)"
          id="original_map_svg__Chingford"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1682}
          y={53}
          id="original_map_svg__Highams_Park"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          x={1682}
          y={83}
          id="original_map_svg__Wood_Street"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(180 841 85)"
          id="original_map_svg__St_James_Street"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(180 841 105)"
          id="original_map_svg__Clapton"
        />
      </g>
      <g id="original_map_svg__Romford_to_Upminster_Line_station">
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(143.13 1140.292 462.876)"
          id="original_map_svg__Emerson_Park"
        />
      </g>
      <g id="original_map_svg__Bakerloo_Overground_shared_stations">
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 184.25 315.25)"
          id="original_map_svg__South_Kenton_bakerloo"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 193 332.75)"
          id="original_map_svg__North_Wembley_bakerloo"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 210.5 367.75)"
          id="original_map_svg__Stonebridge_Park_bakerloo"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 219.25 385.25)"
          id="original_map_svg__Harlesden_bakerloo"
        />
        <use
          xlinkHref="#original_map_svg__stbakerloo"
          transform="rotate(126.87 239.875 426.5)"
          id="original_map_svg__Kensal_Green_bakerloo"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 186.75 314)"
          id="original_map_svg__South_Kenton_overground"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 195.5 331.5)"
          id="original_map_svg__North_Wembley_overground"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 213 366.5)"
          id="original_map_svg__Stonebridge_Park_overground"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 221.75 384)"
          id="original_map_svg__Harlesden_overground"
        />
        <use
          xlinkHref="#original_map_svg__stog"
          transform="rotate(126.87 242.375 425.25)"
          id="original_map_svg__Kensal_Green_overground"
        />
      </g>
      <g id="original_map_svg__Elizabeth_Line_stations">
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          x={105}
          y={936.5}
          id="original_map_svg__Heathrow_Central"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={0}
          y={480}
          id="original_map_svg__Reading"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={0}
          y={510}
          id="original_map_svg__Twyford"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={0}
          y={540}
          id="original_map_svg__Maidenhead"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          x={0}
          y={570}
          id="original_map_svg__Taplow"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          x={0}
          y={600}
          id="original_map_svg__Burnham"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={0}
          y={630}
          id="original_map_svg__Slough"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          x={0}
          y={660}
          id="original_map_svg__Langley"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          x={0}
          y={690}
          id="original_map_svg__Iver"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(-90 404.95 318.95)"
          id="original_map_svg__West_Drayton"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={160}
          y={723.9}
          id="original_map_svg__Hayes_and_Harlington"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(90 -261.95 461.95)"
          id="original_map_svg__Southall"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(-90 481.95 241.95)"
          id="original_map_svg__Hanwell"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={294.667}
          y={723.9}
          id="original_map_svg__West_Ealing"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(90 -131.95 591.95)"
          id="original_map_svg__Acton_Main_Line"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2353.33}
          y={704}
          id="original_map_svg__Abbey_Wood"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(53.13 705.5 2163.504)"
          id="original_map_svg__Maryland"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(-126.87 1120.5 -430.249)"
          id="original_map_svg__Ilford"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(-126.87 1129.875 -448.999)"
          id="original_map_svg__Seven_Kings"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="matrix(-.6 -.8 .8 -.6 2197 163)"
          id="original_map_svg__Goodmayes"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="rotate(-126.87 1148.625 -486.499)"
          id="original_map_svg__Chadwell_Heath"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="matrix(-.6 -.8 .8 -.6 2287 95.5)"
          id="original_map_svg__Gidea_Park"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="matrix(-.6 -.8 .8 -.6 2317 73)"
          id="original_map_svg__Harold_Wood"
        />
        <use
          xlinkHref="#original_map_svg__stelizabeth"
          transform="matrix(-.6 -.8 .8 -.6 2347 50.5)"
          id="original_map_svg__Brentwood"
        />
        <use
          xlinkHref="#original_map_svg__intnr"
          x={2377}
          y={28}
          id="original_map_svg__Shenfield"
        />
      </g>
      <g id="original_map_svg__Tramlink_stations" cursor="help">
        <use xlinkHref="#original_map_svg__sttl" x={967} y={1119.5} />
        <use xlinkHref="#original_map_svg__sttl" x={997} y={1121.3} />
        <use xlinkHref="#original_map_svg__sttl" x={1032.83} y={1147.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1065} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1095} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1125} y={1155} />
        <use xlinkHref="#original_map_svg__sttlnr" x={1155} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1185} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1215} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1245} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1275} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1305} y={1155} />
        <use xlinkHref="#original_map_svg__sttlow" x={1335} y={1155} />
        <use
          xlinkHref="#original_map_svg__sttlow"
          transform="rotate(-36.87 2395.83 -1504.999)"
        />
        <use
          xlinkHref="#original_map_svg__sttlow"
          transform="rotate(36.87 -991.83 2706.989)"
        />
        <use
          xlinkHref="#original_map_svg__sttlow"
          transform="rotate(180 697.5 577.5)"
        />
        <use
          xlinkHref="#original_map_svg__sttlow"
          transform="rotate(180 712.5 577.5)"
        />
        <use xlinkHref="#original_map_svg__sttlnr" x={1465} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1495} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1525} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1551.5} y={1144.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1571.5} y={1129.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1591.5} y={1114.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1611.5} y={1099.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1635.5} y={1081.5} />
        <use xlinkHref="#original_map_svg__sttlnr" x={1655.5} y={1066.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1675.5} y={1051.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1695.5} y={1036.5} />
        <use xlinkHref="#original_map_svg__sttlnr" x={1715.5} y={1021.5} />
        <use xlinkHref="#original_map_svg__sttlnr" x={1647} y={1093.5} />
        <use xlinkHref="#original_map_svg__sttl" x={1560} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1590} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1620} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1650} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1680} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1710} y={1155} />
        <use xlinkHref="#original_map_svg__sttl" x={1740} y={1155} />
      </g>
    </g>
    <defs>
      <g id="original_map_svg__wheelchair" transform="scale(.05)">
        <circle
          r={150}
          style={{
            fill: "#034ea2",
            stroke: "#034ea2",
            strokeWidth: 40,
          }}
        />
        <g fill="#fff">
          <path d="M-51 44a57.5 57.5 0 1 0 94-59l3-25A80 80 0 1 1-63 69" />
          <circle cx={25} cy={-100} r={22} />
        </g>
        <g stroke="#fff" strokeLinecap="round" fill="none">
          <path
            d="M27-57 10 13h-70l-27 60.5"
            strokeWidth={26}
            strokeLinejoin="round"
          />
          <path d="M-36-34.5h58" strokeWidth={21} />
        </g>
      </g>
      <g
        id="original_map_svg__crutch"
        style={{
          fill: "#fff",
          stroke: "#034ea2",
          strokeLinejoin: "round",
          strokeLinecap: "round",
        }}
        transform="scale(.05)"
      >
        <circle r={150} strokeWidth={40} />
        <path
          d="M-40-100V30L0 70v40-40l40-40v-130m-80 30h80m-80 80h80"
          strokeWidth={21}
          transform="rotate(20)"
        />
      </g>
      <g id="original_map_svg__x_acc">
        <circle
          r={7.5}
          style={{
            fill: "#fff",
            stroke: "#034ea2",
            strokeWidth: 1,
          }}
        />
        <path
          id="original_map_svg__x_arrow"
          style={{
            fill: "#034ea2",
            stroke: "none",
          }}
          d="M-4-3c3-3.5 9.5-3.5 9.5 4l-6-2.5 3-1.5C0-5.5-3.5-2.5-4-3z"
        />
        <use xlinkHref="#original_map_svg__x_arrow" transform="rotate(180)" />
      </g>
    </defs>
    <defs>
      <g id="original_map_svg__rv">
        <circle
          r={10}
          style={{
            fill: "#f6c",
            stroke: "#f6c",
            strokeWidth: 1,
          }}
        />
        <text
          style={{
            fontSize: 11,
            fill: "#fff",
          }}
          y={4}
          className="original_map_svg__b original_map_svg__mid"
        >
          {"RV"}
        </text>
      </g>
    </defs>
    <g id="original_map_svg__text">
      <g
        id="original_map_svg__stname"
        className="original_map_svg__st"
        transform="translate(0 4)"
        opacity={1}
      >
        <g
          id="original_map_svg__stname_interchanges"
          className="original_map_svg__b"
        >
          <text x={436} y={781} className="original_map_svg__end">
            {"Acton"}
            <tspan x={436} dy={13}>
              {"Town"}
            </tspan>
          </text>
          <text x={1591.5} y={541.5} className="original_map_svg__end">
            {"Aldgate"}
          </text>
          <text x={1653} y={528} className="original_map_svg__mid">
            {"Aldgate"}
            <tspan x={1683} dy={0} />
            <tspan x={1653} dy={13}>
              {"East"}
            </tspan>
          </text>
          <text x={1062} y={169.5} className="original_map_svg__end">
            {"Archway"}
          </text>
          <text x={1053} y={528}>
            {"Baker "}
            <tspan x={1062} dy={13}>
              {"Street"}
            </tspan>
          </text>
          <text x={1465} y={555} className="original_map_svg__end">
            {"Bank"}
          </text>
          <text x={1444} y={477} className="original_map_svg__mid">
            {"Barbican"}
          </text>
          <text x={2173} y={364}>
            {"Barking"}
          </text>
          <text x={1362} y={630} className="original_map_svg__end">
            {"Blackfriars"}
          </text>
          <text x={1602} y={88} className="original_map_svg__mid">
            {"Blackhorse"}
            <tspan x={1645} dy={0} />
            <tspan x={1602} dy={13}>
              {"Road"}
            </tspan>
          </text>
          <text x={1095} y={607} className="original_map_svg__end">
            {"Bond Street"}
          </text>
          <text x={1893} y={449} className="original_map_svg__end">
            {"Bow"}
            <tspan x={1893} dy={13}>
              {" Road"}
            </tspan>
          </text>
          <text x={1910} y={418}>
            {"Bow Church"}
          </text>
          <text x={1195} y={256.5}>
            {"Camden "}
            <tspan x={1215} dy={13}>
              {"Road"}
            </tspan>
          </text>
          <text x={1180} y={298} className="original_map_svg__end">
            <tspan className="original_map_svg__ul">{"Camden"}</tspan>
            <tspan x={1180} dy={13}>
              <tspan className="original_map_svg__ul">{"Town"}</tspan>
            </tspan>
          </text>
          <text x={1694} y={689} className="original_map_svg__end">
            {"Canada"}
            <tspan x={1694} dy={13}>
              {" Water"}
            </tspan>
          </text>
          <text
            x={1870}
            y={635}
            className="original_map_svg__end original_map_svg__ul"
          >
            {"Canary Wharf"}
          </text>
          <text x={1901} y={633}>
            {"Canary Wharf"}
          </text>
          <text x={1901} y={660}>
            {"Canary "}
            <tspan x={1901} dy={15}>
              {"Wharf"}
            </tspan>
          </text>
          <text x={2046} y={556}>
            {"Canning "}
            <tspan x={2046} dy={13}>
              {"Town"}
            </tspan>
          </text>
          <text x={1426} y={568} className="original_map_svg__end">
            {"Cannon"}
            <tspan x={1426} dy={13}>
              {" Street"}
            </tspan>
          </text>
          <text x={1277} y={677} className="original_map_svg__end">
            {"Charing Cross"}
          </text>
          <text x={1265} y={915} className="original_map_svg__end">
            {"Clapham"}
            <tspan x={1265} dy={15}>
              {" High Street"}
            </tspan>
          </text>
          <text x={1244.5} y={977}>
            {"Clapham North"}
          </text>
          <text x={2210} y={607} className="original_map_svg__end">
            {"Custom House"}
            <tspan x={2210} dy={13}>
              {" for ExCeL"}
            </tspan>
          </text>
          <text x={1583} y={265} className="original_map_svg__mid">
            {"Dalston"}
            <tspan x={1613} />
            <tspan x={1583} dy={13}>
              {"Kingsland"}
            </tspan>
          </text>
          <text x={1555} y={340} className="original_map_svg__end">
            {"Dalston"}
            <tspan x={1555} dy={13}>
              {" Junction"}
            </tspan>
          </text>
          <text x={340} y={692} className="original_map_svg__mid">
            {"Ealing"}
            <tspan x={365} dy={0} />
            <tspan x={340} dy={13}>
              {"Broadway"}
            </tspan>
          </text>
          <text x={395} y={749} className="original_map_svg__end">
            {"Ealing"}
            <tspan x={395} dy={13}>
              {" Common"}
            </tspan>
          </text>
          <text x={871} y={886.4} className="original_map_svg__mid">
            {"Earl's"}
            <tspan x={892} dy={0} />
            <tspan x={871} dy={13}>
              {"Court"}
            </tspan>
          </text>
          <text x={1490} y={768}>
            {"Elephant & Castle"}
          </text>
          <text x={1282} y={695} className="original_map_svg__end">
            {"Embankment"}
          </text>
          <text x={1185} y={350} className="original_map_svg__end">
            {"Euston"}
          </text>
          <text x={1215} y={362}>
            {"Euston"}
          </text>
          <text x={1211} y={417}>
            {"Euston "}
            <tspan x={1211} dy={13}>
              {"Square"}
            </tspan>
          </text>
          <text x={1396} y={452}>
            {"Farringdon"}
          </text>
          <text x={1376} y={493} className="original_map_svg__end">
            {"Farringdon"}
          </text>
          <text x={957} y={368}>
            {"Finchley "}
            <tspan x={963} dy={13}>
              {"Road"}
            </tspan>
          </text>
          <text x={958} y={338}>
            {"Finchley Road & Frognal"}
          </text>
          <text x={1375} y={183} className="original_map_svg__end">
            {"Finsbury Park"}
          </text>
          <text x={2050} y={287}>
            {"Forest "}
            <tspan x={2050} dy={13}>
              {"Gate"}
            </tspan>
          </text>
          <text x={1142} y={670} className="original_map_svg__end">
            {"Green Park"}
          </text>
          <text x={1020.3} y={884} className="original_map_svg__mid">
            {"Gloucester"}
            <tspan x={1062} dy={0} />
            <tspan x={1020.3} dy={13}>
              {"Road"}
            </tspan>
          </text>
          <text x={439} y={828} className="original_map_svg__end">
            {"Gunnersbury"}
          </text>
          <text x={1647} y={312}>
            {"Hackney "}
            <tspan x={1647} dy={13}>
              {"Central"}
            </tspan>
          </text>
          <text x={1647} y={275}>
            {"Hackney Downs"}
          </text>
          <text x={647} y={843}>
            {"Hammersmith"}
          </text>
          <text x={543.5} y={236}>
            {"Harrow & "}
            <tspan x={543.5} dy={13}>
              {"Wealdstone"}
            </tspan>
          </text>
          <text
            x={117}
            y={1002}
            style={{
              fontWeight: 400,
            }}
          >
            {"Heathrow Terminal 4"}
          </text>
          <text x={1870} y={660} className="original_map_svg__end">
            {"Heron Quays"}
          </text>
          <text x={1426} y={268}>
            {"Highbury & "}
            <tspan x={1426} dy={15}>
              {"Islington"}
            </tspan>
          </text>
          <text x={1284} y={510} className="original_map_svg__end">
            {"Holborn"}
          </text>
          <text x={818} y={806} className="original_map_svg__end">
            {"Kensington"}
            <tspan x={818} dy={15}>
              {" (Olympia)"}
            </tspan>
          </text>
          <text x={1140} y={210}>
            {"Kentish Town"}
          </text>
          <text x={1133} y={242} className="original_map_svg__end">
            {"Kentish Town"}
            <tspan x={1133} dy={13}>
              {" West"}
            </tspan>
          </text>
          <text x={543.5} y={274}>
            {"Kenton"}
          </text>
          <text x={521.5} y={311} className="original_map_svg__end">
            {"Northwick"}
            <tspan x={521.5} dy={13}>
              {" Park"}
            </tspan>
          </text>
          <text x={1295} y={349}>
            {"King's Cross "}
            <tspan x={1295} dy={15}>
              {"St. Pancras"}
            </tspan>
          </text>
          <text x={1269} y={595}>
            {"Leicester "}
            <tspan x={1273} dy={13}>
              {"Square"}
            </tspan>
          </text>
          <text x={1935} y={160}>
            {"Leytonstone"}
          </text>
          <text x={1956} y={180}>
            {"Leytonstone "}
            <tspan x={1956} dy={15}>
              {"High Road"}
            </tspan>
          </text>
          <text x={1564} y={452} className="original_map_svg__mid">
            {"Liverpool"}
            <tspan x={1601} dy={0} />
            <tspan x={1564} dy={13}>
              {"Street"}
            </tspan>
          </text>
          <g className="original_map_svg__end">
            <text
              className="original_map_svg__textbg"
              transform="translate(1535 530)"
            >
              {"Liverpool Street"}
            </text>
            <text transform="translate(1535 530)">{"Liverpool Street"}</text>
          </g>
          <text x={1485} y={689}>
            {"London "}
            <tspan x={1485} dy={13}>
              {"Bridge"}
            </tspan>
          </text>
          <text x={2102} y={244}>
            {"Manor Park"}
          </text>
          <text x={1816} y={459.5}>
            {"Mile "}
            <tspan x={1816} dy={13}>
              {"End"}
            </tspan>
          </text>
          <text
            className="original_map_svg__textbg"
            transform="translate(1459 602)"
          >
            {"Monument"}
          </text>
          <text transform="translate(1459 602)">{"Monument"}</text>
          <text x={1484} y={483}>
            {"Moorgate"}
          </text>
          <text x={869} y={700.5} className="original_map_svg__end">
            {"Notting"}
            <tspan x={869} dy={13}>
              {" Hill Gate"}
            </tspan>
          </text>
          <text x={1164} y={574}>
            {"Oxford "}
            <tspan x={1170} dy={13}>
              {"Circus"}
            </tspan>
          </text>
          <text x={950} y={557} className="original_map_svg__end">
            {"Paddington"}
          </text>
          <text x={1213} y={637}>
            {"Piccadilly "}
            <tspan x={1218} dy={13}>
              {"Circus"}
            </tspan>
          </text>
          <text x={754} y={527} className="original_map_svg__end">
            {"Queen's Park"}
          </text>
          <text x={300} y={266.5} className="original_map_svg__mid">
            {"Rayners"}
            <tspan x={333} dy={0} />
            <tspan x={300} dy={13}>
              {"Lane"}
            </tspan>
          </text>
          <text x={371} y={913.9}>
            {"Richmond"}
          </text>
          <text x={1417} y={98}>
            {"Seven Sisters"}
          </text>
          <text x={1693} y={575} className="original_map_svg__end">
            {"Shadwell"}
          </text>
          <text x={713} y={699}>
            {"Shepherd's "}
            <tspan x={725} dy={15}>
              {"Bush"}
            </tspan>
          </text>
          <text x={1408} y={155}>
            {"South "}
            <tspan x={1408} dy={13}>
              {"Tottenham"}
            </tspan>
          </text>
          <text x={1296} y={933}>
            {"Stockwell"}
          </text>
          <text x={1962} y={318} className="original_map_svg__end">
            {"Stratford"}
          </text>
          <text x={1085} y={813} className="original_map_svg__end">
            {"South"}
            <tspan x={1085} dy={13}>
              {" Kensington"}
            </tspan>
          </text>
          <text x={1187} y={469}>
            {"Tottenham "}
            <tspan x={1187} dy={13}>
              {"Court "}
              <tspan x={1187} dy={13}>
                {"Road"}
              </tspan>
            </tspan>
          </text>
          <text x={1595} y={602}>
            {"Tower "}
            <tspan x={1595} dy={13}>
              {"Gateway"}
            </tspan>
          </text>
          <text x={1563} y={602} className="original_map_svg__mid">
            {"Tower"}
            <tspan x={1586} dy={0} />
            <tspan x={1563} dy={13}>
              {"Hill"}
            </tspan>
          </text>
          <text x={1121} y={169.5}>
            {"Upper Holloway"}
          </text>
          <text x={1188} y={793}>
            {"Victoria"}
          </text>
          <text x={1694} y={113}>
            {"Walthamstow "}
            <tspan x={1736} dy={13}>
              {"Central"}
            </tspan>
          </text>
          <text x={1694.75} y={155}>
            {"Walthamstow "}
            <tspan x={1694.75} dy={13}>
              {"Queen's Road"}
            </tspan>
          </text>
          <text x={2041} y={230} className="original_map_svg__mid">
            {"Wanstead"}
            <tspan x={2078} dy={0} />
            <tspan x={2041} dy={13}>
              {"Park"}
            </tspan>
          </text>
          <text x={1148} y={404} className="original_map_svg__end">
            {"Warren Street"}
          </text>
          <text x={1350} y={736}>
            {"Waterloo"}
          </text>
          <text x={595} y={409} className="original_map_svg__end">
            {"Wembley Central"}
          </text>
          <text x={656} y={282}>
            {"Wembley Park"}
          </text>
          <text x={816.5} y={920} className="original_map_svg__end">
            {"West Brompton"}
          </text>
          <text x={2043} y={450}>
            {"West "}
            <tspan x={2043} dy={13}>
              {"Ham"}
            </tspan>
          </text>
          <text x={914} y={366} className="original_map_svg__end">
            {"West"}
            <tspan x={914} dy={13}>
              {" Hampstead"}
            </tspan>
          </text>
          <text x={1870} y={597} className="original_map_svg__end">
            <tspan className="original_map_svg__ul">{"West India"}</tspan>
            <tspan x={1870} dy={13}>
              <tspan className="original_map_svg__ul">{"Quay"}</tspan>
            </tspan>
          </text>
          <text x={1243} y={754}>
            {"Westminster"}
          </text>
          <text x={683} y={466.5} className="original_map_svg__end">
            {"Willesden Junction"}
          </text>
          <text x={1716} y={536}>
            {"Whitechapel"}
          </text>
          <text x={648} y={744}>
            {"Wood Lane"}
          </text>
          <text x={2102} y={267}>
            {"Woodgrange Park"}
          </text>
          <text x={2330.67} y={671}>
            {"Woolwich"}
          </text>
          <text x={2286.29} y={721} className="original_map_svg__mid">
            {"Woolwich"}
            <tspan x={2323} dy={0} />
            <tspan x={2286.29} dy={13}>
              {"Arsenal"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_Bakerloo_line">
          <g className="original_map_svg__end">
            <text x={537} y={365.5}>
              {"South Kenton"}
            </text>
            <text x={565} y={386.5}>
              {"North Wembley"}
            </text>
            <text x={621} y={428.5}>
              {"Stonebridge Park"}
            </text>
            <text x={649} y={449.5}>
              {"Harlesden"}
            </text>
            <text x={715} y={496}>
              {"Kensal"}
              <tspan x={715} dy={13}>
                {" Green"}
              </tspan>
            </text>
            <text x={779} y={547}>
              {"Kilburn Park"}
            </text>
            <text x={805} y={566.5}>
              {"Maida Vale"}
            </text>
            <text x={831} y={586}>
              {"Warwick Avenue"}
            </text>
            <text x={961} y={536}>
              {"Edgware Road"}
            </text>
            <text x={991} y={513.5}>
              {"Marylebone"}
            </text>
          </g>
          <text x={1088} y={502}>
            {"Regent's "}
            <tspan x={1114} dy={13}>
              {"Park"}
            </tspan>
          </text>
          <text x={1420} y={785} className="original_map_svg__mid">
            {"Lambeth"}
            <tspan x={1452} dy={0} />
            <tspan x={1420} dy={13}>
              {"North"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_Central_line">
          <text
            x={142}
            y={247.5}
            className="original_map_svg__b original_map_svg__mid"
          >
            {"West"}
            <tspan x={164} dy={0} />
            <tspan x={142} dy={13}>
              {"Ruislip"}
            </tspan>
          </text>
          <g className="original_map_svg__end">
            <text x={130} y={344}>
              {"Ruislip Gardens"}
            </text>
            <text x={130} y={394}>
              {"South Ruislip"}
            </text>
            <text x={148} y={468.4}>
              {"Northolt"}
            </text>
            <text x={214} y={517.9}>
              {"Greenford"}
            </text>
            <text x={294} y={577.9}>
              {"Perivale"}
            </text>
            <text x={360} y={620.4} className="original_map_svg__b">
              {"Hanger Lane"}
            </text>
          </g>
          <text x={418} y={700}>
            {"West "}
            <tspan x={418} dy={13}>
              {"Acton"}
            </tspan>
          </text>
          <text x={491} y={678}>
            {"North "}
            <tspan x={491} dy={13}>
              {"Acton"}
            </tspan>
          </text>
          <text x={580} y={693.9} className="original_map_svg__mid">
            {"East"}
            <tspan x={597} dy={0} />
            <tspan x={580} dy={13}>
              {"Acton"}
            </tspan>
          </text>
          <text
            x={624}
            y={737}
            className="original_map_svg__end original_map_svg__b"
          >
            {"White"}
            <tspan x={624} dy={13}>
              {" City"}
            </tspan>
          </text>
          <text x={806} y={741} className="original_map_svg__mid">
            {"Holland Park"}
          </text>
          <text x={930} y={740.9} className="original_map_svg__mid">
            {"Queensway"}
          </text>
          <g className="original_map_svg__end">
            <text x={986} y={669.5}>
              {"Lancaster"}
              <tspan x={986} dy={13}>
                {" Gate"}
              </tspan>
            </text>
            <text x={1038} y={643.5}>
              {"Marble Arch"}
            </text>
          </g>
          <text x={1330} y={535} className="original_map_svg__mid">
            {"Chancery"}
            <tspan x={1364} dy={0} />
            <tspan x={1330} dy={13}>
              {"Lane"}
            </tspan>
          </text>
          <text x={1400} y={540} className="original_map_svg__end">
            {"St."}
            <tspan x={1400} dy={13}>
              {" Paul's"}
            </tspan>
          </text>
          <text x={1655} y={435}>
            {"Bethnal Green"}
          </text>
          <text x={1937} y={222.5} className="original_map_svg__end">
            {"Leyton"}
          </text>
          <g className="original_map_svg__end">
            <text x={1914} y={106}>
              {"Snaresbrook"}
            </text>
            <text x={1914} y={76}>
              {"South Woodford"}
            </text>
            <text x={1914} y={46} className="original_map_svg__b">
              {"Woodford"}
            </text>
            <text x={1914} y={16}>
              {"Buckhurst Hill"}
            </text>
            <text x={1914} y={-14}>
              {"Loughton"}
            </text>
            <text x={1914} y={-44}>
              {"Debden"}
            </text>
            <text x={1914} y={-74}>
              {"Theydon Bois"}
            </text>
            <text x={1914} y={-104}>
              {"Epping"}
            </text>
          </g>
          <g className="original_map_svg__mid">
            <text x={1996} y={103}>
              {"Redbridge"}
            </text>
            <text x={2076} y={90}>
              {"Newbury"}
              <tspan x={2106} dy={0} />
              <tspan x={2076} dy={13}>
                {"Park"}
              </tspan>
            </text>
          </g>
          <text x={2031} y={137}>
            {"Gants Hill"}
          </text>
          <text x={1940} y={137}>
            {"Wanstead"}
          </text>
          <text x={2123} y={90}>
            {"Barkingside"}
          </text>
          <text x={2123} y={66}>
            {"Fairlop"}
          </text>
          <text x={2123} y={42}>
            {"Hainault"}
          </text>
          <text x={2071} y={-7}>
            {"Grange Hill"}
          </text>
          <g className="original_map_svg__mid">
            <text x={2026} y={-7}>
              {"Chigwell"}
            </text>
            <text x={1961} y={-20}>
              {"Roding"}
              <tspan x={1986} dy={0} />
              <tspan x={1961} dy={13}>
                {"Valley"}
              </tspan>
            </text>
          </g>
        </g>
        <g id="original_map_svg__stname_Circle_line">
          <text transform="translate(1000 562)" className="original_map_svg__b">
            {"Edgware "}
            <tspan x={0} dy={13}>
              {"Road"}
            </tspan>
          </text>
          <text x={875} y={660} className="original_map_svg__end">
            {"Bayswater"}
          </text>
          <text x={918} y={789.5}>
            {"High Street "}
            <tspan x={918} dy={13}>
              {"Kensington"}
            </tspan>
          </text>
          <text x={1138} y={835}>
            {"Sloane "}
            <tspan x={1138} dy={13}>
              {"Square"}
            </tspan>
          </text>
          <text x={1220} y={772}>
            {"St. James's Park"}
          </text>
          <g className="original_map_svg__end">
            <text x={1336} y={648}>
              {"Temple"}
            </text>
            <text x={1402} y={598}>
              {"Mansion"}
              <tspan x={1390} dy={13}>
                {" House"}
              </tspan>
            </text>
            <text x={1101} y={443}>
              {"Great Portland"}
              <tspan x={1101} dy={13}>
                {" Street"}
              </tspan>
            </text>
            <text x={732.5} y={619.5}>
              {"Westbourne"}
              <tspan x={712.5} dy={13}>
                {" Park"}
              </tspan>
            </text>
            <text x={642.5} y={672}>
              {"Latimer"}
              <tspan x={642.5} dy={13}>
                {" Road"}
              </tspan>
            </text>
          </g>
          <text x={800} y={637} className="original_map_svg__mid">
            {"Royal Oak"}
          </text>
          <text x={699.5} y={680.5}>
            {"Ladbroke Grove"}
          </text>
          <text x={651.5} y={767.9}>
            {"Shepherd's "}
            <tspan x={651.5} dy={15}>
              {"Bush Market"}
            </tspan>
          </text>
          <text x={651.5} y={804.9}>
            {"Goldhawk "}
            <tspan x={651.5} dy={13}>
              {"Road"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_District_line_and_Hammersmith_And_City_line">
          <text x={465} y={810} className="original_map_svg__end">
            {"Chiswick Park"}
          </text>
          <text x={540} y={814.5}>
            <tspan className="original_map_svg__ul">{"Turnham"}</tspan>
            <tspan x={550} dy={13} className="original_map_svg__ul">
              {"Green"}
            </tspan>
          </text>
          <text x={535} y={855.5} className="original_map_svg__end">
            {"Stamford"}
            <tspan x={535} dy={13}>
              {" Brook"}
            </tspan>
          </text>
          <g className="original_map_svg__mid">
            <text x={587} y={886.4}>
              {"Ravenscourt"}
              <tspan x={630} dy={0} />
              <tspan x={587} dy={13}>
                {"Park"}
              </tspan>
            </text>
            <text x={705} y={886.4}>
              {"Barons"}
              <tspan x={731} dy={0} />
              <tspan x={705} dy={13}>
                {"Court"}
              </tspan>
            </text>
            <text x={780} y={886.4}>
              {"West"}
              <tspan x={800} dy={0} />
              <tspan x={780} dy={13}>
                {"Kensington"}
              </tspan>
            </text>
            <text x={1963} y={453.5}>
              {"Bromley-by-Bow"}
            </text>
          </g>
          <text x={1765.5} y={496.5}>
            {"Stepney "}
            <tspan x={1765.5} dy={13}>
              {"Green"}
            </tspan>
          </text>
          <text x={2081} y={435}>
            {"Plaistow"}
          </text>
          <text x={2111} y={412.5}>
            {"Upton Park"}
          </text>
          <text x={2141} y={384}>
            {"East "}
            <tspan x={2141} dy={13}>
              {"Ham"}
            </tspan>
          </text>
          <text x={2201} y={345}>
            {"Upney"}
          </text>
          <text x={2231} y={322.5}>
            {"Becontree"}
          </text>
          <text x={2261} y={300}>
            {"Dagenham Heathway"}
          </text>
          <text x={2291} y={277.5}>
            {"Dagenham East"}
          </text>
          <text x={2321} y={255}>
            {"Elm Park"}
          </text>
          <g className="original_map_svg__end">
            <text x={2331} y={215.5}>
              {"Hornchurch"}
            </text>
            <text x={2361} y={193}>
              {"Upminster Bridge"}
            </text>
          </g>
          <text
            x={2401}
            y={162}
            className="original_map_svg__mid original_map_svg__b"
          >
            {"Upminster"}
          </text>
          <g className="original_map_svg__end">
            <text x={819} y={960}>
              {"Fulham Broadway"}
            </text>
            <text x={830} y={996}>
              {"Parsons Green"}
            </text>
            <text x={851} y={1024}>
              {"Putney Bridge"}
            </text>
            <text x={872} y={1052}>
              {"East Putney"}
            </text>
            <text x={890} y={1076}>
              {"Southfields"}
            </text>
            <text x={908} y={1100}>
              {"Wimbledon Park"}
            </text>
            <text x={927} y={1128} className="original_map_svg__b">
              {"Wimbledon"}
            </text>
          </g>
        </g>
        <g id="original_map_svg__stname_Jubilee_line">
          <text x={663} y={162}>
            {"Stanmore"}
          </text>
          <text x={663} y={192}>
            {"Canons Park"}
          </text>
          <text x={663} y={222}>
            {"Queensbury"}
          </text>
          <text x={663} y={252}>
            {"Kingsbury"}
          </text>
          <g className="original_map_svg__mid">
            <text x={681} y={326}>
              {"Neasden"}
            </text>
            <text x={741} y={326}>
              {"Dollis"}
              <tspan x={762} dy={0} />
              <tspan x={741} dy={13}>
                {"Hill"}
              </tspan>
            </text>
            <text x={798} y={326}>
              {"Willesden"}
              <tspan x={835} dy={0} />
              <tspan x={798} dy={13}>
                {"Green"}
              </tspan>
            </text>
            <text x={861} y={326} className="original_map_svg__b">
              {"Kilburn"}
            </text>
          </g>
          <text x={947.5} y={419.5} className="original_map_svg__end">
            {"Swiss Cottage"}
          </text>
          <text x={985} y={469.5} className="original_map_svg__end">
            {"St. John's"}
            <tspan x={985} dy={13}>
              {" Wood"}
            </tspan>
          </text>
          <text x={1390} y={708}>
            {"Southwark"}
          </text>
          <text x={1590} y={692} className="original_map_svg__mid">
            {"Bermondsey"}
          </text>
          <text x={2000} y={665} className="original_map_svg__mid">
            {"North"}
            <tspan x={2020} dy={0} />
            <tspan x={2000} dy={13}>
              {"Greenwich"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_Metropolitan_line">
          <text x={136} y={38}>
            {"Chesham"}
          </text>
          <text x={90} y={68.5} className="original_map_svg__end">
            {"Amersham"}
          </text>
          <text x={131.5} y={100} className="original_map_svg__end">
            {"Chalfont & Latimer"}
          </text>
          <text x={161.5} y={122.5} className="original_map_svg__end">
            {"Chorleywood"}
          </text>
          <text x={191.5} y={145} className="original_map_svg__end">
            {"Rickmansworth"}
          </text>
          <text x={234} y={80}>
            {"Watford"}
          </text>
          <text x={234} y={130}>
            {"Croxley"}
          </text>
          <text x={249} y={156}>
            {"Moor Park"}
          </text>
          <text x={279} y={178.5}>
            {"Northwood"}
          </text>
          <text x={309} y={201}>
            {"Northwood Hills"}
          </text>
          <text x={339} y={223.5}>
            {"Pinner"}
          </text>
          <text x={369} y={246}>
            {"North Harrow"}
          </text>
          <text x={375} y={311}>
            {"West "}
            <tspan x={375} dy={13}>
              {"Harrow"}
            </tspan>
          </text>
          <g className="original_map_svg__mid">
            <text x={20} y={316}>
              {"Uxbridge"}
            </text>
            <text x={60} y={277}>
              {"Hillingdon"}
            </text>
            <text x={100} y={316} className="original_map_svg__b">
              {"Ickenham"}
            </text>
            <text x={180} y={316}>
              {"Ruislip"}
            </text>
            <text x={220} y={264}>
              {"Ruislip"}
              <tspan x={245} dy={0} />
              <tspan x={220} dy={13}>
                {"Manor"}
              </tspan>
            </text>
            <text x={260} y={316}>
              {"Eastcote"}
            </text>
            <text x={440} y={266}>
              {"Harrow-on-"}
              <tspan x={440} dy={13}>
                {"the-Hill"}
              </tspan>
            </text>
            <text x={590} y={311}>
              {"Preston"}
              <tspan x={618} dy={0} />
              <tspan x={590} dy={13}>
                {"Road"}
              </tspan>
            </text>
          </g>
        </g>
        <g id="original_map_svg__stname_Northern_line">
          <text x={718} y={118}>
            {"Edgware"}
          </text>
          <text x={748} y={140.5}>
            {"Burnt Oak"}
          </text>
          <text x={778} y={163}>
            {"Colindale"}
          </text>
          <text x={808} y={185.5}>
            {"Hendon Central"}
          </text>
          <text x={838} y={208}>
            {"Brent Cross"}
          </text>
          <text x={868} y={230.5}>
            {"Golders Green"}
          </text>
          <text x={898} y={253}>
            {"Hampstead"}
          </text>
          <text x={1010} y={298} className="original_map_svg__mid">
            {"Belsize"}
            <tspan x={1035} dy={0} />
            <tspan x={1010} dy={13}>
              {"Park"}
            </tspan>
          </text>
          <text x={1090} y={298} className="original_map_svg__mid">
            {"Chalk"}
            <tspan x={1111} dy={0} />
            <tspan x={1090} dy={13}>
              {"Farm"}
            </tspan>
          </text>
          <text x={913} y={107} className="original_map_svg__mid">
            {"Mill Hill East"}
          </text>
          <text x={864} y={-4}>
            {"High Barnet"}
          </text>
          <text x={894} y={18.5}>
            {"Totteridge & Whetstone"}
          </text>
          <text x={924} y={41}>
            {"Woodside Park"}
          </text>
          <text x={954} y={63.5}>
            {"West Finchley"}
          </text>
          <text x={994} y={93.5}>
            {"Finchley Central"}
          </text>
          <text x={1024} y={116}>
            {"East Finchley"}
          </text>
          <text x={1054} y={138.5}>
            {"Highgate"}
          </text>
          <text x={1116} y={187.5}>
            {"Tufnell Park"}
          </text>
          <text x={1213} y={325}>
            {"Mornington "}
            <tspan x={1213} dy={13}>
              {"Crescent"}
            </tspan>
          </text>
          <text x={1175} y={450}>
            {"Goodge Street"}
          </text>
          <text x={1418} y={401} className="original_map_svg__end">
            {"Angel"}
          </text>
          <text x={1455} y={425} className="original_map_svg__end">
            {"Old Street"}
          </text>
          <text x={1491} y={730}>
            {"Borough"}
          </text>
          <text x={1376} y={875} className="original_map_svg__b">
            {"Kennington"}
          </text>
          <text x={1338.5} y={906.5}>
            {"Oval"}
          </text>
          <text x={1220.5} y={995}>
            {"Clapham Common"}
          </text>
          <text x={1190.5} y={1017.5}>
            {"Clapham South"}
          </text>
          <text x={1160.5} y={1040}>
            {"Balham"}
          </text>
          <text x={1130.5} y={1062.5}>
            {"Tooting Bec"}
          </text>
          <text x={1100.5} y={1085}>
            {"Tooting Broadway"}
          </text>
          <text x={1070.5} y={1107.5}>
            {"Colliers Wood"}
          </text>
          <text x={1040.5} y={1131.5}>
            {"South Wimbledon"}
          </text>
          <text x={990.5} y={1145.5} className="original_map_svg__end">
            {"Morden"}
          </text>
          <text x={1194.5} y={892.5} className="original_map_svg__end">
            {"Nine Elms"}
          </text>
          <text x={1125} y={927.25} className="original_map_svg__end">
            {"Battersea Power Station"}
          </text>
        </g>
        <g id="original_map_svg__stname_Piccadilly_line">
          <g className="original_map_svg__end">
            <text x={372} y={370}>
              {"South Harrow"}
            </text>
            <text x={372} y={430}>
              {"Sudbury Hill"}
            </text>
            <text x={372} y={490}>
              {"Sudbury Town"}
            </text>
            <text x={372} y={550}>
              {"Alperton"}
            </text>
            <text x={372} y={643} className="original_map_svg__b">
              {"Park Royal"}
            </text>
            <text x={372} y={670}>
              {"North Ealing"}
            </text>
          </g>
          <text x={30} y={983.5} className="original_map_svg__mid">
            {"Heathrow"}
            <tspan x={63} dy={0} />
            <tspan x={30} dy={13}>
              {"Terminal 5"}
            </tspan>
          </text>
          <text x={96} y={913} className="original_map_svg__end">
            {"Heathrow"}
            <tspan x={96} dy={13}>
              {" Terminals"}
              <tspan x={96} dy={13}>
                {" 2 & 3"}
              </tspan>
            </tspan>
          </text>
          <text x={170} y={956}>
            {"Hatton Cross"}
          </text>
          <text x={200} y={933.5}>
            {"Hounslow West"}
          </text>
          <text x={230} y={911}>
            {"Hounslow Central"}
          </text>
          <g className="original_map_svg__end">
            <text x={240} y={871.5}>
              {"Hounslow East"}
            </text>
            <text x={270} y={849}>
              {"Osterley"}
            </text>
            <text x={300} y={826.5}>
              {"Boston Manor"}
            </text>
            <text x={330} y={804}>
              {"Northfields"}
            </text>
            <text x={360} y={781.5}>
              {"South Ealing"}
            </text>
            <text x={1102.6} y={766}>
              {"Knightsbridge"}
            </text>
            <text x={1102.6} y={720}>
              {"Hyde Park"}
              <tspan x={1102.6} dy={13}>
                {" Corner"}
              </tspan>
            </text>
            <text x={1284} y={544}>
              <tspan className="original_map_svg__ul">{"Covent"}</tspan>
              <tspan x={1284} dy={13}>
                <tspan className="original_map_svg__ul">{"Garden"}</tspan>
              </tspan>
            </text>
          </g>
          <text x={1302} y={445}>
            {"Russell "}
            <tspan x={1302} dy={13}>
              {"Square"}
            </tspan>
          </text>
          <text x={1302} y={278}>
            {"Caledonian Road"}
          </text>
          <g className="original_map_svg__end">
            <text x={1326} y={229}>
              {"Holloway Road"}
            </text>
            <text x={1356} y={206.5}>
              {"Arsenal"}
            </text>
            <text x={1370.5} y={160}>
              {"Manor House"}
            </text>
            <text x={1326} y={84.5}>
              {"Turnpike Lane"}
            </text>
            <text x={1296} y={62}>
              {"Wood Green"}
            </text>
            <text x={1266} y={39.5}>
              {"Bounds Green"}
            </text>
            <text x={1236} y={17}>
              {"Arnos Grove"}
            </text>
            <text x={1206} y={-5.5}>
              {"Southgate"}
            </text>
            <text x={1176} y={-28}>
              {"Oakwood"}
            </text>
            <text x={1146} y={-50.5}>
              {"Cockfosters"}
            </text>
          </g>
        </g>
        <g id="original_map_svg__stname_Victoria_line">
          <text x={1530} y={129} className="original_map_svg__mid">
            {"Tottenham Hale"}
          </text>
          <text x={1216} y={817.5}>
            {"Pimlico"}
          </text>
          <text x={1246} y={857.5}>
            {"Vauxhall"}
          </text>
          <text x={1317} y={958}>
            {"Brixton"}
          </text>
        </g>
        <g id="original_map_svg__stname_Docklands_Light_Railway">
          <text x={1847} y={572} className="original_map_svg__b">
            {"Poplar"}
          </text>
          <g className="original_map_svg__mid">
            <text x={1747} y={602}>
              {"Limehouse"}
            </text>
            <text x={1800} y={568}>
              {"Westferry"}
            </text>
            <text x={1940} y={602}>
              {"Blackwall"}
            </text>
            <text x={1980} y={570}>
              {"East India"}
            </text>
            <text x={2135} y={555}>
              {"Royal"}
              <tspan x={2156} dy={0} />
              <tspan x={2135} dy={13}>
                {"Victoria"}
              </tspan>
            </text>
            <text x={2225} y={555}>
              {"Prince"}
              <tspan x={2248} dy={0} />
              <tspan x={2225} dy={13}>
                {"Regent"}
              </tspan>
            </text>
            <text x={2270} y={602}>
              {"Royal"}
              <tspan x={2291} dy={0} />
              <tspan x={2270} dy={13}>
                {"Albert"}
              </tspan>
            </text>
            <text x={2315} y={568}>
              {"Beckton Park"}
            </text>
            <text x={2360} y={602}>
              {"Cyprus"}
            </text>
          </g>
          <text x={2378} y={543} className="original_map_svg__end">
            {"Gallions Reach"}
          </text>
          <text x={2378} y={513} className="original_map_svg__end">
            {"Beckton"}
          </text>
          <text x={1946} y={384}>
            {"Pudding "}
            <tspan x={1946} dy={13}>
              {"Mill Lane"}
            </tspan>
          </text>
          <text x={1912} y={488}>
            {"Devons Road"}
          </text>
          <text x={1912} y={514}>
            {"Langdon Park"}
          </text>
          <text x={1912} y={540}>
            {"All Saints"}
          </text>
          <g className="original_map_svg__end">
            <text x={1868} y={690}>
              {"South Quay"}
            </text>
            <text x={1868} y={720}>
              {"Crossharbour"}
            </text>
            <text x={1868} y={750}>
              {"Mudchute"}
            </text>
            <text x={1868} y={780}>
              {"Island Gardens"}
            </text>
          </g>
          <text x={1892} y={803}>
            {"Cutty Sark for "}
            <tspan x={1892} dy={15}>
              {"Maritime Greenwich"}
            </tspan>
          </text>
          <text x={1892} y={840}>
            {"Greenwich"}
          </text>
          <text x={1892} y={870}>
            {"Deptford Bridge"}
          </text>
          <text x={1892} y={900}>
            {"Elverson Road"}
          </text>
          <text x={1892} y={930}>
            {"Lewisham"}
          </text>
          <text x={1938} y={266} className="original_map_svg__end">
            {"Stratford"}
            <tspan x={1938} dy={13}>
              {" International"}
            </tspan>
          </text>
          <text x={2027.5} y={344}>
            {"Stratford "}
            <tspan x={2027.5} dy={13}>
              {"High Street"}
            </tspan>
          </text>
          <text x={2048} y={388}>
            {"Abbey "}
            <tspan x={2048} dy={15}>
              {"Road"}
            </tspan>
          </text>
          <text x={2048} y={510}>
            {"Star Lane"}
          </text>
          <g className="original_map_svg__end">
            <text x={2082} y={610.5}>
              {"West"}
              <tspan x={2099} dy={13}>
                {" Silvertown"}
              </tspan>
            </text>
            <text x={2122} y={643.5}>
              {"Pontoon Dock"}
            </text>
            <text x={2162} y={667.5}>
              {"London City"}
              <tspan x={2162} dy={13}>
                {" Airport"}
              </tspan>
            </text>
            <text x={2202} y={703.5}>
              {"King George V"}
            </text>
          </g>
        </g>
        <g id="original_map_svg__stname_Watford_DC_Line" opacity={1}>
          <text x={546} y={20}>
            {"Watford Junction"}
          </text>
          <text x={546} y={50}>
            {"Watford High Street"}
          </text>
          <text x={546} y={95}>
            {"Bushey"}
          </text>
          <text x={546} y={131}>
            {"Carpenders Park"}
          </text>
          <text x={546} y={167}>
            {"Hatch End"}
          </text>
          <text x={546} y={197}>
            {"Headstone "}
            <tspan x={546} dy={13}>
              {"Lane"}
            </tspan>
          </text>
          <g className="original_map_svg__end">
            <text x={852} y={480}>
              {"Kilburn"}
              <tspan x={852} dy={13}>
                {" High Road"}
              </tspan>
            </text>
            <text x={914} y={446.5}>
              {"South Hampstead"}
            </text>
          </g>
        </g>
        <g id="original_map_svg__stname_West_London_Line" opacity={1}>
          <text x={910} y={949} className="original_map_svg__mid">
            {"Imperial"}
            <tspan x={940} dy={0} />
            <tspan x={910} dy={15}>
              {"Wharf"}
            </tspan>
          </text>
          <text
            x={1098.333}
            y={999}
            className="original_map_svg__mid original_map_svg__b"
          >
            {"Clapham"}
            <tspan x={1130} dy={0} />
            <tspan x={1098.333} dy={13}>
              {"Junction"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_North_London_Line" opacity={1}>
          <text x={411} y={883.9}>
            {"Kew Gardens"}
          </text>
          <text x={520.5} y={795}>
            {"South Acton"}
          </text>
          <text x={555} y={763}>
            {"Acton "}
            <tspan x={555} dy={13}>
              {"Central"}
            </tspan>
          </text>
          <g className="original_map_svg__end">
            <text x={738.5} y={418.5}>
              {"Kensal Rise"}
            </text>
            <text x={772.5} y={393}>
              {"Brondesbury Park"}
            </text>
            <text x={806.5} y={367.5} className="original_map_svg__b">
              {"Brondesbury"}
            </text>
          </g>
          <text x={991.5} y={270}>
            {"Hampstead Heath"}
          </text>
          <text
            x={1047}
            y={204}
            className="original_map_svg__b original_map_svg__end"
          >
            {"Gospel Oak"}
          </text>
          <text x={1296} y={312}>
            {"Caledonian Road "}
            <tspan x={1296} dy={13}>
              {"& Barnsbury"}
            </tspan>
          </text>
          <text
            x={1538}
            y={317}
            className="original_map_svg__b original_map_svg__end"
          >
            {"Canonbury"}
          </text>
          <g className="original_map_svg__mid">
            <text x={1760} y={312}>
              {"Homerton"}
            </text>
            <text x={1840} y={312}>
              {"Hackney"}
              <tspan x={1870} dy={0} />
              <tspan x={1840} dy={15}>
                {"Wick"}
              </tspan>
            </text>
          </g>
        </g>
        <g
          id="original_map_svg__stname_Gospel_Oak_to_Barking_Line"
          className="original_map_svg__mid"
        >
          <text x={1206} y={123}>
            {"Crouch Hill"}
          </text>
          <text x={1326} y={110}>
            {"Harringay"}
            <tspan x={1360} dy={0} />
            <tspan x={1326} dy={13}>
              {"Green Lanes"}
            </tspan>
          </text>
          <text x={1860} y={155}>
            {"Leyton"}
            <tspan x={1886} dy={0} />
            <tspan x={1860} dy={13}>
              {"Midland Road"}
            </tspan>
          </text>
          <text x={2280} y={401} className="original_map_svg__x">
            {"Renwick"}
            <tspan x={2310} dy={0} />
            <tspan x={2280} dy={15}>
              {"Road"}
            </tspan>
          </text>
          <text x={2390} y={401} className="original_map_svg__x">
            {"Barking"}
            <tspan x={2420} dy={0} />
            <tspan x={2390} dy={15}>
              {"Riverside"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_East_London_Line">
          <g className="original_map_svg__end">
            <text x={1578.625} y={377.5} className="original_map_svg__end">
              {"Haggerston"}
            </text>
            <text x={1596.625} y={401} className="original_map_svg__end">
              {"Hoxton"}
            </text>
            <text x={1614.625} y={419.5}>
              {"Shoreditch"}
              <tspan x={1614.625} dy={13}>
                {" High Street"}
              </tspan>
            </text>
          </g>
          <text x={1712} y={622.5}>
            {"Wapping"}
          </text>
          <g className="original_map_svg__end">
            <text x={1688} y={652.5}>
              {"Rotherhithe"}
            </text>
            <text x={1688} y={730}>
              {"Surrey Quays"}
            </text>
            <text x={1634} y={818.5} className="original_map_svg__x">
              {"Surrey Canal"}
            </text>
            <text x={1574} y={850.5}>
              {"Queens Road"}
              <tspan x={1574} dy={13}>
                {" Peckham"}
              </tspan>
            </text>
            <text x={1514} y={908.5}>
              {"Peckham Rye"}
            </text>
            <text x={1098} y={946}>
              {"Battersea Park"}
            </text>
          </g>
          <g className="original_map_svg__mid">
            <text x={1440} y={964}>
              {"Denmark Hill"}
            </text>
            <text x={1180} y={964}>
              {"Wandsworth"}
              <tspan x={1162} dy={0} />
              <tspan x={1180} dy={13}>
                {"Road"}
              </tspan>
            </text>
          </g>
          <text x={1739} y={835.5} className="original_map_svg__b">
            {"New Cross"}
          </text>
          <text
            x={1690}
            y={852}
            className="original_map_svg__end original_map_svg__b"
          >
            {"New"}
            <tspan x={1690} dy={13}>
              {" Cross Gate"}
            </tspan>
          </text>
          <text x={1688} y={887} className="original_map_svg__end">
            {"Brockley"}
          </text>
          <text x={1694} y={927.5}>
            {"Honor Oak Park"}
          </text>
          <text x={1654} y={957.5}>
            {"Forest Hill"}
          </text>
          <text x={1614} y={987.5}>
            {"Sydenham"}
          </text>
          <text x={1502} y={1009} className="original_map_svg__end">
            {"Crystal Palace"}
          </text>
          <text x={1534} y={1047.5}>
            {"Penge West"}
          </text>
          <text x={1494} y={1077.5}>
            {"Anerley"}
          </text>
          <text x={1454} y={1107.5}>
            {"Norwood Junction"}
          </text>
          <text
            x={1394}
            y={1120.5}
            className="original_map_svg__end original_map_svg__b"
          >
            {"West Croydon"}
          </text>
        </g>
        <g id="original_map_svg__stname_Seven_Sisters_Line">
          <g className="original_map_svg__end">
            <text x={1391} y={-61.5}>
              {"Enfield Town"}
            </text>
            <text x={1391} y={-31.5}>
              {"Bush Hill Park"}
            </text>
          </g>
          <text x={1519} y={-82.5}>
            {"Cheshunt"}
          </text>
          <text x={1489} y={-60}>
            {"Theobalds Grove"}
          </text>
          <text x={1459} y={-37.5}>
            {"Turkey Street"}
          </text>
          <text x={1429} y={-15}>
            {"Southbury"}
          </text>
          <text x={1415} y={8.5}>
            {"Edmonton Green"}
          </text>
          <text x={1415} y={31}>
            {"Silver Street"}
          </text>
          <text x={1415} y={53.5}>
            {"White Hart Lane"}
          </text>
          <text x={1415} y={76}>
            {"Bruce Grove"}
          </text>
          <g className="original_map_svg__end">
            <text x={1517} y={197.5}>
              {"Stamford Hill"}
            </text>
            <text x={1547} y={220}>
              {"Stoke Newington"}
            </text>
            <text x={1577} y={242.5}>
              {"Rectory Road"}
            </text>
          </g>
          <text x={1647} y={355} className="original_map_svg__ul">
            {"London Fields"}
          </text>
          <text x={1647} y={390} className="original_map_svg__ul">
            {"Cambridge Heath"}
          </text>
          <text x={1622} y={492}>
            <tspan className="original_map_svg__ul">{"Bethnal"}</tspan>
            <tspan x={1622} dy={13} className="original_map_svg__ul">
              {"Green"}
            </tspan>
          </text>
        </g>
        <g id="original_map_svg__stname_Chingford_Line">
          <text x={1694} y={23}>
            {"Chingford"}
          </text>
          <text x={1694} y={53}>
            {"Highams Park"}
          </text>
          <text x={1694} y={83}>
            {"Wood Street"}
          </text>
          <text x={1670} y={170} className="original_map_svg__end">
            {"St. James Street"}
          </text>
          <text x={1670} y={210} className="original_map_svg__end">
            {"Clapton"}
          </text>
        </g>
        <text
          x={2320.25}
          y={157.5}
          className="original_map_svg__end"
          id="original_map_svg__stname_Romford_to_Upminster_Line"
        >
          {"Emerson Park"}
        </text>
        <g id="original_map_svg__stname_elizabeth">
          <text x={116} y={924}>
            <tspan className="original_map_svg__ul">{"Heathrow"}</tspan>
            <tspan x={116} dy={13} className="original_map_svg__ul">
              {"Central"}
            </tspan>
          </text>
          <text x={12} y={480}>
            {"Reading"}
          </text>
          <text x={12} y={510}>
            {"Twyford"}
          </text>
          <text x={12} y={540}>
            {"Maidenhead"}
          </text>
          <text x={12} y={570}>
            {"Taplow"}
          </text>
          <text x={12} y={600}>
            {"Burnham"}
          </text>
          <text x={12} y={630}>
            {"Slough"}
          </text>
          <text x={12} y={660}>
            {"Langley"}
          </text>
          <text x={12} y={690}>
            {"Iver"}
          </text>
          <g className="original_map_svg__mid">
            <text x={86} y={691.9}>
              {"West"}
              <tspan x={106} dy={0} />
              <tspan x={86} dy={15}>
                {"Drayton"}
              </tspan>
            </text>
            <text x={151} y={691.9}>
              {"Hayes &"}
              <tspan x={181} dy={0} />
              <tspan x={151} dy={15}>
                {"Harlington"}
              </tspan>
            </text>
            <text x={200} y={740.9}>
              {"Southall"}
            </text>
            <text x={240} y={706.9}>
              {"Hanwell"}
            </text>
            <text x={294.667} y={740.9}>
              {"West"}
              <tspan x={318} dy={0} />
              <tspan x={294.667} dy={13}>
                {"Ealing"}
              </tspan>
            </text>
          </g>
          <text x={445} y={741.9}>
            {"Acton Main Line"}
          </text>
          <text x={2365} y={705}>
            {"Abbey "}
            <tspan x={2365} dy={15}>
              {"Wood"}
            </tspan>
          </text>
          <text x={2018} y={316.5}>
            {"Maryland"}
          </text>
          <g className="original_map_svg__end">
            <text x={2127} y={199.5}>
              {"Ilford"}
            </text>
            <text x={2157} y={175}>
              {"Seven Kings"}
            </text>
            <text x={2187} y={152.5}>
              {"Goodmayes"}
            </text>
            <text x={2217} y={130}>
              {"Chadwell Heath"}
            </text>
            <text x={2247} y={107.5} className="original_map_svg__b">
              {"Romford"}
            </text>
            <text x={2277} y={85}>
              {"Gidea Park"}
            </text>
            <text x={2307} y={62.5}>
              {"Harold Wood"}
            </text>
            <text x={2337} y={40}>
              {"Brentwood"}
            </text>
            <text x={2367} y={17.5}>
              {"Shenfield"}
            </text>
          </g>
        </g>
        <g
          style={{
            fontSize: 11,
            fill: "#000",
          }}
        >
          <g id="original_map_svg__stname_Tramlink">
            <text x={1155} y={1167} className="original_map_svg__mid">
              {"Mitcham"}
              <tspan x={1177} dy={0} />
              <tspan x={1155} dy={11}>
                {"Junction"}
              </tspan>
            </text>
            <text x={1465} y={1167} className="original_map_svg__mid">
              {"East"}
              <tspan x={1478} dy={0} />
              <tspan x={1465} dy={11}>
                {"Croydon"}
              </tspan>
            </text>
            <text x={1663.5} y={1071.5}>
              {"Birkbeck"}
            </text>
            <text x={1725.5} y={1015.5}>
              {"Beckenham "}
              <tspan x={1725.5} dy={11}>
                {"Junction"}
              </tspan>
            </text>
            <text x={1657} y={1093.5}>
              {"Elmers End"}
            </text>
            <text x={1750} y={1149}>
              {"New "}
              <tspan x={1750} dy={11}>
                {"Addington"}
              </tspan>
            </text>
          </g>
          <g
            id="original_map_svg__Heathrow_rail_tunnel_special_fares"
            className="original_map_svg__end"
          >
            <text
              transform="translate(100 820)"
              className="original_map_svg__felizabeth"
            >
              {"Higher fares apply"}
              <tspan x={0} dy={13}>
                {" on all trips via"}
                <tspan x={0} dy={13}>
                  {" this section of tracks."}
                </tspan>
              </tspan>
            </text>
          </g>
          <text transform="translate(0 1040)">
            <tspan x={-7} dy={0}>
              {"* "}
            </tspan>
            <tspan x={0} dy={0}>
              {
                "Passengers can travel between all rail stations within Heathrow "
              }
              <tspan x={0} dy={13}>
                {
                  "Airport free of charge with an Oyster card or contactless card, "
                }
                <tspan x={0} dy={13}>
                  {
                    "regardless of London Underground, Elizabeth line or Heathrow Express. "
                  }
                  <tspan x={0} dy={20}>
                    {
                      "Passengers may also use Hatton Cross for changing trains "
                    }
                    <tspan x={0} dy={13}>
                      {"back to Heathrow Airport without exiting the station."}
                    </tspan>
                  </tspan>
                </tspan>
              </tspan>
            </tspan>
          </text>
          <g className="original_map_svg__b">
            <text
              transform="matrix(.8 .6 -.6 .8 808 543)"
              className="original_map_svg__fbakerloo"
            >
              {"Bakerloo line"}
            </text>
            <text
              x={1420}
              y={758}
              className="original_map_svg__fbakerloo original_map_svg__mid"
            >
              {"Bakerloo line"}
            </text>
            <text
              transform="matrix(.8 .6 -.6 .8 415 642)"
              className="original_map_svg__fcentral"
            >
              {"Central line"}
            </text>
            <text
              transform="matrix(.8 -.6 .6 .8 1050 662)"
              className="original_map_svg__fcentral"
            >
              {"Central line"}
            </text>
            <text
              transform="rotate(53.13 712.5 2125.004)"
              className="original_map_svg__fcentral original_map_svg__end"
            >
              {"Central line"}
            </text>
            <g className="original_map_svg__fcircle">
              <text transform="matrix(.8 -.6 .6 .8 714 665)">
                {"Circle line"}
              </text>
              <text
                transform="rotate(-65 977.053 -374.325)"
                className="original_map_svg__mid"
              >
                {"Circle"}
              </text>
              <text
                transform="rotate(-51 1133.767 -643.102)"
                className="original_map_svg__mid"
              >
                {"line"}
              </text>
            </g>
            <g className="original_map_svg__fdistrict">
              <text x={908} y={878}>
                {"District line"}
              </text>
              <g className="original_map_svg__end">
                <text transform="matrix(.8 -.6 .6 .8 484 829)">
                  {"District line"}
                </text>
                <text transform="matrix(.8 -.6 .6 .8 2240 285)">
                  {"District line"}
                </text>
                <text transform="rotate(53.33 -623.237 1479.932)">
                  {"District line"}
                </text>
              </g>
              <text
                transform="rotate(77 -44.2 924.296)"
                className="original_map_svg__mid"
              >
                {"District"}
              </text>
              <text
                transform="rotate(65 -182.003 1083.725)"
                className="original_map_svg__mid"
              >
                {"line"}
              </text>
            </g>
            <text
              transform="rotate(90 -108.5 728.5)"
              className="original_map_svg__fhnc original_map_svg__end"
            >
              {"Hammersmith"}
              <tspan x={0} dy={10}>
                {" & City line"}
              </tspan>
            </text>
            <text
              transform="matrix(.8 -.6 .6 .8 2144 350)"
              cursor="help"
              className="original_map_svg__fhnc original_map_svg__end"
            >
              {"H&C line"}
            </text>
            <text x={780} y={301.5} className="original_map_svg__fjubilee">
              {"Jubilee line"}
            </text>
            <text
              transform="matrix(.6 .8 -.8 .6 1163 674)"
              className="original_map_svg__fjubilee"
            >
              {"Jubilee line"}
            </text>
            <text
              transform="rotate(53.13 646 2149.504)"
              className="original_map_svg__fjubilee"
            >
              {"Jubilee line"}
            </text>
            <text x={780} y={284} className="original_map_svg__fmetropolitan">
              {"Metropolitan line"}
            </text>
            <g className="original_map_svg__fnorthern">
              <text transform="rotate(36.87 322.5 1527.496)">
                {"Northern line"}
              </text>
              <text transform="rotate(36.87 90.5 1286.496)">
                {"Northern line"}
              </text>
              <text transform="rotate(53.33 62.355 1469.767) scale(.9 1)">
                {"Northern line"}
              </text>
              <text transform="matrix(.8 -.6 .6 .8 1413 846)">
                {"Northern line"}
              </text>
            </g>
            <g className="original_map_svg__fpiccadilly">
              <text
                transform="matrix(.8 -.6 .6 .8 324 836)"
                className="original_map_svg__end"
              >
                {"Piccadilly line"}
              </text>
              <text transform="rotate(90 -54.5 445.5)">
                {"Piccadilly line"}
              </text>
              <text transform="rotate(90 208 913)">{"Piccadilly line"}</text>
              <text
                transform="rotate(36.87 552.5 2102.494)"
                className="original_map_svg__end"
              >
                {"Piccadilly line"}
              </text>
            </g>
            <text x={1612} y={121} className="original_map_svg__fvictoria">
              {"Victoria line"}
            </text>
            <text
              transform="rotate(90 229.5 911.5)"
              className="original_map_svg__fvictoria"
            >
              {"Victoria line"}
            </text>
            <text
              transform="matrix(.8 -.6 .6 .8 1361 676)"
              className="original_map_svg__fwnc"
              cursor="help"
            >
              {"Waterloo & City line"}
            </text>
            <g className="original_map_svg__fdlr">
              <g cursor="help">
                <text x={1645} y={594}>
                  {"DLR"}
                </text>
                <text transform="rotate(53.13 705.5 2098.504)">{"DLR"}</text>
                <text transform="rotate(36.87 88.003 3633.99)">{"DLR"}</text>
              </g>
              <text transform="matrix(0 .9 -1 0 1887 665)">
                {"Docklands Light Railway"}
              </text>
            </g>
            <g className="original_map_svg__fog">
              <text transform="rotate(90 188 334)">{"Overground"}</text>
              <text transform="matrix(.8 -.6 .6 .8 597 527)">
                {"Overground"}
              </text>
              <text x={1612} y={146}>
                {"Overground"}
              </text>
              <text x={1800} y={284} className="original_map_svg__mid">
                {"Overground"}
              </text>
              <text x={1135} y={373} className="original_map_svg__end">
                {"Overground"}
              </text>
              <text
                transform="rotate(53.13 743 2318.505)"
                className="original_map_svg__end"
              >
                {"Overground"}
              </text>
              <text transform="rotate(90 646.5 976.5)">{"Overground"}</text>
              <text transform="rotate(53.13 1051.5 2365.505)">
                {"Overground"}
              </text>
              <text x={990} y={989} className="original_map_svg__mid">
                {"Overground"}
              </text>
              <text transform="matrix(.8 -.6 .6 .8 1545 1034)">
                {"Overground"}
              </text>
              <text x={2335} y={442} className="original_map_svg__mid">
                {"2022"}
              </text>
            </g>
            <g className="original_map_svg__felizabeth">
              <text
                transform="matrix(.76 -.57 .6 .8 1111 560)"
                className="original_map_svg__mid"
              >
                {"Elizabeth "}
                <tspan x={0} dy={12}>
                  {"line"}
                </tspan>
              </text>
              <text
                transform="rotate(36.87 147.503 3752.49)"
                className="original_map_svg__end"
              >
                {"Elizabeth line"}
              </text>
              <text
                transform="rotate(36.87 147.503 3752.49)"
                className="original_map_svg__end"
              >
                {"Elizabeth line"}
              </text>
              <text
                transform="matrix(.8 -.6 .6 .8 1845 542)"
                className="original_map_svg__mid"
              >
                {"2022"}
              </text>
            </g>
            <g className="original_map_svg__felizabeth">
              <text x={100} y={733} className="original_map_svg__end">
                {"Elizabeth line"}
                <tspan x={100} dy={12}>
                  {" (Reading section)"}
                </tspan>
              </text>
              <text transform="rotate(90 -318 441)">
                {"Elizabeth line "}
                <tspan x={0} dy={12}>
                  {"(Heathrow section)"}
                </tspan>
              </text>
              <text transform="matrix(.8 -.6 .6 .8 2138 219)">
                {"Elizabeth line "}
                <tspan x={0} dy={12}>
                  {"(Shenfield section)"}
                </tspan>
              </text>
            </g>
            <text
              x={1230}
              y={1145}
              className="original_map_svg__ftl original_map_svg__mid"
            >
              {"Tramlink"}
            </text>
          </g>
        </g>
      </g>
    </g>
    <path
      id="original_map_svg__higher_fares_for_Heathrow_Rail_Tunnel"
      style={{
        fill: "none",
        strokeWidth: 1,
      }}
      className="original_map_svg__selizabeth"
      d="M90 764h10M90 904h10m-5-140v47m0 45v48m-5-135 5-5 5 5M90 899l5 5 5-5"
    />
    <g id="original_map_svg__title_header">
      <path
        style={{
          stroke: "none",
          fill: "#009",
        }}
        d="M-10 0H0v27h982q15 0 27-9l12-9q12-9 27-9z"
        transform="translate(-40 -120)"
      />
      <text
        x={7}
        y={20}
        className="original_map_svg__b"
        style={{
          fontSize: 20,
          fill: "#fff",
        }}
        transform="translate(-40 -120)"
      >
        {
          "Route map of London Underground, London Overground, Docklands Light Railway and Elizabeth line"
        }
      </text>
    </g>
  </svg>
);

export default SvgOriginalMap;

