import "./assets/css/login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext, useUserToggleContex } from "./Components/context";

export default function Login(props) {
  // Declaramos const para useState
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [conectado, setConectado] = useState(null);

  const context = useUserContext()

  let navigate = useNavigate();
  let path = "/";
  if (token) {
    setTimeout(() => {

      navigate(path);
      window.location.reload()
    }, 3000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user === "") {
      console.log("nope");
      return;
    }
    try {
      const response = await axios.get(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/users"
      );

      const isOn = await axios.put(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/users/1",
        {
          conectado: true,
        }
      );

      console.log(response.data);

      if (data === null) {
        setData(response.data);
        setConectado(isOn.data);
      }
      const userData = data.find(
        (item) => item.user === user && item.password === password
      );

      if (!userData) {
        setError("Usuario o contraseña inválidos");
      } else {
  
        setToken(isOn.data);
      }
    } catch (error) {
      console.error("login failed" + error);
    }
  };



  const handleLogin = () => {

    setConectado(true)

  };

  return (
    <section className="section">
      {token ? (
        <div className="login-container">Bienvenido, serás redireccionado</div>
      ) : (
        <div className="login-container">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1 className="h1-login">Ingrese su usuario</h1>
            <input
              className="input-login"
              placeholder="Usuario"
              type="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
            <input
              className="input-login"
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className="button-login"
              type="submit"
              onClick={handleLogin}
              href="/"
            >
              Enviar
            </button>

            {error && <div className="input-login">{error}</div>}

            <div className="info-container">
              <a className="p-info-login">¿Olvidaste tu contraseña?</a>
              <a className="p-info-reg" href="/register">
                Registrate para iniciar sesión
              </a>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
