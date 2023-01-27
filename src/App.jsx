import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <main>
        <div className="logoHome">
          <img src="Union.png" className="unionLogo" alt="" />
          <img src="lendsqr.png" className="lendLogo" alt="" />
        </div>
      </main>
      <main className="divHome">
        <div className="homeDivs"></div>
        <div className="homeDivs2">
          <h3 className="welcome">Welcome!</h3>
          <p className="pEnter">Enter details to login</p>
          <div className="inputDiv">
            <input
              type="text"
              className="input1"
              name=""
              id=""
              placeholder="Email"
            />{" "}
            <input
              type="text"
              className="input1"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <p className="pEnter">forgot password?</p>
          <button className="buttonHome">login</button>
        </div>
      </main>
    </section>
  );
}

export default App;
