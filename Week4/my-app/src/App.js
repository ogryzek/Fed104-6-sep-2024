import PassengerTicket from './PassengerTicket';
import './App.css';

function Lol(props) {
  return (
    <div>
      <p>Hello from me. My name is {props.name}!</p>
      <p>I live in {props.city}.</p>
    </div>
  )
}

function App() {
  return (
      <div class="container">
        <h1>Hello World!</h1>
        <Lol name="Drew" city="Vancouver"/>
        <PassengerTicket name="Drew" destination="Hawaii" greeting="Dr" seat="44A"/>
      </div>
  );
}

export default App;
