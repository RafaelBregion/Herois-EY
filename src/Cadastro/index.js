import React, { Component } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'
import Nav from '../Header/Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './index.css'

class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      power: '',
      universe: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://herodin.herokuapp.com/api/heroes/create', this.state)
      .then((response) => {
        console.log(response.data)
      })
    this.setState({ name: '', power: '', universe: '' })
  }

  render() {
    const { name, power, universe } = this.state
    return (
      <>
        <Nav />
        <Container>
          <h2>Cadastro</h2>
          <Form onSubmit={this.handleSubmit}>
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
            <Button className="Cad" type="submit">
              Cadastrar
            </Button>
            <Link to="/Lista">
              {/* <Button className="mt-auto p-2 bd-highlight">
                Mostrar Herois
              </Button> */}
            </Link>
          </Form>
        </Container>
      </>
    )
  }
}

export default Cadastro
