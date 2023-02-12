import { Link } from 'react-router-dom';

export default function InitialPage() {
  return(
    <div>
      <h1>Pagina inicial</h1>
      <Link to='/game'>
        <button>Começar a jogar</button>
      </Link>
    </div>
  )
}