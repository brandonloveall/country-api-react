import React, {useContext} from "react";
import ThemeButton from "../theme button/ThemeButton";
import ThemeContext from "../../store/theme-context";
import "./Header.css"


function Header() {

    const currentTheme = useContext(ThemeContext)

    return (
        <header style={{backgroundColor: currentTheme.elementColor}}>
            <h2 style={{color: currentTheme.text}}>Where in the world?</h2>
            <ThemeButton />
        </header>
    )
}

export default Header