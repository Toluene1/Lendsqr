import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <main>
        <div className="logoHome"></div>
      </main>
      <main className="divHome">
        <div className="homeDivs">{/* <img src="pablo.png" alt="" /> */}</div>
        <div className="homeDivs2">Tolu</div>
      </main>
    </section>
  );
}

export default App;
