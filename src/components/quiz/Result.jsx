import React from "react";

const Result = ({count, questions}) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{`Ваш результат: ${count}  из ${questions.length}`}</h2>
      <a href="http://localhost:3000/react_elements">
      <button>Попробовать снова</button>
      </a>
      
    </div>
  );
};

export default Result;
/* "https://luckyboggy.github.io/react_elements/" */