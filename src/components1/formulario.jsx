import React from "react";
import { useState } from "react";


const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar = (evento) => {
        evento.preventDefault()
        console.log('pulsado el boton')
        if(!nombre.trim()){
            console.log('el nombre esta vacio')
        }
        if(!edad.trim()){
            console.log('la edad esta vacio')
        }
    }

    return (
        <div className="container">
            <form onSubmit={validar} action="" className="form-group">
                <input  placeholder="introduce el nombre" className="form-control mb-3" type="text" onChange={(e) => {setNombre(e.target.value)}} />
                <input placeholder="introduce la edad" className="form-control mb-3" type="number" onChange={(e) => {setEdad(e.target.value)}}/>
                <br />
                <input className="btn btn-info btn-block" type="submit" value="enviar" />
            </form>

        </div>
    )
}

export default Formulario