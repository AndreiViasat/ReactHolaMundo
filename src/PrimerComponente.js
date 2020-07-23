import React from 'react'
import PropTypes from 'prop-types'

const PrimerComponente = ({ saludo, valor01 = 'soy un valor por defecto' }) => {

    return (
        <>
            <h1>{saludo}</h1>
            <p>{valor01}</p>
            <p>Soy un espacio</p>
        </>
    );
}

PrimerComponente.prototypes = {
    saludo: PropTypes.string.isRequired,  //Obliga a recibir esta propiedad
}

// Metodo para valores por defecto
PrimerComponente.defaultProps = {
    valor01: 'Valor por defecto'
}

export default PrimerComponente;