import "./assets/css/dashboard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserContext,useConnectUserContext, useUserToggleContex } from "./Components/context";

export default function Dashboard(props) {



  const usuario = useUserContext()
  const conectado = useConnectUserContext()
  

  console.log(conectado)
  console.log(usuario);

  return (

      <div className="dash-container">
        {conectado ? (
          <div>
            <h1>Hola {usuario}. ¿Que publicará hoy?</h1>
          </div>
        ) : (
          <div>
            <h2>Inicia sesión para poder publicar</h2>
          </div>
        )}
      </div>

  );
}
