import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all;

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  const StatisticLine = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );

  const handleVote = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
  };

  const Statistics = () =>
    all > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={positive.toFixed(1)} />
        </tbody>
      </table>
    ) : (
      <p>No feedback give</p>
    );

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleVote("good")} text="Good" />
      <Button handleClick={() => handleVote("neutral")} text="Neutral" />
      <Button handleClick={() => handleVote("bad")} text="Bad" />
      <h1>statistics</h1>

      <Statistics />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
