import React, {useContext} from "react";
import "./CountryPage.css"
import { Routes, Route, Link, useParams } from "react-router-dom"
import ThemeContext from "../../store/theme-context";
import arrow from "../../assets/left-arrow-svgrepo-com.svg"

function CountryPage(props){

    let {country} = useParams()
    let currentStyle = useContext(ThemeContext)

    return(
        <div className="countryPage">
            <div className="middleSectionCountries">
                <Link to="/" className="backButton" style={{backgroundColor: currentStyle.elementColor, color: currentStyle.text}}>{<img src={arrow}/>}Back</Link>
            </div>
            <div className="countryBoxes">
                <div className="leftBox">
                    <img src={props.countryList[country].flags.svg} alt="" />
                </div>
                <div className="rightBox">
                    <h4>{props.countryList[country].name.common}</h4>
                </div>
            </div>
            
        </div>
    )
        
}

export default CountryPage