import React, { Component, useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "../Header/Nav";
import Hero from "../Hero";

const Lista = props => {
  const [heroes, setHeroes] = useState([]);

  async function fetchHeroesHandler() {
    const response = await fetch("https://herodin.herokuapp.com/api/heroes");
    const data = await response.json();

    const loadedHeroes = [];

    for (const key in data) {
      loadedHeroes.push({
        id: key,
        name: data[key].name,
        power: data[key].power,
        universe: data[key].universe,
        date: data[key].registrationDate,
      });
    }

    /*const transformedHeroes = data.results.map(heroData =>{
      return{
        id: heroData.id,
        name: heroData.name,       
        universe: heroData.universe
      }
    })*/
    setHeroes(loadedHeroes);
  }
  
  return (
    <>
      <Nav />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Heroi</th>
              <th>Super-Poder</th>
              <th>Universo</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* props.heroes.map((hero) => (
            <Hero
              key={hero.id}
              id={hero.id}
              name={hero.name}
              power={hero.power}
              universe={hero.universe}
            />
          )) */}
        </Table>
      </Container>
    </>
  );
};

export default Lista;
