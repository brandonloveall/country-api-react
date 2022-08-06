/*
DARK THEME:
{
    theme: "Light Mode",
    elementColor: "hsl(209, 23%, 22%)",
    background: "hsl(207, 26%, 17%)",
    text: "hsl(0, 0%, 100%)",
    inputColor: "hsl(0, 0%, 100%)"
}

LIGHT THEME:
{
    theme: "Dark Mode",
    elementColor: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    inputColor: "hsl(0, 0%, 52%)"
}



*/



import ThemeContext from "./theme-context.jsx"
import { useReducer } from "react"

const initialState = { 
    theme: "Dark Mode",
    elementColor: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    inputColor: "lightText"
 }

function themeReducer(state, action) {
    if (state.theme === "Dark Mode") {
        return (
            {
                theme: "Light Mode",
                elementColor: "hsl(209, 23%, 22%)",
                background: "hsl(207, 26%, 17%)",
                text: "hsl(0, 0%, 100%)",
                inputColor: "darkText",
            }
            )
    } else {
        return (
            {
                theme: "Dark Mode",
                elementColor: "hsl(0, 0%, 100%)",
                background: "hsl(0, 0%, 98%)",
                text: "hsl(200, 15%, 8%)",
                inputColor: "lightText"
            }
            )
    }
}

function ThemeProvider(props) {
    const [themeState, dispatchThemeState] = useReducer(themeReducer, initialState)

    function switchThemes() {
        dispatchThemeState()
    }

    const themeContext = {
        theme: themeState.theme,
        elementColor: themeState.elementColor,
        background: themeState.background,
        text: themeState.text,
        inputColor: themeState.inputColor,
        changeTheme: switchThemes
    }

    return <ThemeContext.Provider value={themeContext}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider