import "react";
import "../../styleFases.css";
import { useEffect } from "react";
import imagem46 from "../../markers/46.png";
import qrCodeImage from "../../assets/qrCodePhaseTwo.png";
import { useState } from "react";

export default function PhaseTwo(props) {
  const [answer, setAnswer] = useState("");

  const [qrCode, setQrCode] = useState(false);

  const handleAnswer = () => {
    switch (answer) {
      case "arnold schwarzenegger":
        props.setLevel(props.level + 1);
        break;
      case "arnoldschwarzenegger":
        alert("Ás vezes no vazio do espaço é onde encontramos as respostas");
        break;
      case "arnold":
        alert("Tudo precisa ser enunciado para existir");
        break;
      default:
        alert("Resposta errada!");
        setAnswer("");
        break;
    }
  };

  return (
    <>
      <div id="qrCode">
        {qrCode && (
          <div id="imagemQrCode">
            <img src={qrCodeImage} alt="QR Code" />
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAnswer();
                }
              }}
            />
            <button id="botaoEnviar" onClick={() => props.setLevel(props.level + 1)}>
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
    </>
  );
}
