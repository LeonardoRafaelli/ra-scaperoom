import "react";
import "../../styleFases.css";
import imagem50 from "../../markers/50.png";
import "../../Shake.css";

export default function PhaseSix(props) {
  const [isShaking, setIsShaking] = useState(false);
  
  return (
    <div className={`shake-container ${isShaking ? "shake" : ""}`}>
      <div id="container">
        <div id="texto">
          <h1>Fase {props.level}</h1>
        </div>
        <div id="items">
          <img src={imagem50} alt="Marker 6" />
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
          </div>
        </div>
      </div>
    </div>
  );
}
