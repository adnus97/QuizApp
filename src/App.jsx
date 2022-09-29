import React, { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";

function App() {
  const [start, setStart] = React.useState(false);
  const [quiz, setQuiz] = useState([]);

  function toggle() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {
        setStart(true);
        setQuiz(data.results);
      });
  }

  function playAgain() {
    setStart(false);
  }
  return (
    <div>
      {!start && <Intro clickHandle={toggle} />}
      {start && <Quiz quiz={quiz} toggle={playAgain} />}
    </div>
  );
}
export default App;
