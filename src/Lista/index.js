import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default class Lista extends Component {
  render() {
    return (
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
          <tbody>
            <tr>
              <td>1</td>
              <td>Homem-Aranha</td>
              <td>Teia</td>
              <td>Marvel</td>
              <td>
                <Button>Update</Button> <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rafael</td>
              <td>Imortal</td>
              <td>Planeta Terra</td>
              <td>
                <Button>Update</Button> <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    )
  }
}
