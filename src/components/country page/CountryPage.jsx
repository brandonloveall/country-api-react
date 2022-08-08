import React from "react";
import { useParams } from "react-router-dom";
import "./CountryPage.css"

function CountryPage(props){

    let {country} = useParams()

    console.log(props.countryList[country])
    return(
        <div className="countryPage">
            <div className="leftBox">
                <img src={props.countryList[country].flags.png} alt="" />
            </div>
            <div className="rightBox">{props.countryList.country}</div>
        </div>
    )
}

export default CountryPage