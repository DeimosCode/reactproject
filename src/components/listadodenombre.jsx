import React, { useState } from "react";
import uniqid from 'uniqid'

function Listadonombres() {
        //creador de nombre
    const [nombre, setNombre] = useState('')
    const [listanombre, setListaNombre] = useState([])

    const addNombre = (e) => {
        e.preventDefault()
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaNombre([...listanombre, nuevoNombre])
        setNombre('')
    }
    //end crear nombre
    //eliminar
    const deleteNombre = (id) => {
        const nuevaArray = listanombre.filter(item => item.id !== id)
        setListaNombre(nuevaArray)
    }

    return (
        <div>
            <h2>Aplicacion de CRUD BASICA</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listanombre.map(item =>

                                <li key={item.id} className="list-group-item">
                                    {item.tituloNombre}
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-danger" onClick={() => {deleteNombre(item.id)}}>
                                        borrar
                                    </button>
                                    </div>
                                </li>

                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>formulario de agregar nombre</h2>
                    <form onSubmit={(e) => addNombre(e)}>
                        <br />
                        <input className="form-control mt-3" type="text" placeholder="ingrese nombre" onChange={(e) => { setNombre(e.target.value) }} value={nombre}/>
                        <br />
                        <input className="btn btn-info btn-block" type="submit" value={'Registrar nombre'} />
                    </form>
                </div>
            </div>
        </div>
    )


}

export default Listadonombres