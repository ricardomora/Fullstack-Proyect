import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const Header = ({ course }) => <h1>{course}</h1>;

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const ContentList = ({ parts }) =>
    parts.map((part) => (
      <p>
        {part.name} {part.exercises}
      </p>
    ));

  const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

    return <p>Number of exercises: {totalExercises}</p>;
  };

  const { name, parts } = course;

  return (
    <div>
      <Header course={name} />
      <ContentList parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
