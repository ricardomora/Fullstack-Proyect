import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    anecdotes.map((anecdote) => ({
      name: anecdote,
      vote: 0,
    }))
  );

  const handleRandomSelection = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    // usa prevState
    const newVotes = [...votes];
    newVotes[selected].vote += 1;
    setVotes(newVotes);
  };

  const getAnecdoteWithMostVotes = () => {
    return votes.reduce((a, b) => (a.vote > b.vote ? a : b));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>
          <button onClick={handleRandomSelection}>Next anecdote</button>
          <button onClick={handleVote}>Vote</button>
        </p>
        <h2>Anecdote with the most votes</h2>
        <p>{getAnecdoteWithMostVotes().name}</p>
        <p>Has {getAnecdoteWithMostVotes().vote} votes</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
