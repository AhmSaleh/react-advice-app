import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    const { advice } = await (
      await axios.get("https://api.adviceslip.com/advice")
    ).data.slip;

    setAdvice(advice);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const getAdviceHandler = () => {
    fetchAdvice();
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={getAdviceHandler}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
