import React from "react";
import "./SearchBar.css"
import glass from "../../assets/search-magnifier-magnifying-glass-svgrepo-com.svg"

function SearchBar(){
    return(
        <div className="searchBarMain">
            <img src={glass} alt="" />
            <input type="text" placeholder="Search for a country..."/>
        </div>
    )
}

export default SearchBar