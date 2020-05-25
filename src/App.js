import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubApi from "./compo/GithubApi"
import Header from "./compo/Header"

function App() {
  return(
      <div>
        <Header />
        <GithubApi />
      </div>
  )
}

export default App;
