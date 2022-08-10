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
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState("Filter By Region")

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => { setCountries(res.data); console.log("running") })
    }, [])

    function displayCountries(){
        const regex = new RegExp(input.toLowerCase())
        let answer = []

        for(let i = 0; i < countries.length; i++){
            if(countries[i].name.common.toLowerCase().match(regex)){
                if(filter === "Filter By Region"){
                    answer.push(<Link to={`/${countries[i].cca3}`} key={i}><CountryCard key={i} countryFlag={countries[i].flags.svg} countryName={countries[i].name.common} countryPop={countries[i].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} countryRegion={countries[i].region} countryCapital={countries[i].capital} /></Link>)
                }else if(filter !== ""){
                    if(countries[i].region === filter){
                        answer.push(<Link to={`/${countries[i].cca3}`} key={i}><CountryCard key={i} countryFlag={countries[i].flags.svg} countryName={countries[i].name.common} countryPop={countries[i].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} countryRegion={countries[i].region} countryCapital={countries[i].capital} /></Link>)
                    }
                }
            }
        }
        return answer
    }

    return (
        <BrowserRouter>
            <div className="countryMenu" style={{ backgroundColor: currentTheme.background }}>
                <Routes>
                    <Route exact path="/" element={<><SearchBar setInput={setInput} filter={filter} setFilter={setFilter}/>
                    <div className="countryListFlex">{displayCountries()}</div></>} />
                    <Route path="/:country" element={<CountryPage countryList={countries}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default CountryMenu