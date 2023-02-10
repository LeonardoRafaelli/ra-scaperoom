import "react";
import { useState } from "react";

import "../../styleFases.css";
import "../../Shake.css";
import imagem52 from "../../markers/52.png";

export default function PhaseEight(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswer = () => {
    if (answer === "não me subestimem" || answer === "não me subestimem!") {
      props.setLevel(props.level + 1);
    } else if (answer === "naruto") {
      alert(
        "Uma frase de ocissálC oturaN T1, E25, M11:10, está prestes a ser revelada para aqueles corajosos que não se subestimam."
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
          <img src={imagem52} alt="Marker 8" />
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
