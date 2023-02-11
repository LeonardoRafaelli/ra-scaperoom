import "react";
import { useState } from "react";

import "../../styleFases.css";
import "../../Shake.css";
import imagem52 from "/imgs/52.png";

export default function PhaseEight(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const [accessPassword, setAccessPassword] = useState("");

  const handleAnswer = () => {
    if (answer === "não me subestimem" || answer === "não me subestimem!") {
      alert("Password: 9aB");
      props.setLevel(props.level + 1);
    } else if (answer === "naruto") {
      alert(
        "Uma frase de ocissálC oturaN T1, E25, M11:10, está prestes a ser revelada para aqueles corajosos que não se subestimam."
      );
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
        {!(accessPassword === "5F9") ? (
          <>
            <h1>Fase 8</h1>
            <input
              id="inputPassword"
              value={accessPassword}
              onChange={(e) => setAccessPassword(e.target.value)}
              placeholder="Password"
            />
          </>
        ) : (
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
