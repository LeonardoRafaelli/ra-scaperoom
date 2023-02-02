import "react";
import "../../styleFases.css";
import imagem51 from "../../markers/51.png";

export default function PhaseSeven(props) {
  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem51} alt="Marker 7" />
        <div id="resposta">
          <input id="input" type="text" />
          <button id="botaoEnviar" onClick={() => {props.setLevel(props.level + 1)}}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
