<<<<<<< HEAD
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
=======
import "./App.css";
import ContactForm from "./contactForm";
import FormHeader from "./Form-Header";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <FormHeader />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
>>>>>>> ff190412dda8a0a08574a86b4f0c4ae819a812da
