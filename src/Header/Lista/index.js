import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Nav from '../Header/Nav'
import axios from 'axios'

class Lista extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heroes: [],
      userId: '',
    }
  }
  componentDidMount() {
    axios.get('https://herodin.herokuapp.com/api/heroes').then((response) => {
      this.setState({
        heroes: response.data,
      })
    })
  }
  handleDelete = (id) => {
    axios
      .delete(
        `https://herodin.herokuapp.com/api/heroes/delete/${id}`,
        this.state,
      )
      .then(() => {})
  }
  render() {
    const { heroes } = this.state
    return (
      <>
        <Nav />
        <Container>
          <h2>Lista de Heróis</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Heroi</th>
                <th>Super-Poder</th>
                <th>Universo</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {heroes.map((hero) => (
              <tbody key={hero.id}>
                <td>{hero.id}</td>
                <td>{hero.name}</td>
                <td>{hero.powerString}</td>
                <td>{hero.universe}</td>
                <td>{hero.registrationDate}</td>
                <Button onClick={this.handleDelete.bind(this.heroes, hero.id)}>
                  Delete
                </Button>
              </tbody>
            ))}
            {console.log(heroes)}
          </Table>
        </Container>
      </>
    )
  }
}

export default Lista
