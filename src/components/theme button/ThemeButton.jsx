import React, {useContext} from "react";
import unfilled from "../../assets/unfilled.svg"
import filled from "../../assets/filled.svg"
import "./ThemeButton.css"
import ThemeContext from "../../store/theme-context";

function ThemeButton(){
    const currentTheme = useContext(ThemeContext)
    let image = "unfilled"
    if(currentTheme.theme === "Dark Mode"){
      image = unfilled
    }else{
      image = filled
    }

    return(
    <button className='colorThemeSwitch' onClick={currentTheme.changeTheme}>
            <img src={image} alt="" />
            <p style={{color: currentTheme.text}}>{currentTheme.theme}</p>
          </button>
    )
}

export default ThemeButton