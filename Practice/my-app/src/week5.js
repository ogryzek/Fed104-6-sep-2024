import {useContext, createContext, useState, useEffect} from 'react';

const UserContext = createContext();

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
        }, 2000);
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

export function MySecondCounter() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() =>{
        const intervalId = setInterval(() => {
            setSeconds(seconds - 1);
        }, 250);

        return(() => {
            clearInterval(intervalId)
        });

    }, [seconds]);

    return (
        <p1>Count: {seconds}</p1>
    )
}

function UserDisplay() {
    const user = useContext(UserContext)
    
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}

export function Exercise11() {
    const user = {
        name: 'Joe',
        email: 'joe@example.com',
        age: 27
    }

    return (
        <UserContext.Provider value={user}>
            <UserDisplay />
        </UserContext.Provider>
    )
}