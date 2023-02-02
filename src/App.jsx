import { useState } from 'react'
import PhaseOne from './phases/Phase1One';
import PhaseTwo from './phases/Phase2Two';
import PhaseThree from './phases/Phase3Three';
import PhaseFour from './phases/Phase4Four';
import PhaseFive from './phases/Phase5Five';
import PhaseSix from './phases/Phase6Six';
import PhaseSeven from './phases/Phase7Seven';
import PhaseEight from './phases/Phase8Eight';
import PhaseNine from './phases/Phase9Nine';
import PhaseTen from './phases/Phase10Ten';

function App() {

  const [level, setLevel] = useState(1);

  const handleLevelChange = () => {
    if(level < 10){
      setLevel(level + 1);
    }
  }


  function getCurrentLevel(){
    switch(level){
      case 1: return <PhaseOne />
      case 2: return <PhaseTwo />
      case 3: return <PhaseThree />
      case 4: return <PhaseFour />
      case 5: return <PhaseFive />
      case 6: return <PhaseSix />
      case 7: return <PhaseSeven />
      case 8: return <PhaseEight />
      case 9: return <PhaseNine />
      case 10: return <PhaseTen />
    }
  }

  return (
    <div>
      {getCurrentLevel()}
      <button
        onClick={handleLevelChange}
      >
      Next Level</button>
    </div>
  )
}

export default App
