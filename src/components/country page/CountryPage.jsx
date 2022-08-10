import React, {useContext, useState} from "react";
import "./CountryPage.css"
import { Routes, Route, Link, useParams } from "react-router-dom"
import ThemeContext from "../../store/theme-context";
import arrow from "../../assets/left-arrow-svgrepo-com.svg"

function CountryPage(props){

    let {country} = useParams()
    let currentStyle = useContext(ThemeContext)
    const realCountry = getRealCountry()
    console.log(realCountry)

    function getLanguages(){
        let answer = ""
        let countries = ""
        Object.entries(realCountry.languages).map((elem) => {
            countries = countries + " " + elem[1]
            })
        answer = countries.trim().split(" ").join(", ")
        return answer
    }

    function getRealCountry(){
        for(let i = 0; i < props.countryList.length; i++){
            if (props.countryList[i].cca3 === country){
                return props.countryList[i]
            }
        }
    }

    function getBorderCountries(){

    }

    return(
        <div className="countryPage">
            <div className="middleSectionCountries">
                <Link to="/" className="backButton" style={{backgroundColor: currentStyle.elementColor, color: currentStyle.text}}>{<img src={arrow}/>}Back</Link>
            </div>
            <div className="countryBoxes">
                <div className="leftBox">
                    <img src={realCountry.flags.svg} alt="" />
                </div>
                <div className="rightBox">
                    <h4 style={{color: currentStyle.text}}>{realCountry.name.common}</h4>
                    <div className="infoSection">
                        <div className="leftBoxInfo">
                            <p style={{color: currentStyle.text}}>
                                <span className="bold">Native Name: </span>{Object.entries(realCountry.name.nativeName)[Object.entries(realCountry.name.nativeName).length - 1][1].official}
                                <br />
                                <br />
                                <span className="bold">Population: </span>{realCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                <br />
                                <br />
                                <span className="bold">Region: </span>{realCountry.region}
                                <br />
                                <br />
                                <span className="bold">Sub Region: </span>{realCountry.subregion}
                                <br />
                                <br />
                                <span className="bold">Capital: </span>{realCountry.capital[0]}
                                </p>
                        </div>
                        <div className="rightBoxInfo">
                            <p style={{color: currentStyle.text}}>
                                <span className="bold">Top Level Domain: </span>{realCountry.tld[0]}
                                <br />
                                <br />
                                <span className="bold">Currencies: </span>{Object.entries(Object.entries(realCountry.currencies)[0])[1][1].name}
                                <br />
                                <br />
                                <span className="bold">Languages: </span>{getLanguages()}
                            </p>
                        </div>
                    </div>
                    <div className="borderCountries">
                        <p style={{color: currentStyle.text}}><span className="bold">Border Countries: </span></p>
                        <Link to="/FRA" className="adjacentCountryButton">France</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
        
}

export default CountryPage