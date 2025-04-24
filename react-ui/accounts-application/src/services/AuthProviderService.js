import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        // Check for stored user 
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (user && token) {
            setUser(JSON.parse(storedUser));
            setAuthToken(JSON.parse(token));
        }
    }, []);

    const login = (userData, tokenData) => {
        setUser(userData);
        setAuthToken(tokenData)
        // Store user in local storage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', JSON.stringify(tokenData));
    };

    const logout = () => {
        setUser(null);
        setAuthToken(null)
        // Remove user from local storage
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    const value = { user, authToken, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access the authentication context
const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };