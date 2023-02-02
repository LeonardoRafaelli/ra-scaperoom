import { useState } from 'react'
import PhaseOne from './phases/Phase1One';
import PhaseTwo from './phases/Phase2Two';

function App() {

  const [level, setLevel] = useState(1);


  function getCurrentLevel(){

    switch(level){
      case 1: return <PhaseOne />
      case 2: return <PhaseTwo />
    }

  }

  return (
    <div>
      {getCurrentLevel()}
      {/* <button
        onClick={() => setLevel(level + 1)}
      >
      Next Level</button> */}
    </div>
  )
}

export default App
