import './App.css';
import React, { useState, useContext } from 'react';
import SearchBar from "./components/search bar/SearchBar"
import ThemeProvider from "./store/ThemeProvider"
import Header from './components/header/Header';
import CountryMenu from "./components/country menu/CountryMenu.jsx"

function App() {


  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <CountryMenu />
      </div>
    </ThemeProvider>

  );
}

export default App;
