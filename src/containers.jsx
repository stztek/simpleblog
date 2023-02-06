import Contendor from "./Components/container";
import "./assets/css/contenedores.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./dashboard";

export default function Contenedores(props) {
  // Lista de variables
  const [IsLoggenIn, setIsLoggedIn] = useState(true);
  const [listCont, setListCont] = useState([]);

  const handleSubmit = async () => {
    setIsLoggedIn(true);
  };

  async function fetchApi() {
    const responseTittles = await axios.get(
      `https://63dd5d65df83d549cea0625b.mockapi.io/api/Posting`
    );

    const respKey = responseTittles.data?.map((todo, index) => {
      return (
        <Contendor
          key={index}
          tittle={todo.tittle}
          desc={todo.desc}
          name={todo.name}
        />
      );
    });

    setListCont(respKey);
    console.log(listCont.length);
  }
  // Traemos la petición de la API

  useEffect(() => {
    fetchApi();
    handleSubmit();
    console.log("jojo" + listCont.length + IsLoggenIn);
  }, []);

  //Retornamos el contenedor en pantalla

  return (
    <section className="section">
      <Dashboard />
      {IsLoggenIn ? <div className="contenedores">{listCont}</div> : <></>}
    </section>
  );
}
