import React, {useState } from "react";


const Temperatura = () => {

    const [temperatura,setTemperatura] = useState(19)
    const subir = () =>{
        setTemperatura(temperatura+1)
    }
    const bajar = () =>{
        setTemperatura(temperatura-1)
    }

    return (
        
            <div className="container">
                <h2>la temperatura es: {temperatura}</h2>
                <p>
                    {
                        temperatura > 21 ? 'hace calorcito'  : 'hace fresquito'
                    }
                </p>
                <button className="btn btn-primary" onClick={subir} >aumentar temperatura</button>
                <button className="btn btn-primary" onClick={bajar} >reducir temperatura</button>
            </div>
        
    )
}

export default Temperatura