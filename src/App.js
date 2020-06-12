import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  // Extraer Datos

  const { cotizacion, datos } = resumen;
  const [cargando, guardarCargando] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Bienvenidas locas" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
