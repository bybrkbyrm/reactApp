import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import Navbar from "./components/Navbar";
function App() {


  return (
    <div className="container">

    <Navbar title = "User App"/>
    <hr/>
    <User
    isim = "Burak"
    maas = "5.000"
    departman = "IT"
    />
    </div>
  );
}
export default App;
