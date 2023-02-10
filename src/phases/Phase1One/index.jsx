import "react";
import "../../styleFases.css";
import imagem45 from "../../markers/45.png";
import { useState } from "react";
import "../../Shake.css";

export default function PhaseOne(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswer = () => {
    switch (answer) {
      case "opostos":
        props.setLevel(props.level + 1);

        break;
      case "oposto":
        alert("+s");
        break;
      default:
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
          <img src={imagem45} alt="Marker 1" />
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
