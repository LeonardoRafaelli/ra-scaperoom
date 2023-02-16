import "react";
import { useEffect, useState } from "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem53 from "/imgs/53.png";

export default function PhaseNine(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const [accessPassword, setAccessPassword] = useState("");


  useEffect(() => {
    window.history.pushState(null, "", "/utf-?");
  }, []);

  const handleAnswer = () => {
    if (answer === "boa sorte") {
      alert("Password: 8Bj");
      props.setLevel(props.level + 1);
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
          Voltar ?
        </button>
        {!(accessPassword === "7aB") ? (
          <>
            <h1>Fase ?</h1>
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
                <h1>Fase ?</h1>
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
