import React from 'react';
import '../styles/Login.css';

function Login({ onLogin}) {

    const [showLogin, setShowLogin] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if(username && password) {
            onLogin(username);
        }
    }

    return (
        <div className="loginContainer">
            <button onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'Hide Login' : 'Show Login'}
            </button>

            {showLogin && (
                <div className="loginContainer">
                    <form onSubmit={handleLogin} className="loginForm">
                        <h2>Login</h2>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
        </div>
    );

}

export default Login;