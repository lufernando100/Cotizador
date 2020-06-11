import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario'

const Contenedor = styled.div `
max-width: 600px;
margin: 0 auto;
`
const ContenedorFormulario = styled.div `
background: #FFF;
padding: 3rem;
`

function App() {
  return (
 <Contenedor>
    <Header
  titulo = "Bienvenidas locas"
  />
  <ContenedorFormulario>
<Formulario/>
  </ContenedorFormulario>
 </Contenedor>

  );
}

export default App;
