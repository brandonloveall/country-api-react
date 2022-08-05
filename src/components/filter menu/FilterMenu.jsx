import React, { useContext, useState } from "react";
import "./FilterMenu.css"
import ThemeContext from "../../store/theme-context";
import dropDownArrow from "../../assets/arrow-down-sign-to-navigate.png"


function FilterMenu() {
    const currentTheme = useContext(ThemeContext)
    const [visible, setVisible] = useState("none")

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
                <p style={{color: currentTheme.text}}>Filter by Region</p>
                <img src={dropDownArrow} alt="" />
            </div>
            
            <div className="countryList" style={{backgroundColor: currentTheme.elementColor, display: visible}}>
                <p style={{color: currentTheme.text}}>Africa</p>
                <p style={{color: currentTheme.text}}>America</p>
                <p style={{color: currentTheme.text}}>Asia</p>
                <p style={{color: currentTheme.text}}>Europe</p>
                <p style={{color: currentTheme.text}}>Oceania</p>
            </div>
        </div>
    )
}

export default FilterMenu