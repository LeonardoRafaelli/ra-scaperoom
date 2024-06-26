import "react";
import "../../styleFases.css";
import { useEffect } from "react";
import imagem46 from "/imgs/46.png";
import qrCodeImage from "/imgs/qrCodePhaseTwo.png";
import { useState } from "react";
import "../../Shake.css";

export default function PhaseTwo(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const [qrCode, setQrCode] = useState(false);

  const [accessPassword, setAccessPassword] = useState("");

  const handleAnswer = () => {
    switch (answer) {
      case "arnold schwarzenegger":
        {
          alert("Password: 849");
          props.setLevel(props.level + 1);
        }
        break;
      case "arnoldschwarzenegger":
        alert("Ás vezes no vazio do espaço é onde encontramos as respostas");
        break;
      case "arnold":
        alert("Tudo precisa ser enunciado para existir");
        break;
      default:
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
        {!(accessPassword === "256") ? (
          <>
            <h1>Fase 2</h1>
            <input
              id="inputPassword"
              value={accessPassword}
              onChange={(e) => setAccessPassword(e.target.value)}
              autoFocus
              placeholder="Password"
            />
          </>
        ) : (
          <div className={`shake-container ${isShaking ? "shake" : ""}`}>
            <div id="qrCode">
              {qrCode && (
                <div id="imagemQrCode">
                  <img src={qrCodeImage} alt="QR Code" />
                  <p>senha</p>
                </div>
              )}
            </div>
            <div id="container">
              <div id="texto">
                <h1>Fase {props.level}</h1>
              </div>
              <div id="items">
                <img src={imagem46} alt="Marker 2" />
                <div id="resposta">
                  <input
                    id="input"
                    type="text"
                    placeholder="Resposta"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value.toLowerCase())}
                    autoFocus
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
              <div id="textoEscondido">
                <p>Clique</p>
                <p
                  id="aqui"
                  onClick={() => {
                    setQrCode(true);
                  }}
                >
                  Aqui
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
