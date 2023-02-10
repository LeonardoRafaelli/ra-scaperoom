import "react";
import "../../styleFases.css";
import imagem48 from "/imgs/48.png";
import { useState } from "react";
import "../../Shake.css";

export default function PhaseFour(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const [accessPassword, setAccessPassword] = useState("");

  const handleAnswer = () => {
    if (answer === "escotismo") {
      alert("Password: 9B1");
      props.setLevel(props.level + 1);
    } else if (
      answer === "robert baden powell" ||
      answer === "robert baden-powell" ||
      answer === "robert" ||
      answer === "baden powell" ||
      answer === "baden-powell"
    ) {
      alert(
        "A criação de algo novo é consumado pelo intelecto, mas despertado pelo instinto de uma necessidade pessoal"
      );
    } else {
      setIsShaking(true);
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
        {!(accessPassword === "K63") ? (
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
                <img src={imagem48} alt="Marker 4" />
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
