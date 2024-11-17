import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Quina from './pages/Quina';
import Timemania from './pages/Timemania';
import LotteryRoute from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<LotteryRoute/>);