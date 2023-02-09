import {useState} from "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem51 from "../../markers/51.png";
import { useEffect } from "react";

export default function PhaseSeven(props) {
  const [isShaking, setIsShaking] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  const handleAnswer = () => {

  }

  useEffect(() => {
    console.log("Mostrar", mostrar)
    if(mostrar) {
      const timer = setTimeout(() => {
        setMostrar(false);
      }, 100);
      return () => {
        clearTimeout(timer);
      }
    } else {
      const intervalo = setInterval(() => {
        setMostrar(true);
      }, 8000);
      return () => {
        clearInterval(intervalo);
      }
    }
  }, [mostrar])

  return (
    <div className={`shake-container ${isShaking ? "shake" : ""}`}>
      <div id="container">
        <div id="texto">
          <h1>Fase {props.level}</h1>
        </div>
        <div id="items">
          <img src={imagem51} alt="Marker 7" />
          <div id="resposta">
            <input id="input" type="text" />
            <button
              id="botaoEnviar"
              onClick={() => {
                props.setLevel(props.level + 1);
              }}
            >
              Enviar
            </button>
            {mostrar && <div id="mostrar">Mostrar</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
