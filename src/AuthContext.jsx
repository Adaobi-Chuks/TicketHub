import React,{createContext, useState, useContext} from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

    const login = (input) => {
        localStorage.setItem('user', JSON.stringify(input));
        setIsLoggedIn(input);
    }

    const logout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

