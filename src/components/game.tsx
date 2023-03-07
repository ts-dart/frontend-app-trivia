import { useContext, useState, useEffect } from 'react';

import Context from '../context/context';
import Loading from './loading';
import Results from './results';

let SHUFFLED_LIST = [''];

const FEEDBACK = document.createElement('div');
document.body.appendChild(FEEDBACK);

export default function Game() {
  const { apiResponse, setApiResponse } = useContext(Context);
  const [timer, setTimer] = useState(30);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [hits, setHits] = useState(0);

  const goToNewQuestion = () => {
    if (index < apiResponse.length - 1) {
      setIndex(index + 1);
      setTimer(30);
    }
  };

  const checkTimer = () => {
    if (!timer) goToNewQuestion();
    if (timer === 29.5) FEEDBACK.classList.remove('incorrectAnswer', 'correctAnswer');
  };

  const shuffleArray = (arr:string[]) => {
    if (timer >= 29) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      SHUFFLED_LIST = arr;
    }
    return SHUFFLED_LIST;
  };

  const checkAnswer = (target:HTMLButtonElement) => {
    if (target.textContent === apiResponse[index].correct_answer) {
      switch (apiResponse[index].difficulty) {
        case 'fácil':
          setScore(score + 1);
          break
        case 'médio':
          setScore(score + 2);
          break
        case 'difícil':
          setScore(score + 3);
          break
        default:
          setScore(score + 1);
      }
      setHits(hits + 1);
      FEEDBACK.classList.add('correctAnswer');
      FEEDBACK.classList.remove('incorrectAnswer');
    } else {
      FEEDBACK.classList.add('incorrectAnswer');
      FEEDBACK.classList.remove('correctAnswer');
    }
    goToNewQuestion();
  };

  useEffect(() => {
    fetch("https://backend-app-trivia.vercel.app/")
      .then((data) => data.json())
      .then((data) => {
        setApiResponse(data);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    checkTimer();
    const interval = setInterval(() => setTimer(timer > 0 ? timer - 1 : 0), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  if (loading) return <Loading/>

  if (index === apiResponse.length - 1) {
    return <Results 
      score={score} 
      hits={hits}
      numberOfQuestions={apiResponse.length}
    />
  }

  console.log(apiResponse[index].correct_answer);
  return(
    <div className='center-div' id='menu-game'>
      <div id='menu-indexes'>
        <h2>Tempo: {timer}</h2>
        <h2>Pontos: {score}</h2>
      </div>
      <h1>{apiResponse[index].question.replace(/&quot;/g, '').replace(/&#039;/g, '')}</h1>
      <p>{apiResponse[index].category}</p>
      <p>Dificuldade: {apiResponse[index].difficulty}</p>
      <div id='buttons-selector'>
        {shuffleArray([apiResponse[index].correct_answer,
          ...apiResponse[index].incorrect_answers]).map((response, index) => (
            <button
              key={index} 
              onClick={({target}) => checkAnswer(target as HTMLButtonElement)}
            >
              {response.replace(/&quot;/g, '').replace(/&#039;/g, '')}
            </button>
          ))}
      </div>
    </div>
  );
}
