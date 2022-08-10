import React, {useContext, useState} from "react";
import "./CountryPage.css"
import { Routes, Route, Link, useParams } from "react-router-dom"
import ThemeContext from "../../store/theme-context";
import arrow from "../../assets/left-arrow-svgrepo-com.svg"

function CountryPage(props){

    let {country} = useParams()
    let currentStyle = useContext(ThemeContext)
    console.log()

    function getLanguages(){
        let answer = ""
        let countries = ""
        Object.entries(props.countryList[country].languages).map((elem) => {
            countries = countries + " " + elem[1]
            })
        answer = countries.trim().split(" ").join(", ")
        return answer
    }

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
                    <h4 style={{color: currentStyle.text}}>{props.countryList[country].name.common}</h4>
                    <div className="infoSection">
                        <div className="leftBoxInfo">
                            <p style={{color: currentStyle.text}}>
                                <span className="bold">Native Name: </span>{Object.entries(props.countryList[country].name.nativeName)[Object.entries(props.countryList[country].name.nativeName).length - 1][1].official}
                                <br />
                                <br />
                                <span className="bold">Population: </span>{props.countryList[country].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                <br />
                                <br />
                                <span className="bold">Region: </span>{props.countryList[country].region}
                                <br />
                                <br />
                                <span className="bold">Sub Region: </span>{props.countryList[country].subregion}
                                <br />
                                <br />
                                <span className="bold">Capital: </span>{props.countryList[country].capital[0]}
                                </p>
                        </div>
                        <div className="rightBoxInfo">
                            <p style={{color: currentStyle.text}}>
                                <span className="bold">Top Level Domain: </span>{props.countryList[country].tld[0]}
                                <br />
                                <br />
                                <span className="bold">Currencies: </span>{Object.entries(Object.entries(props.countryList[country].currencies)[0])[1][1].name}
                                <br />
                                <br />
                                <span className="bold">Languages: </span>{getLanguages()}
                            </p>
                        </div>
                    </div>
                    <div className="borderCountries">
                        <p style={{color: currentStyle.text}}>Border Countries:</p>
                        <Link to="/20" className="adjacentCountryButton">France</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
        
}

export default CountryPage