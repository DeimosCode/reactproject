import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'

const Datosusuarios = () => {

    const [usuariodato, setDatousuarios] = useState([])
    const { id } = useParams()

    const obtenerDatosusuarios = async () => {


        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await res.data
        setDatousuarios(users)
    }

    useEffect(() => {
        obtenerDatosusuarios()
    }, [])
    return (
        <div>
            <h4>
                Datos del usuario {usuariodato.name}
            </h4>

            <p>ID: {usuariodato.id}</p>
            <p>username: {usuariodato.username}</p>
            <p>Email: {usuariodato.email}</p>
            <p>telefono: {usuariodato.phone}</p>
            <p>sitio web: {usuariodato.website}</p>
           
        </div>
    )
}
export default Datosusuarios