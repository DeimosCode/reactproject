import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users =await res.data
        setUsuarios(users)
    }

    useEffect(()=>{
        obtenerUsuarios()
    },[])

  return (
    <div>
        <h2>lista de usuarios</h2>

        {
            usuarios.map((item)=> (
                <div>
                    <Link to={`/usuarios/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Usuarios
