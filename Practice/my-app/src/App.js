import PassengerTicket from './PassengerTicket';
import {Lol, Counter} from './week4';
import { MyMessage, SecondCounter, Menu, Exercise06 } from './week5';
import { Home, Profile, Login, Navbar } from './exercise16'

import TicTacToe from './practice';
import './App.css';

function Week4() {
  return (
    <div className="container">
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

function Exercise16() {
  return (
    <div className="exercise16">
      <Home />
      <Profile />
      <Login />
      <Navbar />
    </div>
  )
}

function Week5 () {
  return (
    <div className="week5-exercises">
      <Exercise06 />
      <Menu />
      <SecondCounter />
      <MyMessage />
      <Exercise16 />
    </div>

  )
}

function App() {
  return (
    <div className="container">
      {false ? <Week4 /> : <Week5 />}
    </div>
  )
}

export default App;
