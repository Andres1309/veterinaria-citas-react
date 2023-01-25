const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  //console.log(paciente)
  const hora = Date(paciente.hora)
  console.log(hora)

  const handleEliminar = () => {
    const respuesta = confirm('Desea eliminar este paciente?');

    if(respuesta) {
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className="m-3 bg-slate-500/50 shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-900 uppercase">Nombre: {''}
        <span className="font-bold normal-case text-lg text-white">{paciente.nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-900 uppercase">Propietario: {''}
        <span className="font-bold normal-case text-lg text-white">{paciente.propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-900 uppercase">Email: {''}
        <span className="font-bold normal-case text-lg text-white">{paciente.email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-900 uppercase">Fecha: {''}
        <span className="font-bold normal-case text-lg text-white">{paciente.fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-900 uppercase">Hora: {''}
        <span className="font-bold normal-case text-lg text-white">{paciente.hora}</span>
      </p>

      <p className="font-bold mb-3 text-gray-900 uppercase">sintomas: {''}
        <span className="font-bold normal-case text-lg text-white">{paciente.sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white
        font-bold uppercase rounded-lg"
        onClick={() => setPaciente(paciente)}>Editar</button>

        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white
        font-bold uppercase rounded-lg"
        onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente