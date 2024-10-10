import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="Home">
            <h2>Home lol</h2>
            <p>This is the content of my home component.</p>
        </div>
    )
}

function Profile() {
    return (
        <div className="Profile">
            <h2>Profile lol</h2>
            <p>Welcome to my profile. This is what it is.</p>
        </div>
    )
}

function Login() {
    return (
        <div className="Login">
            <h2>Login lol</h2>
            <form>
                Username: <input></input><br />
                Password: <input type="password"></input><br />
                <button type="submit">login</button>
            </form>
        </div>
    )
}

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link><br />
            <Link to="/profile">Profle</Link><br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export { Home, Profile, Login, Navbar }