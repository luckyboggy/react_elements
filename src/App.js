import React, { useState } from "react";
import Question from './components/quiz/Question';
import Result from './components/quiz/Result';
import './index.scss';

const questions = [
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_avstraliya_enl.jpg',
    variants: ['Австралия', 'Новая Зеландия', 'Аргентина', 'Мексика'],
    correct: 0,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_bagamckie_ostrova_enl.jpg',
    variants: ['Фарерские острова', 'Багамские острова', 'Сейшельские Острова', 'Соломоновы Острова'],
    correct: 1,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_finljandija_new_0.jpg',
    variants: ['Норвегия', 'Дания', 'Швеция', 'Финляндия'],
    correct: 3,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_italija_enl.jpg',
    variants: ['Мексика', 'Италия', 'Ирландия', 'Кот-д-Ивуар'],
    correct: 1,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_malayzija_new.jpg',
    variants: ['США', 'Либерия', 'Малайзия', 'Коста-Рика'],
    correct: 2,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_england1.jpg',
    variants: ['Шотландия', 'Англия', 'Ирландия', 'Уэльс'],
    correct: 1,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_bahrejn_enl.jpg',
    variants: ['Бахрейн', 'Катар', 'Кувейт', 'ОАЭ'],
    correct: 0,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/directory_names/flag_yemen_enl.jpg',
    variants: ['Египет', 'Йемен', 'Ирак', 'Сирия'],
    correct: 1,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_tunis_new.jpg',
    variants: ['Турция', 'Ливия', 'Вьетнам', 'Тунис'],
    correct: 3,
  },
  {
    flag: 'https://www.megaflag.ru/sites/default/files/images/shop/products/flag_kazahstan_new.jpg',
    variants: ['Узбекистан', 'Таджикистан', 'Казахстан', 'Туркменистан'],
    correct: 2,
  }

]

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    if (question.correct === index) {
      setCount(count + 1);
    }
    setTimeout(() => { setStep(step + 1) }, 250);
  }

  return (
    <div className="App">
      {
        step !== questions.length
          ? (<Question questions={questions} question={question} onClickVariant={onClickVariant} step={step} />)
          : (<Result count={count} questions={questions} />)

      }
    </div>
  );
}

export default App;
