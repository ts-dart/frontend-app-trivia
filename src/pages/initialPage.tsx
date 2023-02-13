import { Link } from 'react-router-dom';

export default function InitialPage() {
  return(
    <div id='div-initial-page' className='center-div'>
      <h1>Olá seja bem vindo ao TTrivia</h1>
      <p>Voce tem 30 segundos para responder cada pergunta!</p>
      <p id='firts'>Perguntas de nivel Easy valem 1 ponto</p>
      <p id='second'>Perguntas de nivel Medium valem 2 pontos</p>
      <p id='third'>Perguntas de nivel Hard valem 3 pontos</p>
      <Link to='/game'>
        <button>Click para começar a jogar!</button>
      </Link>
    </div>
  )
}
