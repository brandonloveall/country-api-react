import React, {useContext, useState} from "react";
import "./CountryPage.css"
import { Routes, Route, Link, useParams } from "react-router-dom"
import ThemeContext from "../../store/theme-context";
import arrow from "../../assets/left-arrow-svgrepo-com.svg"

function CountryPage(props){

    let {country} = useParams()
    let currentStyle = useContext(ThemeContext)
    const realCountry = getRealCountry()
    console.log(props.countryList[1].borders)

    function getLanguages(){
        let answer = ""
        let countries = ""
        Object.entries(realCountry.languages).map((elem) => {
            countries = countries + " " + elem[1]
            })
        answer = countries.trim().split(" ").join(", ")
        return answer
    }

    function getCurrencies(){
        let currencies = ""
        Object.entries(realCountry.currencies).map((elem, index) => {
                if(index === 0){
                    currencies = elem[1].name
                }else{
                    currencies = currencies + ", " + elem[1].name
                }
            })
        return currencies
    }

    function getRealCountry(){
        for(let i = 0; i < props.countryList.length; i++){
            if (props.countryList[i].cca3 === country){
                return props.countryList[i]
            }
        }
    }

    function getBorderCountries(){
        let answer = []
        if(realCountry.borders === undefined){
            return answer
        }
        for(let i = 0; i < realCountry.borders.length; i++){
            for(let j = 0; j < props.countryList.length; j++){
                
                if(props.countryList[j].cca3 === realCountry.borders[i]){
                    
                    answer.push(<div className="borderCountryButtonHolder"><Link to={`/${props.countryList[j].cca3}`} className="borderCountryButton" style={{backgroundColor: currentStyle.elementColor, color: currentStyle.text}}>{props.countryList[j].name.common}</Link></div>)
                }
            }
        }
        return answer
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
                                <span className="bold">Currencies: </span>{getCurrencies()}
                                <br />
                                <br />
                                <span className="bold">Languages: </span>{getLanguages()}
                            </p>
                        </div>
                    </div>
                    <div className="borderCountries">
                        <p style={{color: currentStyle.text}}><span className="bold">Border Countries: </span></p>
                        <div className="borderCountryButtons">{getBorderCountries()}</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
        
}

export default CountryPage