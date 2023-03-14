import React from "react";

const Bienvenida = (props) => {
   
    const {nombre} = props
    return (

        <div>
            <h2>
                {nombre}
            </h2>
        </div>
    )

}

export default Bienvenida