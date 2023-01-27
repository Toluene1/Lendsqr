import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import "./index.css";

function App() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
            <div className="inputPass">
              <input
                type={passwordShown ? "text" : "password"}
                className="input1"
                name=""
                id=""
                placeholder="Password"
              />
              <span className="showPass" onClick={togglePassword}>
                {passwordShown ? "HIDE" : "SHOW"}
              </span>
            </div>
          </div>
          <p className="pEnter">forgot password?</p>
          <button className="buttonHome">LOG IN</button>
        </div>
      </main>
    </section>
  );
}

export default App;
