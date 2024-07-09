import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/tictactoe';

function App() {
  return (
    <div className='container'>
      <div className='header'>TIC-TAC-TOE</div>
      <TicTacToe />
    </div>
  );
}

export default App;
