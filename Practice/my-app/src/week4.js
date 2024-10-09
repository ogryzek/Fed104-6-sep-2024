import {useState} from 'react';

function Lol(props) {
    return (
      <div>
        <p>Hello from me. My name is {props.name}!</p>
        <p>I live in {props.city}.</p>
      </div>
    )
  }
  
function Counter(lol) {
    const [count, setCount] = useState(lol.startNum);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export {Lol, Counter};

