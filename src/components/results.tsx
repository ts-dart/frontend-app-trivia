interface props {
  score: number,
  hits: number,
  numberOfQuestions: number,
}

export default function Results(props:props) {
  return(
    <div>
      <h1>Voce fez um total de {props.score} pontos</h1>
        <h2>Voce acertou {props.hits} de {props.numberOfQuestions - props.hits} perguntas</h2>
      </div>
    )
}