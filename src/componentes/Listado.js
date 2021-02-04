import { Fragment } from 'react'
import Cita from './Cita';

const Listado = ({citas,eliminarCita}) => {

    if (citas.length===0) return null
    const mostrarCitas = citas.map(cita =>(
        <Cita 
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
        />
    ))
    return (
        <Fragment>
            {mostrarCitas}
        </Fragment>
    )
}
export default Listado;