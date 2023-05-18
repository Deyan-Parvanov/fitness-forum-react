import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceGenerator } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();


export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const authService = authServiceGenerator(auth.accessToken);
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);
    
          setAuth(result);
    
          navigate('/');
        } catch (error) {
          console.log('Error during login!');
        }
      };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData} = values;
        if (confirmPassword !== registerData.password) {
          return;
        } else (
          console.log(`Passwords don't match!`)
        )
    
        try {
          const result = await authService.register(registerData);
    
          setAuth(result);
    
          navigate('/');
        } catch (error) {
          console.log('Error during register!');
        }
      };

    const onLogout = async () => {
        await authService.logout();
    
        setAuth({});
      };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
      };


    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

export const useAuthContext= () => {
    const context = useContext(AuthContext);
    return context;
}
