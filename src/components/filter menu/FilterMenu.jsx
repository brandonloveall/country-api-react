import React, { useContext, useState } from "react";
import "./FilterMenu.css"
import ThemeContext from "../../store/theme-context";
import dropDownArrow from "../../assets/arrow-down-sign-to-navigate.png"


function FilterMenu(props) {
    const currentTheme = useContext(ThemeContext)
    const [visible, setVisible] = useState("none")
    const [region, setRegion] = useState("Filter by Region")

    function openMenu(){
        if(visible === "none"){
            setVisible("flex")
        }else{
            setVisible("none")
        }
    }

    return (
        <div className="filterMain" style={{backgroundColor: currentTheme.elementColor}} onClick={openMenu}>
            <div className="mainTab">
                <p style={{color: currentTheme.text}}>{props.filter}</p>
                <img src={dropDownArrow} alt="" />
            </div>
            
            <div className="countryList" style={{backgroundColor: currentTheme.elementColor, display: visible}}>
                <p style={{color: currentTheme.text}} onClick={() => props.setFilter("Africa")}>Africa</p>
                <p style={{color: currentTheme.text}} onClick={() => props.setFilter("Americas")}>Americas</p>
                <p style={{color: currentTheme.text}} onClick={() => props.setFilter("Asia")}>Asia</p>
                <p style={{color: currentTheme.text}} onClick={() => props.setFilter("Europe")}>Europe</p>
                <p style={{color: currentTheme.text}} onClick={() => props.setFilter("Oceania")}>Oceania</p>
                <p style={{color: currentTheme.text}} onClick={() => props.setFilter("Filter By Region")}>No Filter</p>
            </div>
        </div>
    )
}

export default FilterMenu