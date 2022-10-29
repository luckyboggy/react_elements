import React from "react";

const Question = ({ questions, question, onClickVariant, step }) => {
  const progressPersent = Math.round((step / questions.length) * 100);

  return (
    <div className="question">
      <div className="progress">
        <div
          style={{ width: `${progressPersent}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h2>Угадай страну по флагу</h2>
      <img src={question.flag} className="img_flag" />
      <ul>
        {question.variants.map((variant, index) => (
          <li
            key={variant}
            onClick={(e) => onClickVariant(index, e)}
          >
            {variant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
