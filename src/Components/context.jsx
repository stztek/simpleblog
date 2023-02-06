import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const userContext = React.createContext();
const connectUserContext = React.createContext();
const disconnectUserContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}
export function useConnectUserContext() {
  return useContext(connectUserContext);
}
export function useDisconnectUserContext() {
  return useContext(disconnectUserContext);
}

export function useUserToggleContex() {
  return useContext(userToggleContext);
}

export function Context(props) {
  const [user, setUser] = useState("");
  const [conectado, setConectado] = useState();

  const cambiaLogin = async () => {
    try {
      const responseDates = await axios.get(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/users/1",
        { user, conectado }
      );
      setUser(responseDates.data.user);
      setConectado(responseDates.data.conectado);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    cambiaLogin();

  }, []);

  console.log(user);
  console.log(conectado);
  return (
    <disconnectUserContext.Provider value={conectado}>
      <connectUserContext.Provider value={conectado}>
        <userContext.Provider value={user}>
          <userToggleContext.Provider value={cambiaLogin}>
            {props.children}
          </userToggleContext.Provider>
        </userContext.Provider>
      </connectUserContext.Provider>
    </disconnectUserContext.Provider>
  );
}

export function ContextDisc(props){
  const [user, setUser] = useState("");
  const [conectado, setConectado] = useState();
  const LogoutYa = async () =>{

    try {
      const responseDates = await axios.put(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/users/1",
        {conectado }
      );
      setConectado(responseDates.data.conectado);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    LogoutYa();
  }, []);
  return (
    <disconnectUserContext.Provider value={conectado}>
      <connectUserContext.Provider value={conectado}>
        <userContext.Provider value={user}>
          <userToggleContext.Provider value={LogoutYa}>
            {props.children}
          </userToggleContext.Provider>
        </userContext.Provider>
      </connectUserContext.Provider>
    </disconnectUserContext.Provider>
  );
}
