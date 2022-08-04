import './App.css';
import React, { useState } from 'react';
import unfilled from "./assets/unfilled.svg"
import filled from "./assets/filled.svg"
import SearchBar from "./components/search bar/SearchBar"
import { useReducer } from 'react';

function App() {

  const [nextTheme, setNextTheme] = useState("Dark Mode")
  const [img, setImg] = useState(unfilled)

  function switchThemes(){
    if(nextTheme === "Dark Mode"){
      setNextTheme("Light Mode")
      setImg(filled)
    }else{
      setNextTheme("Dark Mode")
      setImg(unfilled)
    }
  }

  return (
    <div className="App">
      <header>
        <h2>Where in the world?</h2>
        <button className='colorThemeSwitch' onClick={switchThemes}>
          <img src={img} alt="" />
          <p>{nextTheme}</p>
        </button>
      </header>
      <div className='middleSection'>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
