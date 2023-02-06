import "./assets/css/register.css";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [user, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/users",
        {
          user,
          email,
          password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="section">
      <div className="reg-container">
        <form onSubmit={handleSubmit} className="register-form-container">
          <input
            className="input-reg"
            type="text"
            name="username"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-reg"
            type="email"
            name="email"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-reg"
            type="password"
            name="password"
            placeholder="Clave"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="input-reg" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}
