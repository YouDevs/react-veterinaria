import {useState, useEffect} from 'react'
import Error from './Error'

const Form = ({patients, setPatients}) => {

  const [name, setName] = useState('')
  const [owned, setOwned] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptom, setSymptom] = useState('')

  const [error, setError] = useState(false)

  const idGenerator = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form:
    if( [name, owned, email, date, symptom].includes('') ) {
      console.log('Hay al menos un campo vacío')

      setError(true)

      return
    }

    setError(false)

    // Objeto de patient
    const objPatient = {
      name,
      owned,
      email,
      date,
      symptom,
      id: idGenerator()
    }

    setPatients([...patients, objPatient])

    //Resetear Formulario:
    setName('')
    setOwned('')
    setEmail('')
    setDate('')
    setSymptom('')

  }

  return (
    <div className='md:w-1/2 lg:2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg my-5 text-center'>
        Añade {''}
        <span className='text-indigo-600 font-bold'>y Administra Pacientes</span>
      </p>

      <form
        className='bg-white shadow-sm rounded-sm py-10 px-5 mb-10'
        onSubmit={ handleSubmit }
      >
        {/* { error && ( <Error msg='Todos los campos son obligatorios' /> )} */}

        {/* Con children 👇 */}
        { error && ( <Error>
          <h1>Pasando el mensaje con Children</h1>
          <p> Todos los campos son obligatorios</p>
        </Error>  )}

        {/* petName */}
        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'
            >Mascota</label>
          <input
            id="mascota"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="text"
            placeholder='Nombre de la mascota'
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        {/* pet owned name */}
        <div className='mb-5'>
          <label
            htmlFor='owned'
            className='block text-gray-700 uppercase font-bold'
            >Propietario</label>
          <input
            id="propietario"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="text"
            placeholder='Nombre del propietario'
            value={owned}
            onChange={ (e) => setOwned(e.target.value) }
          />
        </div>
        {/* Email */}
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
            >Email</label>
          <input
            id="email"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="email"
            placeholder='Email'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        {/* Fecha de alta */}
        <div className='mb-5'>
          <label
            htmlFor='date'
            className='block text-gray-700 uppercase font-bold'
            >Fecha de Alta</label>
          <input
            id="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="date"
            placeholder='Fecha de alta del paciente'
            value={date}
            onChange={ (e) => setDate(e.target.value) }
          />
        </div>
        {/* symptom */}
        <div className='mb-5'>
          <label
            htmlFor='symptom'
            className='block text-gray-700 uppercase font-bold'
            >Síntomas</label>
          <textarea
            name=""
            id="symptom"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            placeholder='Descricción de los síntomas'
            value={symptom}
            onChange={ (e) => setSymptom(e.target.value) }
            >
            </textarea>
        </div>
        <button
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold text-center hover:bg-indigo-700 transition-colors cursor-pointer'
          type="submit">Agregar paciente</button>
      </form>
    </div>
  )
}

export default Form