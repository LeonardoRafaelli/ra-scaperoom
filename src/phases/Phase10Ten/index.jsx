import "react";
import { useState } from "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem54 from "/imgs/markers/54.png";

export default function PhaseTen(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswer = () => {
    if (answer === "leona lewis ") {
      props.setLevel(props.level + 1);
    } else if (answer === "avatar") {
      alert(
        "A música é como um labirinto, e sua guardiã, escondendo a verdade em sua voz enigmática, esperando ser descoberta por aqueles que buscam a verdade."
      );
    } else {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }
  };

  return (
    <div className={`shake-container ${isShaking ? "shake" : ""}`}>
      <div id="container">
        <div id="texto">
          <h1>Fase {props.level}</h1>
        </div>
        <div id="items">
          <img src={imagem54} alt="Marker 9" />
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
            <button
              id="botaoEnviar"
              onClick={handleAnswer}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
