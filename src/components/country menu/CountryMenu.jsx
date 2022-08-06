import React, {useContext, useState} from "react";
import "./CountryMenu.css"
import ThemeContext from "../../store/theme-context"
import CountryCard from "../country card/CountryCard.jsx"
import axios from "axios"


function CountryMenu(){
    const currentTheme = useContext(ThemeContext)
    const [countries, setCountries] = useState([])
    axios.get("https://restcountries.com/v3.1/all").then((res) => {setCountries(res.data)})    

    return(
        <div className="countryMenu" style={{backgroundColor: currentTheme.background}}>
            {countries.map((elem, index) => {
                return (<CountryCard key={index} countryFlag={elem.flags.svg} countryName={elem.name.common} countryPop={elem.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} countryRegion={elem.region} countryCapital={elem.capital}/>)
            })}
        </div>
    )
}

export default CountryMenu