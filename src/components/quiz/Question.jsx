import React from "react";

const Question = ({ question }) => {
  return (
    <div className="question">
      <div className="progress">
        <div className="progress__inner"></div>
      </div>
      <h2>Угадай страну по флагу</h2>
      <img src={question.flag} className="img_flag" />
      <ul>
        <li>{question.variants[0]}</li>
        <li>{question.variants[1]}</li>
        <li>{question.variants[2]}</li>
        <li>{question.variants[3]}</li>
      </ul>
    </div>
  );
};

export default Question;
