const Patient = () => {
  return (
    <div className='mx-3 my-5 bg-white shadow-sm px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {''}
          <span className='font-normal normal-case'>Blondi</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {''}
          <span className='font-normal normal-case'>Carlos</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {''}
          <span className='font-normal normal-case'>carlos_develops@outlook.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha Alta: {''}
          <span className='font-normal normal-case'>10 Diciembre 2022</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> Síntomas: {''}
          <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sit? Esse cupiditate aliquam repellendus architecto voluptates, porro rem eligendi, corrupti doloribus eveniet facere modi nesciunt autem ad sit odio perferendis!</span>
        </p>
    </div>
  )
}

export default Patient