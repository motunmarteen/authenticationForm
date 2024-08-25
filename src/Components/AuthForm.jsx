import { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
    // Below are the state variables for form management

    // Toggle between login and sign-up modes
    const [isLogin, setIsLogin] = useState(true); 

    // Email input state
    const [email, setEmail] = useState(''); 

    // Password input state
    const [password, setPassword] = useState(''); 

    // Confirm password input state for sign-up mode
    const [confirmPassword, setConfirmPassword] = useState(''); 

    // Error message state
    const [error, setError] = useState(''); 

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic validation logic
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (isLogin) {
            // Placeholder for login logic
            console.log('Logging in with', { email, password });
        } else {
            // Placeholder for sign-up logic
            console.log('Signing up with', { email, password });
        }
    };

    // Function to toggle between login and sign-up modes
    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setError('');
    };

    return (
        <div className="auth-form-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {!isLogin && (
                    <div className="input-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="auth-button">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <p onClick={toggleAuthMode} className="toggle-auth-mode">
                {isLogin ? 'Create an account' : 'Already have an account? Log in'}
            </p>
        </div>
    );
};

export default AuthForm;