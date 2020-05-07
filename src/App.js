import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./components/User";

function App() {

const deneme = "Burak";
const deneme2 = true;
  return (
    <div className="App">

     {1 + 1}
     {"murat".toUpperCase()}
     {deneme}
      <div> 

{
deneme2 ? <p>Kayıtlı</p>
: <p>Kayıtlı değil</p>
}

<h1>App Component</h1>
<User/>

      </div>

    </div>
  );
}
//deneme repo
export default App;
