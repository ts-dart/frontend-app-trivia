import { Link } from 'react-router-dom';

interface props {
  score: number,
  hits: number,
  numberOfQuestions: number,
}

export default function Results(props:props) {
  return(
    <div className='center-div'>
      <h1>Voce fez um total de {props.score} pontos</h1>
      <h2>Voce acertou {props.hits} de {props.numberOfQuestions} perguntas</h2>
      <button onClick={() => window.location.reload()}>Iniciar novo jogo?</button>
      <Link to='/'><button id='backToInitResPage'>Voltar a tela de inicio?</button></Link>
    </div>
    )
}