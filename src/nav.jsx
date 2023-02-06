import "./assets/css/nav.css";
import { useState, useEffect } from "react";
import {
  useConnectUserContext,
  useUserToggleContex,
} from "./Components/context";

export default function Nav() {
  const conectado = useConnectUserContext();

  return (
    <header>
      <nav>
        <a className="h1-nav" href="/">
          Simple Blog
        </a>

        <div className="nav-container">
          <a href="/">Home</a>
          {conectado ? (
            <a placeholder="hola" href="/post">
              Publicar nueva nota
            </a>
          ) : null}

          {conectado ? (
            <a placeholder="hola" href="/logout">
              Cerrar Sesión
            </a>
          ) : (
            <a placeholder="hola" href="/login">
              Iniciar Sesion
            </a>
          )}

          {!conectado ? (
            <a placeholder="hola" href="/register">
              Cerrar Sesión
            </a>
          ) : (
            null
          )}
        </div>
      </nav>
    </header>
  );
}
