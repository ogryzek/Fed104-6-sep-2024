import logo from './logo.svg';
import './App.css';

function Lol() {
  let name = 'Drew';

  return (
    <p>Hello from me. My name is {name}</p>
  )
}



function App() {
  return (
      <div>
        <h1>Hello World!</h1>
        <Lol />
      </div>
  );
}

export default App;
