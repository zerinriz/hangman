import React from "react";

const Word = ({ randomWords, correctLetters }) => {
  return (
    <div className="word">
      {randomWords.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
