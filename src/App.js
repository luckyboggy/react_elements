import React, { useState } from "react";
import Question from './components/quiz/Question';
import Result from './components/quiz/Result';
import './index.scss';

const questions = [
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_avstraliya_enl.jpg',
    variants: ['Австралия', 'Новая Зеландия', 'Аргентина', 'Мексика'],
    correct: 0,
  }
]

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  return (
    <div className="App">
      <Question question={question} />
      <Result />
    </div>
  );
}

export default App;
