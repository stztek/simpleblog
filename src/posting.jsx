import { useState } from "react";
import "./assets/css/posting.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function PostingTask() {
  const [tittle, setTittle] = useState("");
  const [desc, setDesc] = useState("");


  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responsePost = await axios.post(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/Posting",
        {
          tittle,
          desc,
        }
      );
      console.log(responsePost.data);
    } catch (error) {
      console.error(error);
    }

    routeChange()
  };




  return (
    <section className="section">
      <div className="post-container">
        <h1>PUBLICAR POST</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            className="input-post"
            placeholder="Titulo"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
          ></input>
          <textarea
            className="text-post"
            placeholder="Descripcion"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
