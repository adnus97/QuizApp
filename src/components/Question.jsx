import React from "react";
import { useState } from "react";

export default function Question(props) {
  const [background, setbackground] = useState(null);

  const activeStyles = {
    backgroundColor: "#D6DBF5",
    border: "0.7px solid transparent",
  };
  const inactiveStyles = {
    backgroundColor: "#FFF",
    border: "0.7px solid #293264",
    opacity: props.check ? "0.7" : "1",
  };
  const correctAnswerStyle = {
    backgroundColor: "#94D7A2",
    border: "0.7px solid transparent",
  };
  const incorrectAnswerStyle = {
    backgroundColor: "#F8BCBC",
    border: "0.7px solid transparent",
    opacity: props.check ? "0.7" : "1",
  };
  let variable = true;
  function toggle(id) {
    if (props.check) return;
    setbackground(id === background ? null : id);
    const element = props.answers[id];
    props.count((prevState) => {
      return element === props.correctAnswer
        ? prevState.add(`${props.index}:${element}`)
        : prevState;
    });
  }
  const arr = props.answers.map((el, index) => {
    let styles;
    if (props.check) {
      if (el === props.correctAnswer) {
        styles = correctAnswerStyle;
      } else if (el === props.correctAnswer && index == background) {
        styles = correctAnswerStyle;
      } else if (index == background) {
        styles = incorrectAnswerStyle;
      } else {
        styles = inactiveStyles;
      }
    } else {
      if (index == background) {
        styles = activeStyles;
      } else {
        styles = inactiveStyles;
      }
    }
    return (
      <div
        key={index}
        className="ans"
        onClick={() => toggle(index)}
        style={styles}
      >
        {el}
      </div>
    );
  });
  return (
    <div className="quizContainer">
      <p className="quest" dangerouslySetInnerHTML={{ __html: props.value }} />
      <div className="ans-container">{arr}</div>
    </div>
  );
}
