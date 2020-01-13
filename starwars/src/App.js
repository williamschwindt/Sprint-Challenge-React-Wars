import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PersonSlide from './components/PersonSlide';

const App = () => {
  const [person, setPerson] = useState([])

 useEffect(() => {
   axios
   .get("https://swapi.co/api/people")

   .then((res) => {
     console.log(res);
     
   })

   .catch((err) => {
     console.log(err);
   })
 }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PersonSlide />
    </div>
  );
}

export default App;
