import { useEffect, useState, useRef } from "react";
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
import Fireworks from "fireworks-js";

import "./styleFases.css";

const FireworkComponent = () => {
  const fireworksRef = useRef(null);

  useEffect(() => {
    const fireworks = new Fireworks(fireworksRef.current, {
      maxRockets: 10, // by default 1
      rocketSpawnInterval: 50, // by default 150
      numParticles: 400, // by default 50
    });
    fireworks.start();

    return () => {
      fireworks.stop();
    };
  }, []);

  return <div ref={fireworksRef} />;
};

function App() {
  const [level, setLevel] = useState(11);
  const [confetti, setConfetti] = useState(false);

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
          <div>
            <div className="containerWin">
              <h1 className="congrats">CONGRATULATIONS!</h1>
              <h2 className="completed">You have completed the game!</h2>
            </div>

            <FireworkComponent />
          </div>
        );
    }
  }

  return (
    <div>
      {getCurrentLevel()}
      {
        //if user get to level 11, don't show confetti
        level != 11 && confetti && <Confetti />
      }
    </div>
  );
}

export default App;
