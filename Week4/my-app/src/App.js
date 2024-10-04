import PassengerTicket from './PassengerTicket';
import {Lol, Counter} from './week4';
import TicTacToe from './practice';
import './App.css';

function App() {
  return (
      <div class="container">
        <Counter startNum={0}/>
        <Counter startNum={5}/>
        <Counter startNum={16}/>
        <h1>Hello World!</h1>
        <Lol name="Drew" city="Vancouver"/>
        <PassengerTicket name="Drew" destination="Hawaii" greeting="Dr" seat="44A"/>
        <TicTacToe />
      </div>
  );
}

export default App;
