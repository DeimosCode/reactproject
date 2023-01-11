import React, { Fragment,useState } from "react";

export const Contador = () => {

    const [numero,setnumero] = useState(0)
    const aumentar = () =>{
        setnumero(numero+1)

    }
    const reducir = () =>{
        setnumero(numero-1)
        
    }

    return(
        <Fragment>
            <h2>cantidad del contador: {numero} </h2>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={reducir}>reducir</button>
        </Fragment>
    )
}

export default Contador