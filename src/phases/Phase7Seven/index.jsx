import "react";
import { useState } from "react";
import "../../styleFases.css";
import "../../Shake.css";
import imagem51 from "../../markers/51.png";

export default function PhaseSeven(props) {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (mostrar) {
      const timer = setTimeout(() => {
        setMostrar(false);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    } else {
      const intervalo = setInterval(() => {
        setMostrar(true);
      }, 8000);
      return () => {
        clearInterval(intervalo);
      };
    }
  }, [mostrar]);

  const handleAnswer = () => {
    if (answer === "você") {
      props.setLevel(props.level + 1);
    } else if (answer === "harry potter") {
      alert(
        "Em nossa jornada é preciso descobrir tesouros escondidos, trazendo novas descobertas e alegrias à nossa vida"
      );
    } else if (answer === "voce") {
      alert(
        "Um assento é como um abraço acolhedor, oferecendo conforto e segurança em nossa jornada."
      );
    } else {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }
  };

  return (
    <div className={`shake-container ${isShaking ? "shake" : ""}`}>
      <div id="container">
        <div id="texto">
          <h1>Fase {props.level}</h1>
        </div>
        <div id="items">
          <img src={imagem51} alt="Marker 6" />
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
            <button
              id="botaoEnviar"
              onClick={() => props.setLevel(props.level + 1)}
            >
              Enviar
            </button>
          </div>
        </div>
        {mostrar && (
          <div id="mostrar">
            9 / 47 / 7 <br/> 38 / 18 / 3 <br/> 209 / 5 / 3 <br/> 768 / 1 / 11
          </div>
        )}
      </div>
    </div>
  );
}
