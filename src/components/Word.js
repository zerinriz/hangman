import React from "react";

const Word = ({ randomWords, correctLetters }) => {
  return (
    <div className="word">
      {randomWords.split("").map((letter, i) => {
        if (letter === " ") {
          return (
            <span
              className="letter"
              key={i}
              style={{ borderBottom: "3px solid #5aa59b" }}
            >
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          );
        } else {
          return (
            <span
              className="letter"
              key={i}
              style={{ borderBottom: "3px solid white" }}
            >
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Word;
