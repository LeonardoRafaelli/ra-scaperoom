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

  const [level, setLevel] = useState(1)

  function getCurrentLevel(){
    switch(level){
      case 1: return <PhaseOne level={level} setLevel={setLevel}/>
      case 2: return <PhaseTwo level={level} setLevel={setLevel}/>
      case 3: return <PhaseThree level={level} setLevel={setLevel}/>
      case 4: return <PhaseFour level={level} setLevel={setLevel}/>
      case 5: return <PhaseFive level={level} setLevel={setLevel}/>
      case 6: return <PhaseSix level={level} setLevel={setLevel}/>
      case 7: return <PhaseSeven level={level} setLevel={setLevel}/>
      case 8: return <PhaseEight level={level} setLevel={setLevel}/>
      case 9: return <PhaseNine level={level} setLevel={setLevel}/>
      case 10: return <PhaseTen level={level} setLevel={setLevel}/>
    }
  }

  return (
    <div>
      {getCurrentLevel()}
    </div>
  )
}

export default App
