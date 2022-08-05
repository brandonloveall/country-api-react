import React, {useContext, useState} from "react";
import "./SearchBar.css"
import glass from "../../assets/search-magnifier-magnifying-glass-svgrepo-com.svg"
import ThemeContext from "../../store/theme-context";
import FilterMenu from "../filter menu/FilterMenu.jsx"

function SearchBar(){
    const currentTheme = useContext(ThemeContext)

    return(
        <div className="middleSection" style={{backgroundColor: currentTheme.background}}>
            <div className="searchBarMain" style={{backgroundColor: currentTheme.elementColor}}>
                <img src={glass} alt="" />
                <input className={currentTheme.inputColor} type="text" placeholder="Search for a country..." style={{backgroundColor: currentTheme.elementColor}}/>
            </div>
            <FilterMenu />
        </div>
    )
}

export default SearchBar