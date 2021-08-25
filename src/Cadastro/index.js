import React, { Component } from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'

export default class Cadastro extends Component {
  render() {
    return (
      <Container style={{ marginTop: '100px' }}>
        <h1>Cadastro de Herói</h1>
        <Form style={{ margin: '50px' }}>
          <Form.Row>
            <Col>
              <label>Nome</label>
              <Form.Control placeholder="Nome" />
            </Col>
            <br></br>
            <Col>
              <label>Superpoder</label>
              <Form.Control placeholder="Superpoder" />
            </Col>
            <br></br>
            <Col>
              <label>Universo</label>
              <Form.Control placeholder="Universo" />
            </Col>
          </Form.Row>
          <Button style={{ margin: '30px', float: 'right' }}>Cadastrar</Button>
        </Form>
      </Container>
    )
  }
}
