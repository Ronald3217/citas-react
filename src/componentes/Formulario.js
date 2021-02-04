import {useState,Fragment} from 'react'
import PropTypes from 'prop-types'

import shortid from 'shortid'

const Formulario = ({actualizarCitas,citas})=> {

    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const [error, guardarError ] = useState(false)

    const handleChange = (e)=> {
       actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const {mascota, propietario, fecha, hora, sintomas } = cita
    const handleSubmit = (e)=> {
        e.preventDefault();
        if (  mascota.trim()==='' || 
              propietario.trim()==='' || 
              fecha.trim()==='' ||
              hora.trim()==='' ||
              sintomas.trim()===''
            ){
        guardarError(true);
        return
        }
        else { 
        const id = shortid.generate()
        const nuevaCita = { ...cita, id };
        actualizarCitas([...citas,nuevaCita])
        console.log(nuevaCita)
        actualizarCita({
          mascota:'',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
        })
        guardarError(false)
        }
    }

    const mostrarAlerta = (mensaje) => (
      <div className="alert alert-danger mt-2" role="alert">
    {mensaje}
  </div>
    )
    return (
        <Fragment>
            <h2>Crear cita</h2>
          <form onSubmit={handleSubmit} >
            <div className='form-group'>
              <label>
                Mascota:
              </label>
              <input  type='text'
                      className='form-control form-control-lg'
                      placheholder='Nombre de la Mascota'
                      name='mascota'
                      value={mascota}
                      onChange={handleChange}
              />
            </div>
            {error ? mostrarAlerta('El Nombre de la Mascota Es Obligatorio') : null}
            <div className='form-group'>
              <label>
                Propietario:
              </label>
              <input  type='text'
                      className='form-control form-control-lg'
                      placheholder='Propietario de la mascota'
                      name='propietario'
                      value={propietario}
                      onChange={handleChange}
              />
            </div>
            {error ? mostrarAlerta('El Nombre de la propietario Es Obligatorio') : null}
            <div className='form-group'>
              <label>
                Fecha:
              </label>
              <input  type='date'
                      className='form-control form-control-lg'
                      onChange={handleChange}
                      name='fecha'
                      value={fecha}
              />
            </div>
            {error ? mostrarAlerta('La fecha para la Cita Es Obligatoria') : null}
            <div className='form-group'>
              <label>
                Hora:
              </label>
              <input  type='time'
                      className='form-control form-control-lg'
                      onChange={handleChange}
                      name='hora'
                      value={hora}
              />
            </div>
            {error ? mostrarAlerta('La hora para la Cita Es Obligatoria') : null}
            <div className='form-group'>
              <label>
                Sintomas:
              </label>
              <textarea type='text'
                        className='form-control form-control-lg'
                        onChange={handleChange}
                        name='sintomas'
                        value={sintomas}
              ></textarea>
            </div>
            {error ? mostrarAlerta('Los sintomas son obligatorios') : null}
            <div className="d-grid gap-2 py-4">
              <button   className="btn btn-secondary" 
                        type="submit"
              >Agregar Cita</button>
            </div>
          </form>
        </Fragment>
    )
}

Formulario.propTypes = {
  actualizarCitas:PropTypes.func.isRequired,
  citas:PropTypes.array.isRequired
}

export default Formulario;