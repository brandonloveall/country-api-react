import React, {useContext, useState} from "react";
import "./SearchBar.css"
import glass from "../../assets/search-magnifier-magnifying-glass-svgrepo-com.svg"
import ThemeContext from "../../store/theme-context";
import FilterMenu from "../filter menu/FilterMenu.jsx"

function SearchBar(props){
    const currentTheme = useContext(ThemeContext)

    return(
        <div className="middleSection" style={{backgroundColor: currentTheme.background}}>
            <div className="searchBarMain" style={{backgroundColor: currentTheme.elementColor}}>
                <img src={glass} alt="" />
                <input className={currentTheme.inputColor} type="text" placeholder="Search for a country..." style={{backgroundColor: currentTheme.elementColor, color: currentTheme.text}} onChange={(e) => {props.setInput(e.target.value)}}/>
            </div>
            <FilterMenu filter={props.filter} setFilter={props.setFilter}/>
        </div>
    )
}

export default SearchBar