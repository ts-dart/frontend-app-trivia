import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from '../pages/gamePage';
import InitialPage from '../pages/initialPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <InitialPage/> }/>
        <Route path="/game" element={ <GamePage/> }/>
      </Routes>
    </BrowserRouter>
  );
}
