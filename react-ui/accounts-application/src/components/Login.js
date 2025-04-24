import React, { useState } from "react";
import { useAuth } from "../services/AuthProviderService";
import { useData } from "../utils/Data";

function Login() {

    const { login } = useAuth();
    const { dataCache } = useData();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { username: username, password: password };
        try {
            const response = await fetch('http://localhost:8080/account-service/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                const json = await response.json();
                setData(json);
                dataCache(json);
                // Handle successful submission
                console.log('Form submitted successfully!');
            } else {
                // Handle error
                setLoading(false);
                console.error('Form submission failed.');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error submitting form:', error);
        }

        login(userData);
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form id="registrationForm" onSubmit={handleLogin}>
                                <div className="text-center">
                                    <h1>Sign In</h1>
                                </div>
                                <div className="form-group">
                                    <label for="email" className="my-2 mx-1">
                                        Email
                                    </label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email" required
                                        name="username"
                                        value={username}
                                        onChange={onChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="my-2 mx-1">
                                        Password
                                    </label>
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={onChangePassword}
                                        required />
                                </div>
                                <div className="text-center my-2">
                                    <button type="submit" className="btn btn-danger" >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;