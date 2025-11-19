
import { useState } from "react"
import StartGame from "./startGAME"
import PlayGame from "./PlayGame";

const App = () => {
  let [isplayGame, setisPlayGame] = useState(false);

  function toggleGame(){
    setisPlayGame((prev) => !prev)
  }

  return (
    <div>
      {isplayGame ? <PlayGame/> : < StartGame toggle={toggleGame}/>}
    </div>
  )
}

export default App



