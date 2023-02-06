import '../assets/css/contenedores.css'

export default function contendor(props)
{


    return(

        <div className="contenedor">
            <h1>{props.tittle}</h1>
            <p>{props.desc}</p>
            <p>{props.name}</p>
        </div>
    )
}