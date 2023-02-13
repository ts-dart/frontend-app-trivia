import { Link } from 'react-router-dom';

export default function InitialPage() {
  return(
    <div id='div-initial-page'>
      <h1>Olá seja bem vindo ao TTrivia</h1>
      <p>Voce tem 30 segundos para responder cada pergunta!</p>
      <p>Perguntas de nivel Easy valem 1 ponto</p>
      <p>Perguntas de nivel Medium valem 2 pontos</p>
      <p>Perguntas de nivel Hard valem 3 pontos</p>
      <Link to='/game'>
        <button>Click para começar a jogar!</button>
      </Link>
    </div>
  )
}
