import React, { useContext, useState, useEffect } from "react";
import "./CountryMenu.css"
import ThemeContext from "../../store/theme-context"
import CountryCard from "../country card/CountryCard.jsx"
import axios from "axios"
import { Routes, Route, Link, useParams, BrowserRouter } from "react-router-dom"
import CountryPage from "../country page/CountryPage";
import SearchBar from "../search bar/SearchBar";

function CountryMenu() {
    const currentTheme = useContext(ThemeContext)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => { setCountries(res.data); console.log("running") })
    }, [])

    return (
        <BrowserRouter>
            <div className="countryMenu" style={{ backgroundColor: currentTheme.background }}>
                <Routes>
                    <Route exact path="/" element={<><SearchBar />
                    {countries.map((elem, index) => {return (<Link to={`/${elem.cca3}`} key={index}><CountryCard key={index} countryFlag={elem.flags.svg} countryName={elem.name.common} countryPop={elem.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} countryRegion={elem.region} countryCapital={elem.capital} /></Link>)})}</>} />
                    <Route path="/:country" element={<CountryPage countryList={countries}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default CountryMenu