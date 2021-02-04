import React from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => {

    if (cita === {} ) return null

    const {mascota, propietario, id, fecha, hora, sintomas } = cita

    //formateando la fecha
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-MX',options);

    return (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">Mascota: {mascota}</h5>
                    <p className="card-text">Propietario: {propietario}.</p>
                    <p className="card-text">Fecha: {fechaFormateada}.</p>
                    <p className="card-text">Hora: {hora}.</p>
                    <p className="card-text">Sintomas: {sintomas}.</p>
                    <button 
                        className="btn btn-danger"
                        onClick={()=> eliminarCita(id)}
                    >
                        Eliminar &times;</button>
                </div>
            </div>
    )
}
Cita.propTypes = {
    cita:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired
}
export default Cita;