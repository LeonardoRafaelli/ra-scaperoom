import "react";
import { useState } from "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem54 from "/imgs/54.png";
import imagem55 from "/imgs/55.png";
import birdImg from "/imgs/birdImg.jpg";
import birdQrCode from "/imgs/qrCodePhase10Bird.png"

export default function PhaseTen(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const [accessPassword, setAccessPassword] = useState("");
  // Atualizar para começar em 0
  const [newImage, setNewImage] = useState(0);

  const handleAnswer = () => {
    if (answer === "parabens" || answer === "parabéns") {
      alert("Password: 2Lv")
      props.setLevel(props.level + 1);
    } else if(answer === "13"){
      setNewImage(1)
      setAnswer("");
    } else if(answer === "becada"){
      setNewImage(2)
      setAnswer("");
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
        {!(accessPassword === "8Bj") ? (
          <>
            <h1>Fase 10</h1>
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
                <div>
                  {newImage === 2 &&  
                    <img src={birdQrCode} style={{position: "absolute", width: "2px", margin: "6rem 0 0 7rem"}}/>
                  }
                  <img src={newImage === 0 ? imagem54 : newImage === 1 ? imagem55 : birdImg} alt="Marker 9" />
                </div>
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
