import "react";
import { useState } from "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem53 from "/imgs/53.png";


export default function PhaseNine(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleAnswer = () => {
    if (answer === "persistência") {
      alert("Password: 8Bj")
      props.setLevel(props.level + 1);
    } else {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }
  };

  return (
    <>{!(accessPassword === "9aB") ?
      <input
        value={accessPassword}
        onChange={(e) => setAccessPassword(e.target.value)}
        placeholder="Password"
      />
      :
      <div className={`shake-container ${isShaking ? "shake" : ""}`}>
        <div id="container">
          <div id="texto">
            <h1>Fase {props.level}</h1>
          </div>
          <div id="items">
            <img src={imagem53} alt="Marker 9" />
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
    }
    </>
  );
}

