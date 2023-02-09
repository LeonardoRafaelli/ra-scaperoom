import "react";
import {useState} from "react";
import "../../styleFases.css";
import imagem50 from "../../markers/50.png";
import "../../Shake.css";

export default function PhaseSix(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswer = () => {
    if (answer === "leonardo di ser piero da vinci") {
      props.setLevel(props.level + 1);
    } else if (answer === "leonardo da vinci") {
      alert("Completar algo é como colocar a última peça de um quebra-cabeça, dando sentido e realização à nossa jornada.");
    } else if (answer === "vinci") {
      alert("Sobrenomes são como marcas de família, unindo passado, presente e futuro. Mas só, não podem definir uma pessoa.");
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
          <img src={imagem50} alt="Marker 6" />
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
              onClick={() => props.setLevel(props.level + 1)}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
