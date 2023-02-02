import "react";

import { useState } from "react";

import "../../styleFases.css";
import imagem47 from "../../markers/47.png";


export default function PhaseThree(props) {
  const [answer, setAnswer] = useState("")

  const handleAnswer = () => {
    switch (answer) {
      case "eu":
        props.setLevel(props.level + 1)
        break;

      case "você":
        alert("correto, você")
        break;

      case "voce":
        alert("correto, você")
        break;

      default:
        alert("Resposta errada")
        setAnswer("")
        break;
    }
  }

  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem47} alt="Marker 1" />
        <div id="resposta">
          <input
            id="input"
            type="text"
            placeholder="Resposta"
            value={answer}
            onChange={(e) => setAnswer(e.target.value.toLowerCase())}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnswer();
              }
            }}
          />
          <button id="botaoEnviar" onClick={handleAnswer}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
