import React,{useState, useEffect} from "react";

const Base = () => {

    const [nombre, setNombre] = useState('abraham')

    useEffect (() => {
        setTimeout (() => {
            setNombre('pedro')
        },10000)
    })
   
    
    return (



        <div>
           <h1>esta es la base de la pagina</h1>

           {nombre}
        </div>
    )

}

export default Base
