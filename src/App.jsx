import './App.css';
import React, { useState, useContext } from 'react';
import SearchBar from "./components/search bar/SearchBar"
import ThemeProvider from "./store/ThemeProvider"
import Header from './components/header/Header';

function App() {


  return (
    <ThemeProvider>
      <div className="App">
        <Header />
          <SearchBar />
      </div>
    </ThemeProvider>

  );
}

export default App;
