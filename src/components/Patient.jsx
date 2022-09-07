const Patient = ({patient}) => {
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
    </div>
  )
}

export default Patient