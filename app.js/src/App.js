import axios from "axios";
import "./App.css";
import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Are You Out of Ideas!</h1>
        <p>AI can come up with challanges, so you can solve it.</p>
        <form onSubmit={handleSubmit}>
          <button type="submit"> Submit</button>
          {isLoading ? (
            <p className="loading">
              <BeatLoader size={15} color="#007bff" />
            </p>
          ) : (
            <ul className="answer">{response} </ul>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
