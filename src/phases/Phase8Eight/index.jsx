import "react";
import "../../styleFases.css";
import imagem52 from "../../markers/52.png";

export default function PhaseEight(props) {
  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem52} alt="Marker 8" />
        <div id="resposta">
          <input id="input" type="text" />
          <button id="botaoEnviar" onClick={() => {props.setLevel(props.level + 1)}}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
