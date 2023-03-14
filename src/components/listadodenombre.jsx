import React, { useState } from "react";
import uniqid from 'uniqid'

function Listadonombres() {
    //creador de nombre
    const [nombre, setNombre] = useState('')
    const [listanombre, setListaNombre] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)
   

    const addNombre = (e) => {
        e.preventDefault()
        if (!nombre.trim()) {
            setError('El campo nombre esta vacio')
            //esto hace que no guarde y retorne 
            return
        }
       
      
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaNombre([...listanombre, nuevoNombre])
        setNombre('')
        setError(null)
    }
    //end crear nombre
    //eliminar
    const deleteNombre = (id) => {
        const nuevaArray = listanombre.filter(item => item.id !== id)
        setListaNombre(nuevaArray)
    }
    // esto trae el nombre para modificar 
    const editar = (item) => {

       
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
        
    }
    //esto edita el nombre 
    const editarNombre = (e) => {

        
        
        
            console.log('hola')
            e.preventDefault()
            const Nuevoarray = listanombre.map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)
            setListaNombre(Nuevoarray)
            setModoEdicion(false)
            setNombre('')
            
       
       
       
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
                                        <button className="btn btn-danger" onClick={() => { deleteNombre(item.id) }}>
                                            borrar
                                        </button>
                                        <button className="btn btn-info" onClick={() => { editar(item) }}>
                                            editar
                                        </button>
                                    </div>
                                </li>

                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>formulario de agregar nombre</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre}>
                        <br />
                        <input className="form-control mt-3" type="text" placeholder="ingrese nombre" onChange={(e) => { setNombre(e.target.value) }} value={nombre} />
                        <br />
                        <input className="btn btn-info btn-block" type="submit" value={modoEdicion ? 'Editar nombre' : 'Registrar nombre'} />
                    </form>

                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ) :
                            (
                                <div>

                                </div>
                            )

                    }
                    
                </div>
            </div>
        </div>
    )


}

export default Listadonombres