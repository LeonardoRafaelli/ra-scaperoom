import "react";
import "../../styleFases.css";
import imagem46 from "../../markers/46.png";

export default function PhaseTwo(props) {
  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem46} alt="Marker 2" />
        <div id="resposta">
          <input id="input" type="text" />
          <button id="botaoEnviar" onClick={() => {props.setLevel(props.level + 1)}}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
