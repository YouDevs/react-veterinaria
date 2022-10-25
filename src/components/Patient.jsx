// import {useEffect} from 'react'

const Patient = ({patient, setPatient, deletePatient}) => {

  // useEffect( () => {
  //   console.log("El componente Patient está listo: ")
  // }, [])

  const handleDelete = () => {
    const response = confirm('Deseas eliminar este paciente?')
    if(response) {
      deletePatient(patient.id)
    }
  }

  return (
    <div className='mx-3 my-5 bg-white shadow-sm px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
          <span className='font-normal normal-case'>{patient.name}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
          <span className='font-normal normal-case'>{patient.owned}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
          <span className='font-normal normal-case'>{patient.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: {''}
          <span className='font-normal normal-case'>{patient.date}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: {''}
          <span className='font-normal normal-case'>{patient.symptom}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo text-white font-bold uppercase rounded"
            onClick={ () => setPatient(patient) }
          >
              Editar
          </button>
          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red text-white font-bold uppercase rounded"
            onClick={handleDelete}
          >
              Eliminar
          </button>
        </div>
    </div>
  )
}

export default Patient