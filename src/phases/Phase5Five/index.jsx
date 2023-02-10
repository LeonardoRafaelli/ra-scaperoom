import "react";
import "../../styleFases.css";
import imagem49 from "/imgs/49.png";
import { useState } from "react";
import "../../Shake.css";

export default function PhaseFive(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [accessPassword, setAccessPassword] = useState("");

  const handleAnswer = () => {
    if (answer === "vejo") {
      alert("Password: 9o7");
      props.setLevel(props.level + 1);
    } else if (answer === "cesar") {
      alert("Sim");
    } else if (answer === "macaco") {
      alert("baka adda naganna");
    } else {
      setIsShaking(true);
      setAnswer("");
      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }
  };

  return (
    <>
      <div id="containerGeral">
        <button
          id="botaoVoltar"
          type="button"
          onClick={() => {
            props.setLevel(1)
            localStorage.setItem("level", 1)
          }}
        >
          Voltar Início
        </button>
        {!(accessPassword === "9B1") ? (
          <input
            id="inputPassword"
            value={accessPassword}
            onChange={(e) => setAccessPassword(e.target.value)}
            placeholder="Password"
          />
        ) : (
          <div className={`shake-container ${isShaking ? "shake" : ""}`}>
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
                  <button id="botaoEnviar" onClick={handleAnswer}>
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
