import "./tailwind.output.css";
import { BrowserRouter, Route } from 'react-router-dom'
import Principal from "./componentes/Principal"
import Productos from './inicio/Productos'
import Promociones from './inicio/Promociones'
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { Component } from "react";
Amplify.configure(awsExports);


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route exact path='/' component={Productos} />
        <Route exact path='/promociones' component={Promociones} />
        <Route exact path='/principal' component={Principal} />
      </BrowserRouter>
    )
  }
}

export default App;
