import {useState, useEffect} from 'react';

export function Exercise06() {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 14
    }

    return(
        <div className="exercise">
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>{
                user.age > 18 ? "Age: " + user.age 
                : "Sorry, you are too young to view this information."
            }</p>
        </div>
    )
}

export function Menu() {
    const users =  [{ name: 'John Doe', age: 35 }, { name: 'Jane Smith', age: 40 }]
    
    return (
        <ul>{users.map((user, i) => (
            <li key={i}>{user.name} - {user.age}</li>
        ))}
        </ul>
    );
}

export function MyMessage() {
    const messages = ['Hello', 'Hey', 'Hi', "What's up?", 'Yo'];
    const [message, setMessage] = useState(messages[0]);

    useEffect(()=>{
        setInterval(() => {
            let randIndex = Math.floor(Math.random() * messages.length);
            setMessage(messages[randIndex])
        }, 1500);
    }, []);

    return (
        <h2>The Message: {message}</h2>
    )
}

export function SecondCounter() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>{
            setSeconds(seconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds]);

    return (
        <h1>Counter: {seconds}</h1>
    )
}
