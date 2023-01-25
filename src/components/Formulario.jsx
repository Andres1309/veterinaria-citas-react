import { useEffect, useState } from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setHora(paciente.hora)
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if( [nombre, propietario, email, fecha, hora, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')

      setError(true);
      return;
    }
    
    setError(false);

    const objetoPacientes = {
      nombre, 
      propietario, 
      email, 
      fecha,
      hora,
      sintomas,
      
    }

    if(paciente.id) {
      //Editando el Registro
      objetoPacientes.id = paciente.id
      console.log(objetoPacientes)
      console.log(paciente)

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState )

        setPacientes(pacientesActualizados)
        setPaciente({})

    } else {
      //Nuevo Registro y agregamos una id al elemento
      objetoPacientes.id = generarId(),
      // Toma el arreglo original state pacientes de app.jsx y agrega los nuevos pacientes
      setPacientes([...pacientes, objetoPacientes]);

    }

    

    //Reinicia el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setHora('')
    setSintomas('');

  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center font-bold">
            Añade Pacientes y {''}
            <span className="text-indigo-700 font-bold">Administralos</span>
        </p>

        <form onSubmit={handleSubmit}
        className="bg-slate-500/50 shadow-md rounded-lg py-10 px-5 mb-10">
          { error && <Error mensaje = 'Todos los campos son obligatorios'/>}

            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-900 uppercase font-bold">
                Nombre Mascota
              </label>
              <input
                  id="mascota"
                  type="text"
                  placeholder="Nombre de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-white bg-slate-500/50 rounded-md"
                  value = {nombre}
                  onChange = {(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-900 uppercase font-bold">
                Nombre Propietario
              </label>
              <input
                  id="propietario"
                  type="text"
                  placeholder="Nombre del Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-white bg-slate-500/50 rounded-md"
                  value = {propietario}
                  onChange = {(e) => setPropietario(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-900 uppercase font-bold">
                Email
              </label>
              <input
                  id="email"
                  type="email"
                  placeholder="Email Contacto Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-white bg-slate-500/50 rounded-md"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-900 uppercase font-bold">
                Fecha
              </label>
              <input
                  id="alta"
                  type="date"
                  className="border-2 w-full p-2 mt-2 placeholder-white bg-slate-500/50 rounded-md"
                  value = {fecha}
                  onChange = {(e) => setFecha(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="hora" className="block text-gray-900 uppercase font-bold">
                Hora
              </label>
              <input
                  id="hora"
                  type="time"
                  className="border-2 w-full p-2 mt-2 placeholder-white bg-slate-500/50 rounded-md"
                  value = {hora}
                  onChange = {(e) => setHora(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-900 uppercase font-bold">
                Síntomas
              </label>
              <textarea
                  id="sintomas"
                  placeholder="Describe los Síntomas"
                  className="border-2 w-full p-2 mt-2 placeholder-white bg-slate-500/50 rounded-md"
                  value = {sintomas}
                  onChange = {(e) => setSintomas(e.target.value)}
              />
            </div>
            
              <input
                type = "submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
                hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }/>
            
            
        </form>
    </div>
  )
}

export default Formulario