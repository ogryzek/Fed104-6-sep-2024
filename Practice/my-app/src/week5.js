
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
