import React from 'react'

import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Cadastro from './Cadastro'
import Lista from './Lista'

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/Lista" component={Lista}></Route>
      <Route path="/" exact component={Cadastro}></Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
