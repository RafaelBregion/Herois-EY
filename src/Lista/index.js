import React, { Component, useEffect, useState, useCallback} from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "../Header/Nav";
import axios from "axios";


class Lista extends Component {
  constructor(props){
    super(props)

    this.state = {
      heroes: []
    }
  }
   componentDidMount(){
     axios.get('https://herodin.herokuapp.com/api/heroes')
     .then(response =>{
      this.setState({
        heroes: response.data 
      })
      console.log(response.data)
     })
   }
  render(){
    const{heroes} = this.state
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
          {heroes.map((hero) => (
            <tbody>
              <td>{hero.id}</td>
              <td>{hero.name}</td>
              <td>{hero.power}</td>
              <td>{hero.universe}</td>
              <Button>Update</Button>
              <Button onClick={}>Delete</Button>
            </tbody>
          )) }
        </Table>
      </Container>
    </>
  );
}};

export default Lista;
