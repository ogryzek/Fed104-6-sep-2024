import { UserContext } from './userContext';
import { useContext } from 'react';

function EditUser() {
    const user = useContext(UserContext);
  
    return (
      <div className="edit-user">
        <h2>User Data</h2>
        <input type="text" name="name" value={user.name}
          onChange={(e) => user.setName(e.target.value)}
          placeholder="Name"
        />
        <input type="email" name="email" value={user.email}
          onChange={(e) => user.setEmail(e.target.value)}
          placeholder="Email"
        />
        <input type="number" name="age" value={user.age}
          onChange={(e) => user.setAge(e.target.value)}
          placeholder="Age"
        />
      </div>
    )
}

export { EditUser };
