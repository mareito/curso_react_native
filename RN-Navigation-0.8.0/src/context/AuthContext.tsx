//Creacion del Context 

import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

// Definir la estructura de datos del context 
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favouriteIcon?: string
}

// Definicion el estado inicial 
export const authInitialState: AuthState = {
  isLoggedIn: false
}

// Definicion de lo que el contexto ofrece a los hijos
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavouriteIcon : (iconName: string) => void;
  logout: () => void;
  changeUserName : (userName: string) => void;
}

//Crear el contexto 
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es el proveedor del estado (El Componente) 
export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const singIn = () => {
    console.log('dispatching');
    dispatch({type: 'signIn'});
  }

  const logout = () => {
    console.log('dispatching');
    dispatch({type: 'logout'});
  }

  const changeFavouriteIcon = (iconName: string) => {
    dispatch({type:'changeFavIcon', payload: iconName});
  }

  const changeUserName = (userName: string) => {
    dispatch({type:'changeUserName', payload: userName});
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn: singIn,
      changeFavouriteIcon,
      logout,
      changeUserName
    }}>
      {children}
    </AuthContext.Provider>
  )
}
