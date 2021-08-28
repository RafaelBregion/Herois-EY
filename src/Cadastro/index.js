import React, { Component, useCallback, useEffect, useState } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Nav from "../Header/Nav";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import axios from 'axios'

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      power: "",
      universe: "",
    };
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://herodin.herokuapp.com/api/heroes/create', this.state)
     .then(response =>{
      console.log(response.data)
     })
  }

  render() {
    const { name, power, universe } = this.state;
    return (
      <>
        <Nav />
        <Container style={{ marginTop: "100px" }}>
          <h1>Cadastro de Herói</h1>
          <Form style={{ margin: "50px" }} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <label>Nome</label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Nome"
                />
              </Col>
              <br></br>
              <Col>
                <label>Superpoder</label>
                <Form.Control
                  type="text"
                  name="power"
                  value={power}
                  onChange={this.handleChange}
                  placeholder="Superpoder"
                />
              </Col>
              <br></br>
              <Col>
                <label>Universo</label>
                <Form.Control
                  type="text"
                  name="universe"
                  value={universe}
                  onChange={this.handleChange}
                  placeholder="Universo"
                />
              </Col>
            </Form.Row>
            <Button type='submit'style={{ margin: "30px", float: "right" }}>
              Cadastrar
            </Button>
            <Link to="/Lista">
              <Button style={{ margin: "30px", float: "left" }}>
                Mostrar Herois
              </Button>
            </Link>
          </Form>
        </Container>
      </>
    );
  }
} 

export default Cadastro

