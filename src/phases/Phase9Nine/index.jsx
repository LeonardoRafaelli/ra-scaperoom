import "react";
import "../../styleFases.css";
import imagem53 from "../../markers/53.png";

export default function PhaseNine(props) {
  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem53} alt="Marker 9" />
        <div id="resposta">
          <input id="input" type="text" />
          <button id="botaoEnviar" onClick={() => {props.setLevel(props.level + 1)}}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
