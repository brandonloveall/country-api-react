import React, { useContext, useState } from "react";
import "./FilterMenu.css"
import ThemeContext from "../../store/theme-context";
import dropDownArrow from "../../assets/arrow-down-sign-to-navigate.png"


function FilterMenu() {
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
                <p style={{color: currentTheme.text}}>{region}</p>
                <img src={dropDownArrow} alt="" />
            </div>
            
            <div className="countryList" style={{backgroundColor: currentTheme.elementColor, display: visible}}>
                <p style={{color: currentTheme.text}} onClick={() => setRegion("Africa")}>Africa</p>
                <p style={{color: currentTheme.text}} onClick={() => setRegion("America")}>America</p>
                <p style={{color: currentTheme.text}} onClick={() => setRegion("Asia")}>Asia</p>
                <p style={{color: currentTheme.text}} onClick={() => setRegion("Europe")}>Europe</p>
                <p style={{color: currentTheme.text}} onClick={() => setRegion("Oceania")}>Oceania</p>
            </div>
        </div>
    )
}

export default FilterMenu