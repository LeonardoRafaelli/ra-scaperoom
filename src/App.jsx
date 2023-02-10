import { useEffect, useState } from "react";
import PhaseOne from "./phases/Phase1One";
import PhaseTwo from "./phases/Phase2Two";
import PhaseThree from "./phases/Phase3Three";
import PhaseFour from "./phases/Phase4Four";
import PhaseFive from "./phases/Phase5Five";
import PhaseSix from "./phases/Phase6Six";
import PhaseSeven from "./phases/Phase7Seven";
import PhaseEight from "./phases/Phase8Eight";
import PhaseNine from "./phases/Phase9Nine";
import PhaseTen from "./phases/Phase10Ten";
import Confetti from "react-confetti";

function App() {
  const [level, setLevel] = useState(JSON.parse(localStorage.getItem("level")));
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if(level === null){
      localStorage.setItem("level", 1);
      setLevel(1);
    } else {
      localStorage.setItem("level", level);
    }
  }, [level])



  useEffect(() => {
    if (level != 1) setConfetti(true);
    const timer = setTimeout(() => {
      setConfetti(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [level]);

  function getCurrentLevel() {
    switch (level) {
      case 1:
        return <PhaseOne level={level} setLevel={setLevel} />;
      case 2:
        return <PhaseTwo level={level} setLevel={setLevel} />;
      case 3:
        return <PhaseThree level={level} setLevel={setLevel} />;
      case 4:
        return <PhaseFour level={level} setLevel={setLevel} />;
      case 5:
        return <PhaseFive level={level} setLevel={setLevel} />;
      case 6:
        return <PhaseSix level={level} setLevel={setLevel} />;
      case 7:
        return <PhaseSeven level={level} setLevel={setLevel} />;
      case 8:
        return <PhaseEight level={level} setLevel={setLevel} />;
      case 9:
        return <PhaseNine level={level} setLevel={setLevel} />;
      case 10:
        return <PhaseTen level={level} setLevel={setLevel} />;
      case 11:
        return (
          <h1>Congratulations! Easy hein?</h1>
        )
    }
  }

  return (
    <div>
      {getCurrentLevel()}
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={600}
        />
      )}
    </div>
  );
}

export default App;
