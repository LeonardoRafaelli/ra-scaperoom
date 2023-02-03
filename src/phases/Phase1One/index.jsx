import "react";
import "../../styleFases.css";
import imagem45 from "../../markers/45.png";
import { useState } from "react";
export default function PhaseOne(props) {
  const [answer, setAnswer] = useState("");

  const handleAnswer = () => {
    switch (answer) {
      case "opostos":
        props.setLevel(props.level + 1);

        break;
      case "oposto":
<<<<<<< HEAD
        alert("s")
        break;

      default:
        alert("Resposta errada!")
        setAnswer("")
=======
        alert("talvez não sejam só 2 lados");
        break;

      default:
        alert("Resposta errada");
        setAnswer("");
>>>>>>> b55a1dd5815a2986855e422be5690d60c3c379d9
        break;
    }
  };

  return (
    <div id="container">
      <div id="texto">
        <h1>Fase {props.level}</h1>
      </div>
      <div id="items">
        <img src={imagem45} alt="Marker 1" />
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
  );
}
