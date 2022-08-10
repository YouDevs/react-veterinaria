import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text-lg my-5 text-center'>
        Añade {''}
        <span className='text-indigo-600 font-bold'>y Administra Pacientes</span>
      </p>

      <form className='bg-white shadow-sm rounded-sm py-10 px-5 mb-10' action="">
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
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'
            >Propietario</label>
          <input
            id="propietario"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="text"
            placeholder='Nombre del propietario'
          />
        </div>
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
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
            >Fecha de Alta</label>
          <input
            id="alta"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            type="date"
            placeholder='Fecha de alta del paciente'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'
            >Síntomas</label>
          <textarea
            name=""
            id="sintomas"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm'
            placeholder='Descricción de los síntomas'>
            </textarea>
        </div>

        <input
          type="sumbit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold text-center hover:bg-indigo-700 transition-colors cursor-pointer'
          value="Agregar paciente"
        />
      </form>
    </div>
  )
}

export default Form