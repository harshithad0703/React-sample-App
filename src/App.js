import React from "react";

import Header from './components/Header';
import Home from './components/Home';
import PostsCards from "./components/Posts";
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home/>
      <PostsCards/>
      <Contact/>
    </div>
  );
}

export default App;
