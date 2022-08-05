import React from "react";

const ThemeContext = React.createContext({
    theme: "Dark Mode",
    elementColor: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
    inputColor: "lightText",
    changeTheme: () => {}
})

export default ThemeContext