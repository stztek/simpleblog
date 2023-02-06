import { useEffect, useState } from "react";
import axios from "axios";
import { useDisconnectUserContext } from "./Components/context";
import { useNavigate } from "react-router-dom";



export default function Logout()
{
    const contextDisc = useDisconnectUserContext();

const [logout, setLogout] = useState(false)

let navigate = useNavigate();
let path = "/";




    const Logout = async() =>
    {
      const isOff = await axios.put(
        "https://63dd5d65df83d549cea0625b.mockapi.io/api/users/1",
        {
          conectado: false,
        }
        
      );
      setLogout(isOff.data)

      setTimeout(() => {

        navigate(path);
        window.location.reload()
      }, 50);
    }

    useEffect(() =>
    {   

    
        Logout()

    },[])

    return (
      <></>
    
    )
  
}