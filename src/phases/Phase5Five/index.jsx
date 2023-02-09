import "react";
import "../../styleFases.css";
import imagem49 from "../../markers/49.png";
import { useState } from "react";

export default function PhaseFive(props) {
  const [answer, setAnswer] = useState("");

  const handleAnswer = () => {
    if (answer === "vejo") {
      props.setLevel(props.level + 1);
    } else if (answer === "cesar") {
      alert("Sim");
    } else if (answer === "macaco") {
      alert("baka adda naganna");
    } else {
      alert("Resposta errada!");
      setAnswer("");
    }
  };
  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem49} alt="Marker 5" />
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
          <button id="botaoEnviar" onClick={() => props.setLevel(props.level + 1)}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
