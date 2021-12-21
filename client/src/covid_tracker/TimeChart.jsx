import React, { useRef, useEffect, useState } from "react";

function TimeChart({ data, coviddata, property}) {
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        console.log(data);
        
        //var coviddata_res = Object.entries(coviddata);
        //console.log(coviddata_res);

        /*
        var cov_res = [];
        for (const country of coviddata_res) {
            const name = country[0];
            console.log(name);
            const Datum = country[1].data[5][property];
            console.log(Datum);
        }
        */


        var cov_res = Object.entries(coviddata).map(([k, v]) => (
            {
                Label: k,
                Datum: (function () {
                    for (const day of v.data) {
                        // WE now don't need to filter dates
                    }
                    return -100;
                })()
            }
        ));


        var copy = data;

        for (const i of Object.entries(copy.features)) {
            //console.log(i[1].properties.adm0_a3);
            var name = "";
            var num = -100;

            // TODO: LOOP THROUGH COVIDDATA
            for (const j of cov_res) {
                name = j.Label;
                if (name === i[1].properties.adm0_a3) {
                    //console.log(name)
                    if (j.Datum) {
                        num = j.Datum;
                    }
                    break;
                }
            }
            i[1].properties.num = num;
        }

        

    }, [data, property, selectedCountry]);

    return (
        <div style={{ marginBottom: "2rem" }}>
            <svg className="geochart"></svg>
        </div>
    )
}

export default TimeChart;