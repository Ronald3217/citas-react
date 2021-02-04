import { useState, useEffect } from 'react'

import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'

function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales){
    citasIniciales = [];
  }
  const [citas, actualizarCitas] = useState(citasIniciales)

  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(citas))
    } else {
      localStorage.setItem('citas',JSON.stringify([]))
    }
  },[citas,citasIniciales])

  //Funcion para eliminar la cita
  const eliminarCita = id => {
    const filtradas = citas.filter(cita => cita.id !== id)
    actualizarCitas(filtradas)
  }

  const titulo = citas.length===0 ? 'No Hay Citas' : 'Administra Tus Citas' 

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center'>Administrador de Pacientes de Veterinaria</h1>
        <div className='col-md-6'>
          <Formulario
            actualizarCitas={actualizarCitas}
            citas={citas}
          />
        </div>
        <div className='col-md-6'>
          <h2>{titulo}</h2>
          <Listado
            citas={citas}
            eliminarCita={eliminarCita}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
