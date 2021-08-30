import React, { Component, } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import Nav from "../Header/Nav";
import { Link } from "react-router-dom";
import axios from 'axios'


//criar modal recebendo id
class Update extends Component{
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
        axios.put('https://herodin.herokuapp.com/api/heroes/', this.state)
         .then(response =>{
          console.log(response.data)
         })
         this.setState({id:'',name:'', power:'', universe:''})
      }
    render(){
        const { id, name, power, universe } = this.state;
        return(
            <>
            <Nav />
            <Container style={{ marginTop: "100px" }}>
              <h1>Atualização de Heroi</h1>
              <Form style={{ margin: "50px" }} onSubmit={this.handleSubmit}>
                <Form.Row>
                <Col>
                    <label>ID</label>
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
                    <label>Nome</label>
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
                  Atualizar Heroi
                </Button>
                <Link to="/Lista">
                  <Button style={{ margin: "30px", float: "left" }}>
                    Mostrar Herois
                  </Button>
                </Link>
              </Form>
            </Container>
            </>
        )
    }
}

export default Update