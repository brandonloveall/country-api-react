import React, { useContext } from "react";
import "./CountryCard.css"
import ThemeContext from "../../store/theme-context";

function CountryCard(props){
    const currentStyle = useContext(ThemeContext)

    return(
        <div className="countryCard">
            <div className="imgHolder" style={{backgroundColor: currentStyle.elementColor}}><img src={props.countryFlag} alt="" /></div>
            
            <div className="countryCardInfo" style={{backgroundColor: currentStyle.elementColor}}>
                <h4 style={{color: currentStyle.text}}>{props.countryName}</h4>
                <p style={{color: currentStyle.text}}>
                    <span className="bold">Population:</span> {props.countryPop}
                    <br />
                    <br />
                    <span className="bold">Region:</span> {props.countryRegion}
                    <br />
                    <br />
                    <span className="bold">Capital:</span> {props.countryCapital}
                </p>
            </div>
        </div>
    )
}

export default CountryCard