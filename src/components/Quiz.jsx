import React, { useMemo, useState } from "react";
import Question from "./Question";

export default function Quiz(props) {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [counter, setCounter] = useState(new Set());
  //const set = new Set(counter);

  function checkAnswer() {
    setCheckAnswers(true);
  }
  const newArr = useMemo(() => {
    return props.quiz.map((el, index) => {
      return {
        answers: shuffle([el.correct_answer, ...el.incorrect_answers]),
        value: el.question,
        correctAnswer: el.correct_answer,
        incorrectAnswers: el.incorrect_answers,
        index: index,
      };
    });
  }, []);
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const array = newArr.map((el) => {
    return <Question {...el} check={checkAnswers} count={setCounter} />;
  });
  console.log(counter);
  return (
    <div>
      <svg
        width="126"
        height="131"
        viewBox="0 0 126 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="blob-quiz-rose"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.4095 71.3947C35.1213 40.8508 -2.68211 11.7816 1.17274 -29.6933C5.43941 -75.599 39.854 -115.359 82.4191 -133.133C122.797 -149.994 170.035 -140.256 205.822 -115.149C235.947 -94.0141 236.823 -53.8756 246.141 -18.271C256.17 20.0508 282.521 60.8106 260.501 93.7792C237.538 128.159 188.991 133.432 147.931 128.768C112.318 124.723 87.7505 97.6768 63.4095 71.3947Z"
          fill="#FFFAD1"
        />
      </svg>
      <svg
        width="65"
        height="62"
        viewBox="0 0 65 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="blob-quiz-bleu"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-38.919 2.96445C-10.8241 1.07254 20.4975 -5.87426 40.8434 11.5469C63.3629 30.8293 69.9281 62.0589 61.4141 88.8747C53.3376 114.313 28.2818 132.992 -0.0909882 140.475C-23.9759 146.775 -45.6063 132.093 -68.3914 123.11C-92.9153 113.441 -125.606 110.575 -133.794 87.7612C-142.333 63.9714 -124.677 39.0277 -104.912 21.3621C-87.7687 6.03978 -63.0936 4.59238 -38.919 2.96445Z"
          fill="#DEEBF8"
        />
      </svg>
      {array}
      {!checkAnswers && (
        <div className="btn-container">
          <button className="intro-btn" onClick={checkAnswer}>
            Check answers
          </button>
        </div>
      )}
      {checkAnswers && (
        <div className="btn-container-score">
          {checkAnswer && <p>you scored {counter.size}/5 correct answers</p>}
          <button className="btn-playAgain" onClick={props.toggle}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
