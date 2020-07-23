import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0); //Devuelve un arreglo con dos campos

    //handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);
    }
    return (
        <>
            <h1>Valor del componente:</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>sumar +1</button>
        </>
    );
}

CounterApp.prototypes = {
    value: PropTypes.number.isRequired,  //Obliga a recibir esta propiedad
}


export default CounterApp;