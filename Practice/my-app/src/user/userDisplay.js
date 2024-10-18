import { useContext } from 'react';
import { UserContext } from './userContext';

function UserDisplay() {
    const { age, name, email } = useContext(UserContext);
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export { UserDisplay };
