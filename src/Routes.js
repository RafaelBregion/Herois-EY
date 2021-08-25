import React from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Cadastro from './Cadastro'
import Lista from './Lista'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Cadastro" component={Cadastro}></Route>
        <Route path="/" component={Lista}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
