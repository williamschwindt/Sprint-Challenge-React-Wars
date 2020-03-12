import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PersonSlide from './components/PersonSlide';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  let [person, setPerson] = useState([])

 useEffect(() => {
   axios
   .get("https://swapi.co/api/people")

   .then((res) => {
     console.log(res);
     setPerson(res.data.results);
   })

   .catch((err) => {
     console.log(err);
   })
 }, []);
 console.log(person);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        {person.map((per, index) => {
          return <PersonSlide name={per.name} 
          height={per.height} 
          mass={per.mass} 
          hair={per.hair_color} 
          skin={per.skin_color} 
          eyes={per.eye_color} 
          birthYear={per.birth_year} 
          key={index}/>
        })}
      </Container>
    </div>
  );
}

export default App;
