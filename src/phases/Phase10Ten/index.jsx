import "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem54 from "../../markers/54.png";

export default function PhaseTen(props) {
  const [isShaking, setIsShaking] = useState(false);
  return (
    <div className={`shake-container ${isShaking ? "shake" : ""}`}>
      <div id="container">
        <div id="texto">
          <h1>Fase {props.level}</h1>
        </div>
        <div id="items">
          <img src={imagem54} alt="Marker 10" />
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
