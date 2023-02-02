import "react";
import "./styles.css";
import imagem45 from "../../markers/45.png";

export default function PhaseOne() {
  return (
    <div id="container">
      <div id="texto">
        <h1>Primeira fase</h1>
      </div>
      <div id="items">
        <img src={imagem45} alt="Marker 1" />
        <div id="resposta">
          <input id="input" type="text" />
          <button id="botaoEnviar">Enviar</button>
        </div>
      </div>
    </div>
  );
}
