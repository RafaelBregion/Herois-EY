import React, { Component } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'
import Nav from '../Header/Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './index.css'

//criar modal recebendo id
class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      powerString: '',
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
      .put('https://herodin.herokuapp.com/api/heroes/', this.state)
      .then((response) => {
        console.log(response.data)
      })
    this.setState({ id: '', name: '', powerString: '', universe: '' })
  }
  render() {
    const { id, name, powerString, universe } = this.state
    return (
      <>
        <Nav />
        <Container>
          <h2>Atualização de Herói</h2>
          <br></br>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <th>
                  <label>ID</label>{' '}
                </th>
                <Form.Control
                  type="text"
                  name="id"
                  value={id}
                  onChange={this.handleChange}
                  placeholder="id"
                />
              </Col>
              <br></br>
              <Col>
                <th>
                  <label>Nome</label>{' '}
                </th>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="name"
                />
              </Col>
              <br></br>
              <Col>
                <th>
                  <label>Superpoder</label>{' '}
                </th>
                <Form.Control
                  type="text"
                  name="powerString"
                  value={powerString}
                  onChange={this.handleChange}
                  placeholder="Superpoder"
                />
              </Col>
              <br></br>
              <Col>
                <th>
                  <label>Universo</label>
                </th>
                <Form>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="EY Comics"
                        name="universe"
                        type={type}
                        id={`inline-${type}-1`}
                        value={'EY Comics'}
                        onChange={this.handleChange}
                      />
                      <Form.Check
                        inline
                        label="Trainee Comics"
                        name="universe"
                        type={type}
                        id={`inline-${type}-2`}
                        value={'Trainee Comics'}
                        onChange={this.handleChange}
                      />

                      <Form.Check
                        inline
                        label="Outros"
                        name="universe"
                        type={type}
                        id={`inline-${type}-3`}
                        value={'Outros'}
                        onChange={this.handleChange}
                      />
                    </div>
                  ))}
                </Form>
              </Col>
            </Form.Row>
            <Button className="Upd" type="submit">
              Atualizar Herói
            </Button>
            <Link to="/Lista">
              {/* <Button className="ShowHer">Mostrar Heróis</Button> */}
            </Link>
          </Form>
        </Container>
      </>
    )
  }
}

export default Update
