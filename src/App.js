import "./App.css";
import { useState, createContext } from "react";

import SecondComponent from "./SecondCoponent";

// Create context
export const BackgroundContext = createContext()

function App() {

  const [background, setBackgorund] = useState("Light");

  const backgroundHandle = () => {
    setBackgorund(background === "Light" ? "Dark" : "Light");
  };

  return (
    <BackgroundContext.Provider value={background}> {/* Create provider to send value */}
      <div className="App">
        <div className="NormalWay">
          <h2>This is the way using useContext</h2>
          <button onClick={backgroundHandle}>Change background</button>
          <SecondComponent/>
        </div>
      </div>
    </BackgroundContext.Provider>
  );
}

export default App;