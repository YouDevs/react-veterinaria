import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg my-5 text-center'>
        Añade {''}
        <span className='text-indigo-600 font-bold'>y Administra Pacientes</span>
      </p>

      <form className='bg-white shadow-sm rounded-sm py-10 px-5' action="">
        <div>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'
            >Mascota</label>
          <input
            id="mascota"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="text"
            placeholder='Nombre de la mascota'
          />
        </div>
      </form>
    </div>
  )
}

export default Form