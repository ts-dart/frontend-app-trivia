import Provider from './context/provider';
import Router from './router/router';
import './style/style.css';
import './style/initialPage.css';
import './style/game.css';

function App() {
  return (
    <Provider>
      <Router/>
    </Provider>
  );
}

export default App;