import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormularioCadastro />
        <ListaDeNotas />
        <ListaDeNotas />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;
