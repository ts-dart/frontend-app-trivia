import { useContext, useState, useEffect } from 'react';
import { questionInfo } from '../types/interfaces';

import Context from '../context/context';
import Loading from './loading';

let SHUFFLED_LIST = [''];

export default function Game() {
  const { apiResponse, setApiResponse } = useContext(Context);
  const [timer, setTimer] = useState(30);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const goToNewQuestion = () => {
    if (index < apiResponse.length) {
      setIndex(index + 1);
      setTimer(30);
    }
  };

  const checkTimer = () => {
    if (!timer) goToNewQuestion();
  };

  const shuffleArray = (arr:string[]) => {
    if (timer >= 29.5) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      SHUFFLED_LIST = arr;
    }
    return SHUFFLED_LIST;
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((data) => data.json())
      .then((data) => {
        const { results } = data;
        setApiResponse(results);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    checkTimer();

    const interval = setInterval(() => setTimer(timer > 0 ? timer - 1 : 0), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  if (loading) return <Loading/>

  return(
    <div>
      <h2>{timer}</h2>
      <h1>{apiResponse[index].question}</h1>
      <p>{apiResponse[index].category}</p>
      <p>{apiResponse[index].difficulty}</p>
      {shuffleArray([apiResponse[index].correct_answer,
        ...apiResponse[index].incorrect_answers]).map((response, index) => (
          <button key={index}>{response}</button>
        ))}
      <p>{apiResponse[index].correct_answer}</p>
    </div>
  );
}
